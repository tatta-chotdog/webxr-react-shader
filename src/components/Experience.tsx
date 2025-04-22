import { useXRStore } from "../stores/useXRStore";
import { ShaderMesh } from "./ShaderMesh";

export const Experience = () => {
  const { isInVR } = useXRStore();

  if (!isInVR) return null;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ShaderMesh />
    </>
  );
};
