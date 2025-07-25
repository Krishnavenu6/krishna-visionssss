import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface PortalEntranceProps {
  onEnter: () => void;
}

const PortalEntrance = ({ onEnter }: PortalEntranceProps) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const handleEnter = () => {
    setIsPortalOpen(true);
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-all duration-1500 ${
      isPortalOpen ? 'scale-[20] opacity-0' : 'scale-100 opacity-100'
    }`}>
      {/* Portal Effect */}
      <div className={`absolute inset-0 transition-all duration-1500 ${
        isPortalOpen 
          ? 'bg-gradient-radial from-primary/50 via-primary/20 to-transparent scale-[5] animate-spin' 
          : 'bg-gradient-radial from-transparent via-transparent to-black'
      }`}></div>
      
      {/* Matrix rain background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/30 text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      {/* Central Portal */}
      <div className="relative z-10 text-center">
        {/* Digital Nexus Logo */}
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1.5"></div>
            </div>
            
            {/* Inner counter-rotating ring */}
            <div className="absolute inset-6 rounded-full border border-primary/70 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary-glow rounded-full -translate-x-1/2 -translate-y-1"></div>
            </div>
            
            {/* Core Portal */}
            <div className={`absolute inset-12 rounded-full border-2 border-primary flex items-center justify-center transition-all duration-1000 ${
              isPortalOpen 
                ? 'bg-primary shadow-[0_0_100px_theme(colors.primary)] scale-110' 
                : 'bg-gradient-cyber shadow-intense'
            }`}>
              <div className="text-2xl font-bold text-white animate-pulse-glow">
                DN
              </div>
            </div>
          </div>
        </div>

        {/* Digital Nexus Title */}
        <h1 className="text-6xl font-bold mb-6 bg-gradient-nexus bg-clip-text text-transparent animate-cyber-slide">
          Digital Nexus
        </h1>
        
        <p className="text-xl text-primary/80 mb-8 font-mono">
          Quantum Gateway Initializing...
        </p>

        {/* Enter Portal Button */}
        <Button 
          onClick={handleEnter}
          className="btn-nexus text-lg px-12 py-6 animate-float"
          disabled={isPortalOpen}
        >
          {isPortalOpen ? 'Opening Portal...' : 'Enter the Digital Realm'}
        </Button>

        {/* Portal rings when opening */}
        {isPortalOpen && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 border border-primary/30 rounded-full animate-ping"
                style={{
                  width: `${(i + 1) * 100}px`,
                  height: `${(i + 1) * 100}px`,
                  marginLeft: `-${(i + 1) * 50}px`,
                  marginTop: `-${(i + 1) * 50}px`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortalEntrance;