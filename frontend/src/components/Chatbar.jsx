import React,{ useRef } from 'react'
import * as THREE from 'three';

const Chatbar = ({ text, position }) => {
  const textRef = useRef();

  // Create a text geometry for the dialogue
  const textGeometry = new THREE.TextGeometry(text, {
    font: new THREE.FontLoader().parse('/path/to/font.json'), // Replace with your font file
    size: 0.2,
    height: 0.02,
  });

  // Create a material for the text
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  // Create a mesh for the text
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.copy(position);
  textRef.current.add(textMesh);

  return <group ref={textRef} />;

}

export default Chatbar
