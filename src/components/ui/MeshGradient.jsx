"use client";

import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useFrame, Canvas, extend } from '@react-three/fiber';
import { MathUtils, Vector3, Color, IcosahedronGeometry } from 'three';
import { Environment } from '@react-three/drei';

extend({ IcosahedronGeometry });

const vertexShader = `
uniform float u_intensity;
uniform float u_time;
uniform float u_noiseScale;
uniform float u_noiseSpeed;

varying vec2 vUv;
varying float vDisplacement;

// Classic Perlin 3D Noise functions
vec4 permute(vec4 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P) {
    vec3 Pi0 = floor(P);
    vec3 Pi1 = Pi0 + vec3(1.0);
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
}

// Turbulence function
float turbulence(vec3 p) {
    float t = 0.0;
    float frequency = 1.0;
    float amplitude = 1.0;
    for (int i = 0; i < 4; i++) {
        t += abs(cnoise(p * frequency)) * amplitude;
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return t;
}

void main() {
    vUv = uv;

    // Multi-layered noise
    float noise1 = cnoise(position * u_noiseScale + vec3(u_time * u_noiseSpeed));
    float noise2 = cnoise(position * (u_noiseScale * 2.0) + vec3(u_time * u_noiseSpeed * 1.5)) * 0.5;
    float turbulenceNoise = turbulence(position + vec3(u_time)) * 0.3;

    // Combined noise displacement
    vDisplacement = noise1 + noise2 + turbulenceNoise;
  
    vec3 newPosition = position + normal * (u_intensity * vDisplacement);
  
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
  
    gl_Position = projectedPosition;
}
`;

const fragmentShader = `
uniform float u_intensity;
uniform float u_time;
uniform vec3 u_color;

varying vec2 vUv;
varying float vDisplacement;

// Procedural noise grain generator
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
    // Dynamic color mixing
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 color = mix(u_color, vec3(1.0, 1.0, 1.0), abs(distort));
    
    // Subtle film grain
    float grain = (rand(vUv + fract(u_time * 0.1)) - 0.5) * 0.08;
    color += grain;
    
    gl_FragColor = vec4(color, 1.0);
}
`;

const Blob = ({ color = '#ffd717', scale = 1.5, intensity = 0.3 }) => {
  const mesh = useRef(null);
  const hover = useRef(false);
  
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: intensity },
      u_color: { value: new Color(color) },
      u_noiseScale: { value: 2.0 },
      u_noiseSpeed: { value: 1.0 },
    }),
    [color, intensity]
  );

  const targetPosition = useRef(new Vector3(0, 0, 0));
  const currentPosition = useRef(new Vector3(0, 0, 0));

  useFrame((state, delta) => {
    if (mesh.current) {
      const material = mesh.current.material;
      if (material?.uniforms) {
        material.uniforms.u_time.value += delta * 0.4;
        material.uniforms.u_noiseScale.value =
          Math.sin(material.uniforms.u_time.value * 0.25) * 1 + 1;
        material.uniforms.u_intensity.value = MathUtils.lerp(
          material.uniforms.u_intensity.value,
          hover.current ? 0.45 : intensity,
          0.02
        );
      }
      const px = state.pointer?.x ?? 0;
      const py = state.pointer?.y ?? 0;
      targetPosition.current.set(px * 0.4, py * 0.4, 0);
      currentPosition.current.lerp(targetPosition.current, 0.1);
      mesh.current.position.copy(currentPosition.current);
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={scale}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
};

export default function MeshGradient({
  color = '#ffd717',
  scale = 1.5,
  intensity = 0.3,
  className = "absolute inset-0 w-full h-full pointer-events-none"
}) {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
    setMounted(true);
  }, []);

  if (!mounted || !hasWebGL) return null;

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0.0, 0.0, 8.0], fov: 10 }}
        style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Environment preset="studio" environmentIntensity={0.5} />
        <Blob color={color} scale={scale} intensity={intensity} />
      </Canvas>
    </div>
  );
}
