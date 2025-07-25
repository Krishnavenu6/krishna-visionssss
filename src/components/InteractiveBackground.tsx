import { useEffect, useRef, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    // Initialize floating elements
    const initElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 40 + 20,
          opacity: Math.random() * 0.3 + 0.1,
          color: Math.random() > 0.5 ? 'orange' : 'cyan',
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2
        });
      }
      setElements(newElements);
    };

    initElements();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', initElements);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initElements);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setElements(prevElements => 
        prevElements.map(element => {
          let { x, y, vx, vy } = element;

          // Mouse interaction - elements move away from cursor
          const dx = x - mousePos.x;
          const dy = y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150;
            vx += (dx / distance) * force * 0.02;
            vy += (dy / distance) * force * 0.02;
          }

          // Apply velocity
          x += vx;
          y += vy;

          // Boundary collision with bounce
          if (x <= 0 || x >= window.innerWidth) {
            vx *= -0.8;
            x = Math.max(0, Math.min(window.innerWidth, x));
          }
          if (y <= 0 || y >= window.innerHeight) {
            vy *= -0.8;
            y = Math.max(0, Math.min(window.innerHeight, y));
          }

          // Friction
          vx *= 0.98;
          vy *= 0.98;

          // Update rotation
          const rotation = element.rotation + element.rotationSpeed;

          return {
            ...element,
            x,
            y,
            vx,
            vy,
            rotation
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Geometric floating elements */}
      {elements.map(element => (
        <div
          key={element.id}
          className="absolute transition-all duration-100 ease-out"
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            transform: `translate(-50%, -50%) rotate(${element.rotation}deg)`,
          }}
        >
          {/* Different geometric shapes */}
          {element.id % 3 === 0 ? (
            // Triangle
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(45deg, ${element.color === 'orange' ? '#f97316' : '#06b6d4'}, transparent)`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                filter: 'blur(1px)'
              }}
            />
          ) : element.id % 3 === 1 ? (
            // Circle
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle, ${element.color === 'orange' ? '#f97316' : '#06b6d4'}40, transparent 70%)`,
                filter: 'blur(2px)'
              }}
            />
          ) : (
            // Square
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(135deg, ${element.color === 'orange' ? '#f97316' : '#06b6d4'}30, transparent)`,
                borderRadius: '20%',
                filter: 'blur(1px)'
              }}
            />
          )}
        </div>
      ))}

      {/* Connecting lines between nearby elements */}
      <svg className="absolute inset-0 w-full h-full">
        {elements.map((element, i) => 
          elements.slice(i + 1).map((otherElement, j) => {
            const dx = element.x - otherElement.x;
            const dy = element.y - otherElement.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
              const opacity = Math.max(0, (200 - distance) / 200 * 0.1);
              return (
                <line
                  key={`${i}-${j}`}
                  x1={element.x}
                  y1={element.y}
                  x2={otherElement.x}
                  y2={otherElement.y}
                  stroke={element.color === 'orange' ? '#f97316' : '#06b6d4'}
                  strokeWidth="1"
                  opacity={opacity}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`
        }}
      />
    </div>
  );
};

export default InteractiveBackground;