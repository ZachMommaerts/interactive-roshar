import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'

export default function Marker( { xPosition, yPosition, zPosition, color }) {
    const [hovered, setHovered ] = useState(false);
    const [ clicked, setClicked ] = useState(false);
    const markerRef = useRef();
    const vec = new THREE.Vector3()
    
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    useFrame(state => {
        markerRef.current.position.y = (yPosition + Math.sin(state.clock.getElapsedTime() * 2))

        if (clicked) {
            state.camera.lookAt(markerRef.current.position)
            state.camera.position.lerp(vec.set(xPosition, yPosition + 15, zPosition +15), .01)
            state.camera.updateProjectionMatrix()
        }
        return null;
    })

    return(
        <mesh
            ref={markerRef} 
            rotation={[Math.PI / 1, 0, 0]}
            position={[xPosition, yPosition, zPosition]}
            onClick={() => setClicked(!clicked)}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            >
                <coneBufferGeometry attach='geometry' args={[1, 5, 20]} />
                <meshLambertMaterial attach='material' color={color} />

        </mesh>
    )
}