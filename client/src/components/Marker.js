import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Marker( {xPosition, yPosition, zPosition}) {
    const [hovered, setHovered ] = useState(false)
    const markerRef = useRef();
    
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    useFrame(state => {
        markerRef.current.position.y = (12 + Math.sin(state.clock.getElapsedTime())) / 50
    })

    return(

        <mesh
            ref={markerRef} 
            rotation={[Math.PI / 1, 0, 0]}
            position={[xPosition, yPosition, zPosition]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            >
                <coneBufferGeometry attach='geometry' args={[.01, .05, 20]} />
                <meshLambertMaterial attach='material' color='green' />
        </mesh>
    )
}