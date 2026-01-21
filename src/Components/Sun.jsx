import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import React from "react";

const Sun = () => {
    const sunTexture = useLoader(TextureLoader, '/textures/sun.jpg');

    return (
        <mesh>
            <sphereGeometry args={[1.4, 32, 32]} />
            <meshBasicMaterial map={sunTexture} />
        </mesh>
    );
}
export default Sun;