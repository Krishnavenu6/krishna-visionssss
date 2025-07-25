import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface PortalEntranceProps {
  onEnter: () => void;
}

const PortalEntrance = ({ onEnter }: PortalEntranceProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const steps = [
    { text: "Quantum pathways converging", completed: false },
    { text: "Creative fire ignition systems", completed: false },
    { text: "Innovation protocols activated", completed: false }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length) {
          if (prev === steps.length - 1) {
            setTimeout(() => setShowButton(true), 800);
          }
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5
  }));

  return (
    <div className={`fixed inset-0 z-50 bg-black overflow-hidden transition-all duration-1500 ${
      isExiting ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
    }`}>
      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-orange-400/60 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Code snippet on left */}
      <div className="absolute top-8 left-8 text-cyan-400 font-mono text-sm opacity-60">
        <div>Global simulation = true;</div>
      </div>

      {/* Function definition on right */}
      <div className="absolute top-1/3 right-12 text-cyan-400 font-mono text-sm opacity-40">
        <div>function awakening() {'{'}</div>
        <div className="ml-4">return reality;</div>
        <div>{'}'}</div>
      </div>

      {/* Central portal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          {/* Glowing portal circle */}
          <div className="relative mb-12">
            <div className={`w-32 h-32 mx-auto rounded-full transition-all duration-2000 ${
              isExiting ? 'scale-[20] opacity-100' : 'scale-100 opacity-80'
            }`}>
              {/* Multiple glow layers */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-orange-500/80 via-red-500/40 to-transparent animate-pulse" />
              <div className="absolute inset-2 rounded-full bg-gradient-radial from-orange-400/90 via-red-400/30 to-transparent" />
              <div className="absolute inset-4 rounded-full bg-gradient-radial from-orange-300 via-orange-500/50 to-transparent animate-pulse" 
                   style={{ animationDuration: '2s' }} />
              <div className="absolute inset-6 rounded-full bg-orange-400 shadow-[0_0_50px_orange]" />
            </div>
          </div>

          {/* Main title */}
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-b from-orange-400 to-red-500 bg-clip-text text-transparent">
            Digital Nexus
          </h1>
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-b from-orange-400 to-red-500 bg-clip-text text-transparent">
            Awakening
          </h2>

          {/* Initializing text */}
          <div className="text-cyan-400 font-mono mb-8 text-lg">
            Initializing Neural Interface...
          </div>

          {/* Progress steps */}
          <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center transition-all duration-500 ${
                  index < currentStep ? 'opacity-100 text-orange-300' : 
                  index === currentStep ? 'opacity-100 text-yellow-300' : 
                  'opacity-30 text-gray-500'
                }`}
              >
                <span className="text-orange-400 mr-3">
                  {index < currentStep ? '✓' : '▶'}
                </span>
                <span className="font-mono">{step.text}</span>
              </div>
            ))}
          </div>

          {/* Ready text */}
          {currentStep >= steps.length && (
            <div className="text-orange-300 font-mono mb-8 animate-fade-in">
              Ready to enter...
            </div>
          )}

          {/* Enter button */}
          {showButton && (
            <div className="animate-fade-in">
              <Button
                onClick={handleEnter}
                className="bg-transparent border-2 border-orange-500 text-orange-300 hover:bg-orange-500/20 hover:text-orange-200 px-8 py-3 text-lg font-mono rounded-full transition-all duration-300 hover:shadow-[0_0_30px_orange] hover:scale-105"
              >
                Enter the Digital Realm
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortalEntrance;