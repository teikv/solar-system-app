import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const AnimationController = ({ isPaused, setElapsed, elapsed, selected, planets, controlsRef }) => {

    useFrame((state, delta) => {
        if (!isPaused) {
            setElapsed((elapsed) => elapsed + delta);
        }

        if (controlsRef.current) {
            if (selected) {
                const planet = planets.find(p => p.name === selected);
                if (planet) {
                    const angle = elapsed * planet.speed;
                    const x = Math.cos(angle) * planet.distance;
                    const z = Math.sin(angle) * planet.distance;
                    controlsRef.current.target.lerp(new THREE.Vector3(x, 0, z), 0.1);
                    controlsRef.current.update();
                }
            } else {
                controlsRef.current.target.lerp(new THREE.Vector3(0, 0, 0), 0.1);
                controlsRef.current.update();
            }
        }
    });

    return null;
};

export default AnimationController;
