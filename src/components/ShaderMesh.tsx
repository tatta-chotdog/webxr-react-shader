import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";

export const ShaderMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
      }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 1.3, -1]} material={material}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
    </mesh>
  );
};
