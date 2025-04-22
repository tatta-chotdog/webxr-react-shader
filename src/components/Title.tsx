import { useXRStore } from "../stores/useXRStore";

export const Title = () => {
  const { isInVR } = useXRStore();

  if (isInVR) return null;

  return (
    <div className="title-container">
      <h1 className="title-text">WebXR React Shader</h1>
    </div>
  );
};
