import { useState, useEffect } from 'react';
import MagicalCursor from './MagicalCursor';

interface PortalEntranceProps {
  onEnter: () => void;
}

const PortalEntrance = ({ onEnter }: PortalEntranceProps) => {
  const [textSequence, setTextSequence] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const sequences = [
    "System Online",
    "Initializing Neural Interface...|",
    "Quantum pathways converging",
    "Creative fire ignition systems",
    "Innovation protocols activated",
    "Ready to enter..."
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textSequence < sequences.length - 1) {
        setTextSequence(prev => prev + 1);
      } else {
        setShowButton(true);
      }
    }, textSequence === 0 ? 1000 : 800);

    return () => clearTimeout(timer);
  }, [textSequence, sequences.length]);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <>
      <MagicalCursor />
      <div className={`fixed inset-0 z-50 bg-background transition-all duration-1000 ${
        isExiting ? 'opacity-0 scale-110' : 'opacity-100'
      }`}>
      {/* Animated Background Grid with Sun Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 70%),
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '200% 200%, 50px 50px, 50px 50px',
          animation: 'float 8s ease-in-out infinite, pulse-glow 4s ease-in-out infinite'
        }} />
      </div>

      {/* Enhanced 3D Moving Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            {i % 5 === 0 && (
              <div className="w-3 h-3 bg-primary/50 rotate-45 animate-spin shadow-[var(--shadow-nexus)]" 
                   style={{ animationDuration: '6s' }} />
            )}
            {i % 5 === 1 && (
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse-glow shadow-[var(--shadow-cyber)]" />
            )}
            {i % 5 === 2 && (
              <div className="w-4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
            )}
            {i % 5 === 3 && (
              <div className="w-1 h-4 bg-gradient-to-b from-transparent via-primary-glow to-transparent animate-float" />
            )}
            {i % 5 === 4 && (
              <div className="w-2 h-2 border border-primary/60 rounded-full animate-spin"
                   style={{ animationDuration: '8s' }}>
                <div className="w-0.5 h-0.5 bg-primary rounded-full m-auto mt-0.5"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Central Portal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Enhanced Sun Glow Effect */}
          <div className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-radial from-primary/40 via-primary/20 to-transparent animate-pulse-glow" 
               style={{ filter: 'blur(30px)' }} />
          <div className="absolute inset-0 w-64 h-64 rounded-full bg-gradient-radial from-primary-glow/30 via-primary/15 to-transparent animate-pulse-glow" 
               style={{ filter: 'blur(15px)', animationDelay: '1s' }} />
          
          {/* Portal Rings */}
          <div className="relative w-32 h-32">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-primary/60"
                style={{
                  width: `${8 + i * 2}rem`,
                  height: `${8 + i * 2}rem`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `spin ${8 + i * 2}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`
                }}
              />
            ))}
            
            {/* Central Core */}
            <div className="absolute inset-0 w-16 h-16 m-auto rounded-full bg-gradient-radial from-primary via-primary-glow to-primary/80 animate-pulse-glow shadow-[var(--shadow-intense)]" />
          </div>
        </div>
      </div>

      {/* Text Interface */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-64 space-y-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary text-glow mb-2">
            Digital Nexus
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-glow">
            Awakening
          </h2>
        </div>

        {/* Text Sequence */}
        <div className="min-h-[200px] flex flex-col items-center space-y-3 text-center px-4">
          {sequences.slice(0, textSequence + 1).map((text, index) => (
            <div
              key={index}
              className={`text-sm md:text-base font-mono transition-all duration-500 ${
                index === 0 
                  ? 'text-accent animate-cyber-slide' 
                  : index < 3
                  ? 'text-primary animate-cyber-slide'
                  : 'text-primary-glow animate-cyber-slide'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index === 0 && '> '}
              {index === 1 && '▸ '}
              {index === 2 && '◈ '}
              {index === 3 && '⦿ '}
              {index === 4 && '◉ '}
              {index === 5 && '→ '}
              {text}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        {textSequence >= 2 && (
          <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000"
              style={{ width: `${((textSequence - 1) / 4) * 100}%` }}
            />
          </div>
        )}

        {/* Enter Button */}
        {showButton && (
          <button
            onClick={handleEnter}
            className="mt-8 px-8 py-4 bg-transparent border-2 border-primary/60 text-primary rounded-full font-semibold transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[var(--shadow-nexus)] hover:scale-105 animate-fade-in"
          >
            Enter the Digital Realm
          </button>
        )}
      </div>

      {/* Corner Diagnostics */}
      <div className="absolute top-4 left-4 text-xs font-mono text-primary/60 space-y-1">
        <div>Neural bandwidth: 97%</div>
        <div>Quantum flux: stable</div>
        <div>Reality.exe: running</div>
      </div>

      <div className="absolute bottom-4 right-4 text-xs font-mono text-primary/60">
        Version 2.0.45 | {new Date().getFullYear()}
      </div>
      </div>
    </>
  );
};

export default PortalEntrance;