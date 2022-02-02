import './App.css';
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react";
import Scene from './Scene';

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
