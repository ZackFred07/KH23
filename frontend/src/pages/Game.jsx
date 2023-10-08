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

const Homie = ({ ...props }) => {
	const group = useRef();
	const gltf = useLoader(GLTFLoader, "/models/Poly_Character.gltf");

	return (
		<group
			ref={group}
			scale={[0.25, 0.25, 0.25]}
			rotation={[Math.PI / 2, 0, 0]}>
			<primitive object={gltf.scene} />
		</group>
	);
};

// const CircleOfHomies = ({ numHomies, radius }) => {
// 	const homies = [];

// 	for (let i = 0; i < numHomies; i++) {
// 		const angle = (i / numHomies) * Math.PI * 2;
// 		const x = radius * Math.cos(angle);
// 		const z = radius * Math.sin(angle);

// 		// Calculate the rotation to face the direction of orbit
// 		const rotation = [0, angle - Math.PI / 2, 0];

// 		homies.push(<Homie key={i} position={[x, 0, z]} rotation={rotation} radius={radius} />);
// 	}

// 	return <>{homies}</>;
// };

export default function Game() {
	const [isLoading, setIsLoading] = useState(true);
	setTimeout(() => {
		setIsLoading(false);
	}, 5);

	const CameraPosition = new Vector3(0, 6, 15);
	return (
		<div className="Game">
			{isLoading ? (
				<LoadingScreen />
			) : (
				<Canvas camera={{ position: CameraPosition }}>
					<Suspense fallback={null}>
						<Scene />
						<Environment preset="forest" background />
						<Homie
							key={0}
							scale={0.25}
							position={[0, 0, 20]}
							rotation={[0, 0, 0]}
							radius={10}
						/>
					</Suspense>
				</Canvas>
			)}
		</div>
	);
}
