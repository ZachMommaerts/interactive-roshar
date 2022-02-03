import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { OrbitControls} from '@react-three/drei';
import styled from 'styled-components';
import Scene from './Scene';
import { AmbientLight } from 'three';

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Div>
      <Canvas>
        <OrbitControls />
        <ambientLight  intensity={1}/>
        <directionalLight  intensity={0.8}/>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </Div>
  );
}

export default App;
