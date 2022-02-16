import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function Marker( { xPosition, yPosition, zPosition, color }) {
    const [hovered, setHovered ] = useState(false)
    const markerRef = useRef();
    
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    useFrame(state => {
        markerRef.current.position.y = (yPosition + Math.sin(state.clock.getElapsedTime() * 2))
    })

    return(

        <mesh
            ref={markerRef} 
            rotation={[Math.PI / 1, 0, 0]}
            position={[xPosition, yPosition, zPosition]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            >
                <coneBufferGeometry attach='geometry' args={[1, 5, 20]} />
                <meshLambertMaterial attach='material' color={color} />
                {/* <Html position={[0,-10,0]}>
                    <h1>Kaladin</h1>
                </Html> */}
        </mesh>
    )
}