import { useState, useEffect } from 'react';

const MagicalCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 positions
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Hide on touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }
  }, []);

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer ring */}
        <div className={`w-8 h-8 rounded-full border-2 border-primary/60 animate-spin ${
          isHovering ? 'border-primary' : ''
        }`} style={{ animationDuration: '2s' }}>
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary rounded-full -translate-x-1/2 -translate-y-0.5"></div>
        </div>

        {/* Inner core */}
        <div className={`absolute inset-0 w-3 h-3 bg-primary/80 rounded-full animate-pulse-glow m-auto ${
          isHovering ? 'bg-primary shadow-nexus' : ''
        }`}></div>

        {/* Energy particles */}
        {isHovering && (
          <>
            <div className="absolute -inset-2 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
              <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-primary-glow rounded-full -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-primary-glow rounded-full -translate-x-1/2"></div>
              <div className="absolute left-0 top-1/2 w-0.5 h-0.5 bg-primary-glow rounded-full -translate-y-1/2"></div>
              <div className="absolute right-0 top-1/2 w-0.5 h-0.5 bg-primary-glow rounded-full -translate-y-1/2"></div>
            </div>
          </>
        )}
      </div>

      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9998] w-1 h-1 bg-primary/30 rounded-full animate-fade-out"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length * 0.6,
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}

      {/* Magnetic field effect when hovering */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9997] w-16 h-16 rounded-full border border-primary/20 animate-pulse"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </>
  );
};

export default MagicalCursor;