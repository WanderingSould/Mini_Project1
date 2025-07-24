"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Play, Pause, Volume2, Mic, Brain, Eye } from "lucide-react"
import Tesseract from "tesseract.js";

export function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [gameDetected, setGameDetected] = useState("");
  const [ocrStream, setOcrStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ocrIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const workerRef = useRef<any>(null);

  // Initialize Tesseract worker once
  useEffect(() => {
    const initWorker = async () => {
      workerRef.current = await Tesseract.createWorker();
      await workerRef.current.loadLanguage('eng');
      await workerRef.current.initialize('eng');
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
              displaySurface: 'monitor'
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
    setGameDetected("");
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
      if (!video.videoWidth || !video.videoHeight) return;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      if (workerRef.current) {
        const {
          data: { text },
        } = await workerRef.current.recognize(canvas);
        setGameDetected(text.trim().split("\n")[0] || "No text detected");
      }
    }, 2000);
    return () => {
      if (ocrIntervalRef.current) {
        clearInterval(ocrIntervalRef.current);
        ocrIntervalRef.current = null;
      }
    };
  }, [isPlaying, ocrStream]);

  useEffect(() => {
    if (videoRef.current && ocrStream) {
      (videoRef.current as any).srcObject = ocrStream;
    }
  }, [ocrStream]);

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
            {gameDetected && (
              <div className="mt-4 text-green-400 font-semibold text-center">
                Game Detected {gameDetected}
              </div>
            )}
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
