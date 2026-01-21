import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import React from "react";


const SaturnGroup = ({ onSelect, elapsed, isPaused, radius = 1.0, distance = 16, speed = 0.3 }) => {

    const saturnTexture = useLoader(TextureLoader, `/textures/saturn.jpg`);
    const ringTexture = useLoader(TextureLoader, `/textures/saturn_ring.png`);

    const groupRef = React.useRef();

    useFrame((state, delta) => {
        if (isPaused) return;
        const angle = elapsed * speed; // Saturn's orbital speed
        groupRef.current.position.x = Math.cos(angle) * distance; //Distance from sun
        groupRef.current.position.z = Math.sin(angle) * distance;
        groupRef.current.rotation.y += delta * 0.8; // Saturn's rotation speed
    });

    return (
        <group ref={groupRef}>
            <mesh onClick={(e) => {
                e.stopPropagation();
                onSelect('Saturn');
            }}>
                <sphereGeometry args={[radius, 32, 32]} />
                <meshStandardMaterial map={saturnTexture} />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[radius * 1.2, radius * 2.0, 64]} />
                <meshStandardMaterial
                    map={ringTexture}
                    side={2}
                    transparent={true}
                />
            </mesh>
        </group>
    );
}

export default SaturnGroup;