export default function Lights() {
    return(
        <>
            <ambientLight  intensity={1}/>
            <directionalLight  intensity={1} position={[20, 2, 20]}/>
        </>
    )
}