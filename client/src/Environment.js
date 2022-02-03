import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { OrbitControls} from '@react-three/drei';
import styled from 'styled-components';
import Scene from './Scene';
import DropDown from './DropDown';

const H2 = styled.h2`
    position: absolute;
    display: block;
    z-index: 1;
    left: 50%;
    top: 5%;
`;

export default function Environment() {
    const [ chapter, setChapter ] = useState('')
    return(
        <>
            <DropDown setChapter={setChapter} />
            <H2>{chapter}</H2>
            <Canvas>
                <OrbitControls />
                <ambientLight  intensity={1}/>
                <directionalLight  intensity={1} position={[20, 2, 20]}/>
                <Suspense fallback={null}>
                    <Scene position={0,0,0}/>
                </Suspense>
            </Canvas>
        </>
    )
}