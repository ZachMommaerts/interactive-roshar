import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import cinzel from '../assets/Cinzel_Regular.json';

extend({ TextGeometry })

export default function Text() {
    const font = new FontLoader().parse(cinzel);
    
    return(
    <mesh position={[0,10,0]}>
        <textGeometry args={['Alethkar', {font, size:5, height: 1}]}/>
        <meshLambertMaterial attach='material' color={'gold'}/>
    </mesh>
    )
}