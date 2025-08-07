import React, { useEffect, useState } from 'react';

interface ParticleSystemProps {
  count?: number;
  className?: string;
  enableHoverEffect?: boolean;
}

const getParticleSize = () => {
  const sizes = ['particle-small', 'particle-medium', 'particle-large'];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const ParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 20,
  className = '',
  enableHoverEffect = false,
}) => {
  const [particles, setParticles] = useState<
    {
      id: number;
      left: number;
      top: number;
      animationDelay: number;
      animationDuration: number;
      size: string;
      color: string;
    }[]
  >([]);

  useEffect(() => {
    const mobile = window.innerWidth < 640;
    const particleCount = mobile ? Math.floor(count / 2) : count;

    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 10,
      animationDuration: 5 + Math.random() * 10,
      size: getParticleSize(),
      color: Math.random() > 0.5 ? 'particle-blue' : 'particle-pink',
    }));

    setParticles(newParticles);
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.size} ${p.color} ${
            enableHoverEffect ? 'hover:animate-ping' : ''
          }`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.animationDelay}s`,
            animationDuration: `${p.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
