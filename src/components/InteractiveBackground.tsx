import { useState, useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    direction: number;
    type: 'cube' | 'sphere' | 'triangle';
  }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize floating elements
    const newElements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 20 + Math.random() * 40,
      speed: 0.2 + Math.random() * 0.8,
      direction: Math.random() * Math.PI * 2,
      type: (['cube', 'sphere', 'triangle'] as const)[Math.floor(Math.random() * 3)]
    }));
    setElements(newElements);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateElements = () => {
      setElements(prev => prev.map(element => {
        let newX = element.x + Math.cos(element.direction) * element.speed;
        let newY = element.y + Math.sin(element.direction) * element.speed;

        // Bounce off edges
        if (newX <= 0 || newX >= window.innerWidth) {
          element.direction = Math.PI - element.direction;
          newX = Math.max(0, Math.min(window.innerWidth, newX));
        }
        if (newY <= 0 || newY >= window.innerHeight) {
          element.direction = -element.direction;
          newY = Math.max(0, Math.min(window.innerHeight, newY));
        }

        // Mouse interaction
        const dx = mousePosition.x - newX;
        const dy = mousePosition.y - newY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          newX -= (dx / distance) * force * 2;
          newY -= (dy / distance) * force * 2;
        }

        return {
          ...element,
          x: newX,
          y: newY
        };
      }));
    };

    const interval = setInterval(animateElements, 16);
    return () => clearInterval(interval);
  }, [mousePosition]);

  const renderElement = (element: typeof elements[0]) => {
    const style = {
      left: element.x,
      top: element.y,
      width: element.size,
      height: element.size,
      transform: 'translate(-50%, -50%)'
    };

    const baseClasses = "absolute opacity-20 transition-all duration-300 hover:opacity-40";

    switch (element.type) {
      case 'cube':
        return (
          <div
            key={element.id}
            className={`${baseClasses} bg-primary/30 border border-primary/50 rotate-45 animate-spin`}
            style={{ ...style, animationDuration: '8s' }}
          />
        );
      case 'sphere':
        return (
          <div
            key={element.id}
            className={`${baseClasses} bg-gradient-radial from-primary/40 to-transparent rounded-full animate-pulse-glow`}
            style={style}
          />
        );
      case 'triangle':
        return (
          <div
            key={element.id}
            className={`${baseClasses} animate-float`}
            style={{ ...style, animationDuration: '6s' }}
          >
            <div 
              className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-primary/40"
              style={{ 
                filter: 'drop-shadow(0 0 10px hsl(var(--primary) / 0.3))',
                animation: 'spin 12s linear infinite'
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      />

      {/* Floating Elements */}
      {elements.map(renderElement)}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {elements.map((element, i) => 
          elements.slice(i + 1).map((otherElement, j) => {
            const distance = Math.sqrt(
              Math.pow(element.x - otherElement.x, 2) + 
              Math.pow(element.y - otherElement.y, 2)
            );
            
            if (distance < 200) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={element.x}
                  y1={element.y}
                  x2={otherElement.x}
                  y2={otherElement.y}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  opacity={1 - distance / 200}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Radial Glow Effect */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.03) 0%, transparent 70%)',
          filter: 'blur(20px)'
        }}
      />
    </div>
  );
};

export default InteractiveBackground;