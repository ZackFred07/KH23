import { Canvas } from "@react-three/fiber";
import { useLoader, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader"; // Correct import
import { Vector3 } from "three";

import "./Game.css";

const LoadingScreen = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress < 100) {
					return prevProgress + 1;
				} else {
					clearInterval(interval);
					return prevProgress;
				}
			});
		}, 50); // Adjust the interval duration for the desired loading time
	}, []);

	return (
		<div className="loading-screen">
			<div className="loading-bar" style={{ width: `${progress}%` }}></div>
		</div>
	);
};

const Scene = ({ ...props }) => {
	const group = useRef();
	const gltf = useLoader(GLTFLoader, "/models/GameVillage.gltf");

	return (
		<group ref={group} {...props} dispose={null}>
			<primitive object={gltf.scene} />
		</group>
	);
};

const Homie = ({rotation,position, ...props }) => {
	const group = useRef();
	const gltf = useLoader(GLTFLoader, "/models/Poly_Character.gltf");

	return (
		<group ref={group}>
			<primitive
				object={gltf.scene}
				scale={[0.25, 0.25, 0.25]}
				rotation={[Math.PI / 2 + rotation[0], rotation[1], Math.PI / 2 + rotation[2]]}
				position={[0+position[0], 2+position[1], 2+position[2]]}
			/>
		</group>
	);
};

// No work :(
const CircleOfHomies = ({ numHomies, radius }) => {
	const homies = [];

	for (let i = 0; i < numHomies; i++) {
		const angle = (i / numHomies) * Math.PI * 2; // Calculate the angle for each Homie
		const x = radius * Math.cos(angle); // Calculate the x position
		const z = radius * Math.sin(angle); // Calculate the z position

		homies.push(
		  <Homie
			key={i}
			position={[x, 0, z]}
			rotation={[0, angle, 0]}
			radius={radius}
		  />
		);
	  }



	return <>{homies}</>;
};

export default function Game() {
	const [isLoading, setIsLoading] = useState(true);

	const CameraPosition = new Vector3(0, 6, 15);
	return (
		<div className="Game">
			<Canvas camera={{ position: CameraPosition }}>
				<Suspense fallback={null}>
					<Scene />
					<Environment preset="forest" background />
					<CircleOfHomies numHomies={7} radius={20}/>
				</Suspense>
			</Canvas>
		</div>
	);
}
