import React from "react";

const InfoPanel = ({planet, onClose}) => {
    const info = {
        'Mercury': 'Mercury is the closest planet to the Sun and the smallest in our solar system.',
        'Venus': 'Venus is the second planet from the Sun and has a thick, toxic atmosphere.',
        'Earth': 'Earth is the third planet from the Sun and the only known planet to support life.',
        'Mars': 'Mars is the fourth planet from the Sun, known as the Red Planet due to its reddish appearance.',
        'Jupiter': 'Jupiter is the largest planet in our solar system and is known for its Great Red Spot.',
        'Saturn': 'Saturn is the sixth planet from the Sun, famous for its stunning ring system.',
        'Uranus': 'Uranus is the seventh planet from the Sun and has a unique sideways rotation.',
        'Neptune': 'Neptune is the eighth and farthest known planet from the Sun in our solar system.'
    };
    return <div style={{
        position: 'absolute',
        bottom: 30, 
        left: 30, 
        padding: '15px 20px', 
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        color: 'white', 
        borderRadius: '10px', 
        maxWidth: '300px',
        fontSize: '16px',
        lineHeight: '1.5',
        zIndex: 200,
        }}>
        <h2 style={{margin: '0 0 8px 0', color: '#ffcc00'}}>{planet}</h2>
        <p style={{margin: '0 0 12px 0'}}>{info[planet]}</p>
        <button onClick={onClose} style={{
            background: '#ffcc00',
            border: 'none',
            color: '#000', 
            padding: '8px 12px',
            borderRadius: '5px',
            fontWeight: 'bold', 
            cursor: 'pointer'}}
        >
            Close
        </button>

    </div>
}
export default InfoPanel;