import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface PortalEntranceProps {
  onEnter: () => void;
}

const PortalEntrance = ({ onEnter }: PortalEntranceProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const lines = [
    "System Online",
    "Initializing Neural Interface...|",
    "Quantum pathways converging",
    "Creative fire ignition systems",
    "Innovation protocols activated",
    "Ready to enter..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < lines.length - 1) {
          return prev + 1;
        } else {
          setShowButton(true);
          clearInterval(timer);
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-1000 ${
      isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(var(--primary-rgb),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Portal effect */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isExiting ? 'bg-primary/30' : 'bg-transparent'
      }`}>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
          isExiting ? 'w-full h-full rounded-none' : 'w-0 h-0 rounded-full'
        } bg-gradient-radial from-primary/20 to-transparent`} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Terminal-style container */}
        <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-8 shadow-2xl">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-primary/20">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-muted-foreground ml-4">neural_interface.exe</span>
          </div>

          {/* Text lines */}
          <div className="space-y-4 min-h-[200px] flex flex-col justify-center">
            {lines.map((line, index) => (
              <div
                key={index}
                className={`text-left font-mono transition-all duration-500 ${
                  index <= currentLine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="text-primary mr-2">{'>'}</span>
                <span className={`${
                  index === 0 ? 'text-green-400 text-xl font-bold' : 
                  index === lines.length - 1 ? 'text-accent text-lg font-semibold' : 
                  'text-foreground'
                }`}>
                  {line}
                  {index === 1 && currentLine >= 1 && (
                    <span className="animate-pulse">_</span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Enter button */}
          {showButton && (
            <div className="mt-8 animate-fade-in">
              <Button
                onClick={handleEnter}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Enter the Digital Realm
              </Button>
            </div>
          )}
        </div>

        {/* Glowing effects */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-xl opacity-30 animate-pulse" />
      </div>
    </div>
  );
};

export default PortalEntrance;