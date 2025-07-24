"use client"

import { useState, useEffect, useRef, FormEvent } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Play, Pause, Volume2, Mic, Brain, Eye, Send, Loader2, XCircle, VolumeX } from "lucide-react"
import Tesseract from "tesseract.js";
import { Input } from "./ui/input";

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [manualGameName, setManualGameName] = useState("");
  const [ocrData, setOcrData] = useState<string | null>(null);
  const [ocrStream, setOcrStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ocrIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const workerRef = useRef<any>(null);

  // Chatbot State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isTtsEnabled, setIsTtsEnabled] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Tesseract worker once
  useEffect(() => {
    const initWorker = async () => {
      workerRef.current = await Tesseract.createWorker('eng');
    };

    initWorker();
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    async function requestScreenCapture() {
      if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        try {
          const stream = await navigator.mediaDevices.getDisplayMedia({
            video: {
              displaySurface: 'window'
            }
          });
          setOcrStream(stream);
        } catch (err) {
          console.warn("Screen capture permission denied or error occurred", err);
        }
      }
    }
    requestScreenCapture();
  }, [isPlaying]);

  // Cleanup effect: only runs when isPlaying becomes false or on unmount
  useEffect(() => {
    if (isPlaying) return;
    if (ocrStream) {
      ocrStream.getTracks().forEach(track => track.stop());
      setOcrStream(null);
    }
    setOcrData(null);
    setManualGameName("");
    if (ocrIntervalRef.current) {
      clearInterval(ocrIntervalRef.current);
      ocrIntervalRef.current = null;
    }
  }, [isPlaying]);

  // OCR processing using Tesseract worker
  useEffect(() => {
    if (!isPlaying || !ocrStream || !workerRef.current) {
      if (ocrIntervalRef.current) {
        clearInterval(ocrIntervalRef.current);
        ocrIntervalRef.current = null;
      }
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    ocrIntervalRef.current = setInterval(async () => {
      if (!video.videoWidth || !video.videoHeight || !workerRef.current) return;
      const canvas = document.createElement("canvas");
      // Use full resolution for better accuracy
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      // Apply a grayscale filter to improve OCR accuracy
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
      }
      ctx.putImageData(imageData, 0, 0);
      const {
        data: { text },
      } = await workerRef.current.recognize(canvas);
      setOcrData(text || null);
    }, 1000); // Reduced interval for faster updates
    return () => {
      if (ocrIntervalRef.current) {
        clearInterval(ocrIntervalRef.current);
        ocrIntervalRef.current = null;
      }
    };
  }, [isPlaying, ocrStream]);

  // Voice Recognition Effect
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = false;
      recognitionRef.current.maxAlternatives = 1;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(transcript);
        handleSendMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // TTS Effect
  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utteranceRef.current = utterance;

    const handleVoicesChanged = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      setSelectedVoiceURI(currentURI => {
        if (!currentURI && availableVoices.length > 0) {
          const defaultVoice =
            availableVoices.find(v => v.name === 'Google US English') ||
            availableVoices.find(v => v.lang === 'en-US') ||
            availableVoices[0];
          return defaultVoice ? defaultVoice.voiceURI : null;
        }
        return currentURI;
      });
    };

    speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
    handleVoicesChanged();

    // Cancel speech on component unmount
    return () => {
      speechSynthesis.cancel();
      speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
    };
  }, []);

  const speak = (text: string) => {
    if (isTtsEnabled && utteranceRef.current && text) {
      speechSynthesis.cancel();
      const voice = voices.find((v) => v.voiceURI === selectedVoiceURI);
      if (voice) {
        utteranceRef.current.voice = voice;
      }
      utteranceRef.current.text = text;
      speechSynthesis.speak(utteranceRef.current);
    }
  };
  const handleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsListening(true);
      } else {
        alert("Sorry, your browser does not support speech recognition.");
      }
    }
  };

  const handleStopGenerating = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      speechSynthesis.cancel();
    }
  };

  const handleSendMessage = async (messageText?: string) => {
    const message = (typeof messageText === 'string' ? messageText : userInput).trim();
    if (!message) return;

    setIsChatLoading(true);
    setUserInput("");
    setChatMessages(prev => [...prev, { sender: 'user', text: message }]);

    const prompt = `You are a helpful gaming buddy. Your name is CAGE. Keep your responses concise and conversational, like a quick chat message. The user is playing "${manualGameName || 'an unknown game'}". Here is some data from their screen:
---
${ocrData || "No data available."}
---
Based on the screen data and the user's question, give a short, helpful tip or answer. If the screen data is unreadable or irrelevant, just answer the question based on your game knowledge. User's Question: "${message}"`;

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'phi3', // Or llama3, mistral, etc.
          prompt: prompt,
          stream: false,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) throw new Error(`Ollama API error: ${response.statusText}`);
      const data = await response.json();
      const aiResponse = data.response;
      setChatMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
      speak(aiResponse);

    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Request aborted by user.');
      } else {
        console.error("Error communicating with local LLM:", error);
        setChatMessages(prev => [...prev, { sender: 'ai', text: "Sorry, I couldn't connect to the AI assistant." }]);
      }
    } finally {
      setIsChatLoading(false);
      abortControllerRef.current = null;
    }
  };

  useEffect(() => {
    if (videoRef.current && ocrStream) {
      (videoRef.current as any).srcObject = ocrStream;
    }
  }, [ocrStream]);

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Interactive Demo</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience CAGE's capabilities firsthand with our interactive demonstrations
          </p>
        </div>

        <Card className="bg-white/5 border-white/10 h-full mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white">OCR Recognition</CardTitle>
                <CardDescription className="text-gray-300">
                  See real-time game data extraction
                </CardDescription>
              </div>
              <Badge className="bg-green-600/20 text-green-300 border-green-400/30">Live Demo</Badge>
              <input
                type="text"
                placeholder="Enter Game Name"
                className="bg-black/50 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400 rounded-md px-3 py-2 text-sm"
                value={manualGameName}
                onChange={(e) => setManualGameName(e.target.value)}
              />

            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-black/40 rounded-lg p-6 mb-6 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                {ocrStream ? (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="mx-auto mb-4 max-h-48 rounded"
                      style={{ maxWidth: '100%' }}
                    />
                    <p className="text-gray-400 mb-4">
                      Extracting OCR... {/*  <span className="text-green-400">{gameDetected}</span> */}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-6xl mb-4">👁️</div>
                    <p className="text-gray-400 mb-4">
                      OCR game data extraction would appear here
                    </p>
                    <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                      Demo Placeholder
                    </Badge>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Button onClick={() => setIsPlaying(!isPlaying)} className="bg-purple-600 hover:bg-purple-700">
                {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                {isPlaying ? "Pause Demo" : "Start Demo"}
              </Button>
              <Button variant="outline" className="border-purple-400/30 text-purple-300 bg-transparent">
                Reset
              </Button>
            </div>
            {manualGameName && (
              <div className="mt-4 text-green-400 font-semibold text-center">
                Game Detected : {manualGameName}
              </div>
            )}
            {ocrData && (
              <div className="mt-4 p-4 bg-black/30 rounded-md">
                <h4 className="text-purple-300 font-semibold mb-2">Live OCR Data:</h4>
                <pre className="text-gray-300 text-xs whitespace-pre-wrap">{ocrData}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Chatbot Section */}
        <Card className="bg-white/5 border-white/10 h-full mt-8">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-purple-400" />
              <div>
                <CardTitle className="text-white">CAGE Assistant</CardTitle>
                <CardDescription className="text-gray-300">
                  Ask me anything about the game data.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div ref={chatContainerRef} className="bg-black/30 rounded-md p-4 h-[600px] overflow-y-auto mb-4 flex flex-col space-y-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  {msg.sender === 'ai' && <Brain className="h-6 w-6 text-purple-400 flex-shrink-0" />}
                  <div className={`rounded-lg px-3 py-2 max-w-sm ${msg.sender === 'user' ? 'bg-purple-600' : 'bg-slate-700'}`}>
                    <p className="text-sm text-white">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isChatLoading && (
                <div className="flex items-start gap-3">
                  <Brain className="h-6 w-6 text-purple-400 flex-shrink-0 animate-pulse" />
                  <div className="rounded-lg px-3 py-2 bg-slate-700">
                    <Loader2 className="h-5 w-5 animate-spin text-white" />
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={(e: FormEvent) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center gap-2">
              <Button type="button" variant="ghost" size="icon" onClick={handleListen} className={isListening ? 'text-red-500' : 'text-purple-300'}>
                <Mic className="h-5 w-5" />
              </Button>
              <Button type="button" variant="ghost" size="icon" onClick={() => setIsTtsEnabled(prev => !prev)} className={isTtsEnabled ? 'text-purple-300' : 'text-gray-500'}>
                {isTtsEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </Button>
              {isTtsEnabled && voices.length > 0 && (
                <select
                  value={selectedVoiceURI || ''}
                  onChange={(e) => setSelectedVoiceURI(e.target.value)}
                  className="bg-black/50 border-white/10 text-white text-xs focus:border-purple-400 focus:ring-purple-400 rounded-md px-2 h-10 max-w-[150px]"
                >
                  {voices
                    .filter((v) => v.lang.startsWith("en"))
                    .map((voice) => (
                      <option key={voice.voiceURI} value={voice.voiceURI}>
                        {voice.name}
                      </option>
                    ))}
                </select>
              )}
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about the game..."
                className="bg-black/50 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400"
                disabled={isChatLoading}
              />
              {isChatLoading ? (
                <Button type="button" size="icon" onClick={handleStopGenerating} className="bg-red-600 hover:bg-red-700">
                  <XCircle className="h-5 w-5" />
                </Button>
              ) : (
                <Button type="submit" size="icon" className="bg-purple-600 hover:bg-purple-700">
                  <Send className="h-5 w-5" />
                </Button>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Static list of demo features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <Brain className="h-8 w-8 text-purple-400 mb-2" />
            <div className="text-white font-semibold">AI Chatbot Demo</div>
            <div className="text-gray-400 text-sm">Experience intelligent game assistance</div>
          </div>
          <div className="flex flex-col items-center">
            <Mic className="h-8 w-8 text-purple-400 mb-2" />
            <div className="text-white font-semibold">Voice Commands</div>
            <div className="text-gray-400 text-sm">Try hands-free interaction</div>
          </div>
          <div className="flex flex-col items-center">
            <Eye className="h-8 w-8 text-purple-400 mb-2" />
            <div className="text-white font-semibold">OCR Recognition</div>
            <div className="text-gray-400 text-sm">See real-time game data extraction</div>
          </div>
          <div className="flex flex-col items-center">
            <Volume2 className="h-8 w-8 text-purple-400 mb-2" />
            <div className="text-white font-semibold">Text-to-Speech</div>
            <div className="text-gray-400 text-sm">Listen to AI guidance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
