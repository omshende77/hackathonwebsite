import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* =========================
   MAIN GLOBE MESH
========================= */
function GlobeMesh() {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Base rotation
    groupRef.current.rotation.y += delta * 0.4;

    // Floating effect
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;

    // Smooth entry scale animation
    if (groupRef.current.scale.x < 1) {
      groupRef.current.scale.x += 0.02;
      groupRef.current.scale.y += 0.02;
      groupRef.current.scale.z += 0.02;
    }
  });

  const points = useMemo(() => {
    const vertices = [];
    const radius = 4;

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
    <group
      ref={groupRef}
      scale={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 3}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.05}
          color={hovered ? "#00ffff" : "#00f5ff"}
          transparent
          opacity={hovered ? 1 : 0.9}
          depthWrite={false}
        />
      </points>

      {/* Orbit Rings

      {/* Horizontal */}
      {/* <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[5, 0.018, 16, 100]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.25} />
      </mesh> */}

      {/* Vertical */}
      {/* <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[5, 0.018, 16, 100]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.18} />
      </mesh> */}

      {/* Tilted Ring */}
      {/* <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.15} />
      </mesh> */}

      {/* Outer Soft Ring */}
      {/* <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.08} />
      </mesh>  */}
    </group>
  );
}

/* =========================
   EXPORT CANVAS
========================= */

export default function Globe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      style={{ width: "100%", height: "100%" }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#000000"), 0);
      }}
    >
      <GlobeMesh />

      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.6} />

      <EffectComposer multisampling={0}>
        <Bloom
          intensity={1.8}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}
