import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import Marker from './Marker';
import DropDown from './DropDown';
import Lights from './Lights';
import Complicated_roshar_with_buildings from './Map'

const H2 = styled.h2`
    position: absolute;
    display: block;
    z-index: 1;
    left: 50%;
    top: 5%;
`;

export default function Environment() {
    const [ book, setBook ] = useState(1)
    const [ chapter, setChapter ] = useState('Chapter One');

    useEffect(() => {
        fetch(`/books`)
    }, [])

    return(
        <>
            <DropDown setChapter={setChapter} />
            <H2>{chapter}</H2>
            <Canvas camera={{position: [0,80,0]}}>
                <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} minDistance={50} maxDistance={150}/>
                <Lights />
                {/* Kaladin Marker */}
                <Marker 
                    xPosition={93}
                    yPosition={1}
                    zPosition={-5}
                    color={'hotpink'}
                />
                <Suspense fallback={null}>
                    <Complicated_roshar_with_buildings position={[0,-20,0]} />
                </Suspense>
            </Canvas>
        </>
    )
}