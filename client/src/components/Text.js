import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import cinzel from '../assets/Cinzel_Regular.json';

extend({ TextGeometry })

export default function Text({ text, textPosition, textRotation, textSize}) {
    const font = new FontLoader().parse(cinzel);
    
    return( 
    <mesh position={textPosition} rotation={textRotation}>
        <textGeometry args={[text, {font, size: textSize, height: 1}]}/>
        <meshLambertMaterial attach='material' color={'white'}/>
    </mesh>
    )
}