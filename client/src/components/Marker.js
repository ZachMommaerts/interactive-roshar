import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Marker( { xPosition, yPosition, zPosition, color }) {
    const [hovered, setHovered ] = useState(false);
    const [ clicked, setClicked ] = useState(false)
    const markerRef = useRef();
    
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    useFrame(state => {
        markerRef.current.position.y = (yPosition + Math.sin(state.clock.getElapsedTime() * 2))

        if (clicked) {
            state.camera.position.x = xPosition;
            state.camera.position.y = yPosition + 50;
            state.camera.position.z = zPosition + 50;
            state.camera.lookAt(markerRef.current.position)
            // Figure out how to lerp the camera!
            state.camera.position.lerp
            state.camera.updateProjectionMatrix()
        }
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
                {/* <Html position={[0,-10,0]}>
                    <h1>Kaladin</h1>
                </Html> */}
        </mesh>
    )
}