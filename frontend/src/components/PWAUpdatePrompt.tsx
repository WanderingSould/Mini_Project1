import { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { Button } from './ui/button';

export function PWAUpdatePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onNeedRefresh() {
      // Only show the prompt in production
      if (process.env.NODE_ENV === 'production') {
        setShowPrompt(true);
      }
    },
    onRegisteredSW(_swUrl, r) {
      // Check for updates every hour in production
      if (process.env.NODE_ENV === 'production') {
        setInterval(() => {
          r?.update();
        }, 60 * 60 * 1000);
      }
    }
  });

  useEffect(() => {
    if (needRefresh && process.env.NODE_ENV === 'production') {
      setShowPrompt(true);
    }
  }, [needRefresh]);

  const handleUpdate = () => {
    updateServiceWorker(true);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black/80 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 shadow-lg">
        <p className="text-white mb-4">A new version is available!</p>
        <div className="flex gap-4">
          <Button
            variant="default"
            className="bg-purple-600 hover:bg-purple-700"
            onClick={handleUpdate}
          >
            Update
          </Button>
          <Button
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            onClick={() => setShowPrompt(false)}
          >
            Later
          </Button>
        </div>
      </div>
    </div>
  );
}
