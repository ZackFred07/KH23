import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OBJLoader } from 'three/addons/loaders/OBJLoader';
import { OrbitControls } from 'react-orbit-controls';
import * as THREE from 'three';

const Canvas = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <CourtroomScene />
    </Canvas>
  )
}

