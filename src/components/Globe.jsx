import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function GlobeMesh() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
    }
  });

  const points = useMemo(() => {
    const vertices = [];
    const radius = 4.5;

    for (let i = 0; i < 3000; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      vertices.push(x, y, z);
    }

    return new Float32Array(vertices);
  }, []);

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 3}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.045} color="#00f5ff" transparent opacity={1} />
      </points>
    </group>
  );
}

export default function Globe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: "100%", height: "100%" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0); // fully transparent background
      }}
    >
      <GlobeMesh />

      <EffectComposer multisampling={0}>
        <Bloom
          intensity={2.5}
          luminanceThreshold={1.5}
          luminanceSmoothing={3.5}
        />
      </EffectComposer>
    </Canvas>
  );
}
