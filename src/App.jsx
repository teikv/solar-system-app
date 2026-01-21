import { Canvas } from '@react-three/fiber';
import Sun from './Components/Sun.jsx';
import Planet from './Components/Planet.jsx';
import { useState } from 'react';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import AnimationController from './Components/AnimationController.jsx';
import SaturnGroup from './Components/SaturnGroup.jsx';
import InfoPanel from './Components/InfoPanel.jsx';
import PlanetControls from './Components/PlanetControls.jsx';

import { useRef } from 'react';

function App() {
  const [elapsed, setElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selected, setSelected] = useState(null);
  const controlsRef = useRef();

  const [planets, setPlanets] = useState([
    { name: 'Mercury', radius: 0.25, distance: 3, speed: 2.0 },
    { name: 'Venus', radius: 0.45, distance: 4.5, speed: 1.6 },
    { name: 'Earth', radius: 0.5, distance: 6, speed: 1 },
    { name: 'Mars', radius: 0.35, distance: 8, speed: 0.8 },
    { name: 'Jupiter', radius: 1.2, distance: 12, speed: 0.4 },
    { name: 'Saturn', radius: 1.0, distance: 16, speed: 0.3 },
    { name: 'Uranus', radius: 0.7, distance: 20, speed: 0.2 },
    { name: 'Neptune', radius: 0.65, distance: 24, speed: 0.15 },
  ]);

  const updatePlanet = (name, field, value) => {
    setPlanets(prev => prev.map(p => p.name === name ? { ...p, [field]: value } : p));
  };

  const saturnData = planets.find(p => p.name === 'Saturn');

  return (
    <>
      <PlanetControls planets={planets} updatePlanet={updatePlanet} />
      <button style={{ position: "absolute", top: 20, right: 20, zIndex: 100, padding: "12px 20px", fontSize: "20px", background: isPaused ? "#e74c3c" : "#27ae60", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }} onClick={() => setIsPaused((p) => !p)}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
      <Canvas camera={{ position: [0, 10, 20], fov: 45 }}>
        <AnimationController
          isPaused={isPaused}
          setElapsed={setElapsed}
          elapsed={elapsed}
          selected={selected}
          planets={planets}
          controlsRef={controlsRef}
        />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Sun />
        {planets.filter(p => p.name !== 'Saturn').map((planet) => (
          <Planet
            key={planet.name}
            name={planet.name}
            radius={planet.radius}
            distance={planet.distance}
            speed={planet.speed}
            elapsed={elapsed}
            isPaused={isPaused}
            onSelect={setSelected}
          />
        ))}
        <SaturnGroup
          onSelect={setSelected}
          elapsed={elapsed}
          isPaused={isPaused}
          radius={saturnData?.radius}
          distance={saturnData?.distance}
          speed={saturnData?.speed}
        />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls
          ref={controlsRef}
          enablePan={true}
          enableRotate={true}
          enableZoom={true}
          panSpeed={2.5}
          rotateSpeed={1.0}
          zoomSpeed={1.0}
          minDistance={2}
          maxDistance={1000}
          autoRotate={!isPaused}
          autoRotateSpeed={0.4}
          mouseButton={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN
          }}
        />
      </Canvas>
      {selected &&
        <InfoPanel planet={selected} onClose={() => setSelected(null)} />
      }
    </>
  );
}

export default App;