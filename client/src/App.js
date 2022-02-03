import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { OrbitControls} from '@react-three/drei';
import styled from 'styled-components';
import Scene from './Scene';
import DropDown from './DropDown';

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Div>
      <DropDown />
      <Canvas>
        <OrbitControls />
        <ambientLight  intensity={1}/>
        <directionalLight  intensity={1} position={[20, 2, 20]}/>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </Div>
  );
}

export default App;
