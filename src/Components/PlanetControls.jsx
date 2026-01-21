import React, { useState } from 'react';

const PlanetControls = ({ planets, updatePlanet }) => {
    const [selectedPlanetName, setSelectedPlanetName] = useState(planets[0]?.name);

    const selectedPlanet = planets.find(p => p.name === selectedPlanetName);

    const handleChange = (field, value) => {
        if (!selectedPlanet) return;
        updatePlanet(selectedPlanet.name, field, parseFloat(value));
    };

    if (!selectedPlanet) return null;

    return (
        <div style={{
            position: 'absolute',
            top: 20,
            left: 20,
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            borderRadius: '10px',
            width: '250px',
            zIndex: 200,
            fontFamily: 'system-ui, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        }}>
            <h3 style={{ margin: '0 0 15px 0', borderBottom: '1px solid #555', paddingBottom: '10px', color: '#eee' }}>
                Planet Controls
            </h3>

            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#ccc' }}>Select Planet:</label>
                <select
                    value={selectedPlanetName}
                    onChange={(e) => setSelectedPlanetName(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '4px',
                        background: '#333',
                        color: 'white',
                        border: '1px solid #555'
                    }}
                >
                    {planets.map(p => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                    ))}
                </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <label style={{ fontSize: '14px', color: '#ccc' }}>Radius</label>
                    <span style={{ fontSize: '14px', color: '#aaa' }}>{selectedPlanet.radius.toFixed(2)}</span>
                </div>
                <input
                    type="range"
                    min="0.1"
                    max="5"
                    step="0.1"
                    value={selectedPlanet.radius}
                    onChange={(e) => handleChange('radius', e.target.value)}
                    style={{ width: '100%', accentColor: '#3498db' }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <label style={{ fontSize: '14px', color: '#ccc' }}>Distance</label>
                    <span style={{ fontSize: '14px', color: '#aaa' }}>{selectedPlanet.distance.toFixed(1)}</span>
                </div>
                <input
                    type="range"
                    min="2"
                    max="50"
                    step="0.5"
                    value={selectedPlanet.distance}
                    onChange={(e) => handleChange('distance', e.target.value)}
                    style={{ width: '100%', accentColor: '#2ecc71' }}
                />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <label style={{ fontSize: '14px', color: '#ccc' }}>Speed</label>
                    <span style={{ fontSize: '14px', color: '#aaa' }}>{selectedPlanet.speed.toFixed(2)}</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.1"
                    value={selectedPlanet.speed}
                    onChange={(e) => handleChange('speed', e.target.value)}
                    style={{ width: '100%', accentColor: '#e74c3c' }}
                />
            </div>
        </div>
    );
};

export default PlanetControls;
