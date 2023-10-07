import React, { useEffect } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const CameraController = () => {
	const { camera, gl } = useThree();
	useEffect(() => {
		const controls = new OrbitControls(camera, gl.domElement);

		controls.minDistance = 3;
		controls.maxDistance = 20;
		return () => {
			controls.dispose();
		};
	}, [camera, gl]);
	return null;
};

const Box = () => {
	return (
		<mesh>
			<boxBufferGeometry attach="geometry" />
			<meshLambertMaterial />
		</mesh>
	);
};

const Game = () => {
	return (
		<Canvas id="game">
			<ambientLight />
			<spotLight intensity={0.3} position={[5, 10, 50]} />
			<Box/>
		</Canvas>
	);
};

export default Game;
