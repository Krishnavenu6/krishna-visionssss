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
      {/* Enhanced Background with Multiple Sun Glows */}
      <div className="absolute inset-0">
        {/* Primary Sun Glow */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.25) 0%, hsl(var(--primary) / 0.1) 30%, transparent 70%),
            radial-gradient(circle at 30% 30%, hsl(var(--primary-glow) / 0.15) 0%, transparent 60%),
            radial-gradient(circle at 70% 70%, hsl(var(--primary) / 0.1) 0%, transparent 50%)
          `,
          animation: 'pulse-glow 6s ease-in-out infinite'
        }} />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'float 12s ease-in-out infinite'
        }} />
        
        {/* Scanning Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-border-scan"></div>
          <div className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-primary-glow to-transparent animate-border-scan" 
               style={{ animationDelay: '2s', left: '30%' }}></div>
          <div className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-border-scan" 
               style={{ animationDelay: '4s', left: '70%' }}></div>
        </div>
      </div>

      {/* Enhanced 3D Moving Elements with More Variety */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Energy Orbs */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute animate-float opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          >
            <div className="w-3 h-3 bg-gradient-radial from-primary via-primary-glow to-transparent rounded-full animate-pulse-glow shadow-[var(--shadow-intense)]" 
                 style={{ animationDelay: `${Math.random() * 3}s` }} />
          </div>
        ))}
        
        {/* Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`geo-${i}`}
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
              <div className="w-4 h-4 bg-primary/40 rotate-45 animate-spin border border-primary/60 shadow-[var(--shadow-nexus)]" 
                   style={{ animationDuration: '8s' }} />
            )}
            {i % 5 === 1 && (
              <div className="w-2 h-6 bg-gradient-to-b from-primary via-primary-glow to-transparent animate-pulse" />
            )}
            {i % 5 === 2 && (
              <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
            )}
            {i % 5 === 3 && (
              <div className="w-3 h-3 border-2 border-primary/50 rounded-full animate-spin relative"
                   style={{ animationDuration: '10s' }}>
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary-glow rounded-full -translate-x-1/2 -translate-y-0.5"></div>
              </div>
            )}
            {i % 5 === 4 && (
              <div className="w-2 h-2 bg-primary/60 animate-pulse-glow shadow-lg" 
                   style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            )}
          </div>
        ))}
        
        {/* Energy Streams */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              height: '1px',
              transform: `rotate(${Math.random() * 180}deg)`,
              animation: `float ${5 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Central Portal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Enhanced Sun Glow Effects with Multiple Layers */}
          <div className="absolute inset-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/50 via-primary/25 to-transparent animate-pulse-glow" 
               style={{ filter: 'blur(40px)' }} />
          <div className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-radial from-primary-glow/40 via-primary/20 to-transparent animate-pulse-glow" 
               style={{ filter: 'blur(25px)', animationDelay: '1.5s' }} />
          <div className="absolute inset-0 w-64 h-64 rounded-full bg-gradient-radial from-primary/60 via-primary-glow/30 to-transparent animate-pulse-glow" 
               style={{ filter: 'blur(15px)', animationDelay: '3s' }} />
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-radial from-primary-glow/70 to-transparent animate-pulse-glow" 
               style={{ filter: 'blur(8px)', animationDelay: '0.5s' }} />
          
          {/* Enhanced Portal Rings with More Dynamic Animation */}
          <div className="relative w-32 h-32">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-primary/60"
                style={{
                  width: `${6 + i * 2.5}rem`,
                  height: `${6 + i * 2.5}rem`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `spin ${6 + i * 3}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                  borderColor: i % 2 === 0 ? 'hsl(var(--primary) / 0.6)' : 'hsl(var(--primary-glow) / 0.4)'
                }}
              />
            ))}
            
            {/* Pulsing Energy Rings */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`pulse-${i}`}
                className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-glow"
                style={{
                  width: `${12 + i * 4}rem`,
                  height: `${12 + i * 4}rem`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
            
            {/* Enhanced Central Core */}
            <div className="absolute inset-0 w-20 h-20 m-auto rounded-full bg-gradient-radial from-primary via-primary-glow to-primary/80 animate-pulse-glow shadow-[var(--shadow-intense)]">
              <div className="absolute inset-2 rounded-full bg-gradient-radial from-primary-glow/80 to-transparent animate-spin" 
                   style={{ animationDuration: '4s' }}>
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary-glow rounded-full -translate-x-1/2"></div>
              </div>
            </div>
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