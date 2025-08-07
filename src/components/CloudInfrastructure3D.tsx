import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Float, Sphere, Box, Cylinder, OrbitControls, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play } from 'lucide-react';
import * as THREE from 'three';

// Floating Cloud Service Component
const CloudService = ({ position, icon, color, name, scale = 1 }: any) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group 
        ref={meshRef}
        position={position}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Service Container */}
        <Box args={[1.2, 1.2, 1.2]} scale={scale}>
          <meshStandardMaterial 
            color={color}
            transparent
            opacity={0.8}
            roughness={0.1}
            metalness={0.8}
            emissive={color}
            emissiveIntensity={hovered ? 0.4 : 0.2}
          />
        </Box>
        
        {/* Glow Effect */}
        <Sphere args={[0.8]} scale={scale * 1.5}>
          <meshBasicMaterial 
            color={color}
            transparent
            opacity={hovered ? 0.3 : 0.1}
          />
        </Sphere>

        {/* Service Label */}
        <Text
          position={[0, -1.5 * scale, 0]}
          fontSize={0.3 * scale}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/helvetiker_regular.typeface.json"
        >
          {name}
        </Text>
      </group>
    </Float>
  );
};

// Connection Lines Component
const ConnectionLines = ({ services }: any) => {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, index) => {
        const material = (line as THREE.Line).material as THREE.LineBasicMaterial;
        if (material) {
          material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.2;
        }
      });
    }
  });

  const lines = useMemo(() => {
    const connections = [];
    for (let i = 0; i < services.length; i++) {
      for (let j = i + 1; j < services.length; j++) {
        const points = [
          new THREE.Vector3(...services[i].position),
          new THREE.Vector3(...services[j].position)
        ];
        connections.push(points);
      }
    }
    return connections;
  }, [services]);

  return (
    <group ref={linesRef}>
      {lines.map((points, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <primitive 
            key={index} 
            object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ 
              color: '#00d4ff', 
              transparent: true, 
              opacity: 0.5 
            }))} 
          />
        );
      })}
    </group>
  );
};

// Central Logo Component
const CentralLogo = () => {
  const logoRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;

  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      logoRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={logoRef} position={[0, 0, 0]}>
      {/* Central Sphere */}
      <Sphere args={[isMobile ? 0.8 : 1.2]}>
        <meshStandardMaterial
          color="#4f46e5"
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.9}
          emissive="#4f46e5"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Outer Glow Ring */}
      <Cylinder args={[isMobile ? 1.5 : 2, isMobile ? 1.5 : 2, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </Cylinder>

      {/* Name Text */}
      <Text
        position={[0, 0, 0]}
        fontSize={isMobile ? 0.4 : 0.6}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/helvetiker_bold.typeface.json"
      >
        PRAVEEN A
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, isMobile ? -0.6 : -0.8, 0]}
        fontSize={isMobile ? 0.15 : 0.2}
        color="#00d4ff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/helvetiker_regular.typeface.json"
      >
        DevOps Engineer
      </Text>
    </group>
  );
};

// Particle System
const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  
  const particleCount = viewport.width < 6 ? 100 : 200;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      colors[i * 3] = Math.random() * 0.5;
      colors[i * 3 + 1] = Math.random() * 0.8 + 0.2;
      colors[i * 3 + 2] = 1;
    }
    
    return [positions, colors];
  }, [particleCount]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        transparent
        opacity={0.6}
        vertexColors
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
};

// Main 3D Scene
const CloudInfraScene = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;
  const isTablet = viewport.width < 10 && viewport.width >= 6;

  const services = useMemo(() => {
    const baseScale = isMobile ? 0.6 : isTablet ? 0.8 : 1;
    const radius = isMobile ? 3 : isTablet ? 4 : 5;
    
    return [
      { 
        name: 'EC2', 
        position: [radius, 2, 0], 
        color: '#ff9500', 
        scale: baseScale 
      },
      { 
        name: 'S3', 
        position: [-radius, 2, 0], 
        color: '#00d4ff', 
        scale: baseScale 
      },
      { 
        name: 'Docker', 
        position: [0, 2, radius], 
        color: '#0db7ed', 
        scale: baseScale 
      },
      { 
        name: 'K8s', 
        position: [0, 2, -radius], 
        color: '#326ce5', 
        scale: baseScale 
      },
      { 
        name: 'Jenkins', 
        position: [radius * 0.7, -2, radius * 0.7], 
        color: '#d33833', 
        scale: baseScale 
      },
      { 
        name: 'GitHub', 
        position: [-radius * 0.7, -2, -radius * 0.7], 
        color: '#24292e', 
        scale: baseScale 
      }
    ];
  }, [viewport.width]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
      <spotLight
        position={[0, 5, 0]}
        intensity={0.8}
        angle={Math.PI / 4}
        penumbra={0.5}
        color="#ffffff"
      />

      <ParticleField />
      <CentralLogo />
      
      {services.map((service, index) => (
        <CloudService
          key={index}
          position={service.position}
          name={service.name}
          color={service.color}
          scale={service.scale}
        />
      ))}
      
      <ConnectionLines services={services} />
      
      {!isMobile && <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />}
    </>
  );
};

// Main Component
const CloudInfrastructure3D = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/50 to-black opacity-80"></div>
      
      {/* 3D Canvas */}
      <div className="flex-1 relative">
        <Canvas
          camera={{ 
            position: [0, 0, 12], 
            fov: 50,
            near: 0.1,
            far: 1000
          }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          className="w-full h-full"
        >
          <CloudInfraScene />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Cloud Infrastructure Mastery
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          Building scalable, automated, and resilient cloud solutions with modern DevOps practices
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group"
          >
            <Play className="h-5 w-5 mr-3 group-hover:animate-pulse" />
            Explore My Projects
            <ExternalLink className="h-5 w-5 ml-3 group-hover:rotate-45 transition-transform duration-300" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Mobile Performance Note */}
      <div className="absolute top-4 right-4 text-xs text-gray-400 opacity-50 sm:hidden">
        Tap to interact
      </div>
    </section>
  );
};

export default CloudInfrastructure3D;