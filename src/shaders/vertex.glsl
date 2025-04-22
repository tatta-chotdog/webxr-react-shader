uniform float uTime;

void main() {
  float angle = uTime * 0.5;
  float c = cos(angle);
  float s = sin(angle);
  
  vec3 pos = position;
  pos.x = position.x * c - position.z * s;
  pos.z = position.x * s + position.z * c;
  
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
} 