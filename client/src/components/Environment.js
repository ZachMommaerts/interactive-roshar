import { useState } from 'react';
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
    const [ chapter, setChapter ] = useState('Chapter One');
    const [ kaladinLocation, setKaladinLocation ] = useState('')
    return(
        <>
            <DropDown setChapter={setChapter} />
            <H2>{chapter}</H2>
            <Canvas camera={{position: [0,80,0]}}>
                <OrbitControls />
                <Lights />
                {/* Kaladin Marker */}
                <Marker 
                    xPosition={75}
                    yPosition={25}
                    zPosition={-5}
                    color={'hotpink'}
                />
                <Suspense fallback={null}>
                    <Complicated_roshar_with_buildings position={[0,0,0]} />
                </Suspense>
            </Canvas>
        </>
    )
}