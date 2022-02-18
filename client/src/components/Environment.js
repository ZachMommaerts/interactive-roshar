import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';
import Marker from './Marker';
import ChapterDropDown from './ChapterDropDown';
import BookDropDown from './BookDropDown';
import Lights from './Lights';
import Text from './Text';
import Key from './Key';
import Summary from './Summary';
import Title from './Title';
import Complicated_roshar_with_buildings from './Map'

export default function Environment() {
    const [ book, setBook ] = useState(1);
    const [ bookInfo, setBookInfo ] = useState({})
    const [ chapter, setChapter ] = useState(0);
    const [ clicked, setClicked ] = useState(false);

    useEffect(() => {
        fetch(`/books/${book}`)
        .then(r => r.json())
        .then(data => setBookInfo(data))
        .catch(error => alert(error))
    }, [book])

    const renderChapter = () => {
        if (bookInfo.chapters) {
        const chapterSelect = bookInfo.chapters[chapter];
        const locationName = chapterSelect.locations[0].name
        return(
            <>
                <Marker
                    clicked={clicked}
                    setClicked={setClicked}
                    xPosition={chapterSelect.locations[0].x_coordinates}
                    yPosition={chapterSelect.locations[0].y_coordinates}
                    zPosition={chapterSelect.locations[0].z_coordinates}
                    color={chapterSelect.characters[0].color}
                />
            </>
        )
        }
    }

    return(
        <>
            <ChapterDropDown setChapter={setChapter} />
            {/* <Key bookInfo={bookInfo} chapter={chapter} /> */}
            <Summary bookInfo={bookInfo} chapter={chapter} clicked={clicked}/>
            <BookDropDown setBook={setBook} />
            <Title bookInfo={bookInfo} chapter={chapter}/>
            <Canvas camera={{position: [0,100,150]}}>
                <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} minDistance={50} maxDistance={150}/>
                <Lights />
                {/* Kaladin Marker */}
                <Suspense fallback={null}>
                    {/* Chapter and Prologue information */}
                    {renderChapter()}
                    {/* Countries start here */}
                    <Text 
                        text={'Unclaimed'}
                        textPosition={[105,12,17]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={2}
                        textWidth={1}
                    />
                    <Text 
                        text={'Hills'}
                        textPosition={[109,10,20]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={2}
                        textWidth={1}
                    />
                    <Text 
                        text={'Alethkar'}
                        textPosition={[65,0,10]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Herdaz'}
                        textPosition={[70,1,-40]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Jah Keved'}
                        textPosition={[25,5,-18]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Tu Baylah'}
                        textPosition={[0,0,-10]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={3.5}
                        textWidth={1}
                    />
                    <Text 
                        text={'Reshi Isles'}
                        textPosition={[-20,-3,-70]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Shinovar'}
                        textPosition={[-100,5,0]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Frostlands'}
                        textPosition={[50,0,55]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Thaylenah'}
                        textPosition={[30,2,78]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={3}
                        textWidth={1}
                    />
                    <Text 
                        text={'Azir'}
                        textPosition={[-40,3,20]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Tukar'}
                        textPosition={[-55,-2,58]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Tashikk'}
                        textPosition={[-67,-2,40]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Yezier'}
                        textPosition={[-70,2,20]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Marat'}
                        textPosition={[-20,0,55]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Triax'}
                        textPosition={[15,2,25]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Rira'}
                        textPosition={[-53,-1,-39]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Iri'}
                        textPosition={[-78,0,-45]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Aimia'}
                        textPosition={[-135,-2,30]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    {/* Start of cities */}
                    <Text
                        text={'Kharbranth'}
                        textPosition={[19,-2,55]}
                        textRotation={[Math.PI/-4,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'Shattered'}
                        textPosition={[99,12.5,44]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'Plains'}
                        textPosition={[101,11,45]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'Hearthstone'}
                        textPosition={[84,0,-25]}
                        textRotation={[Math.PI/-3,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'Kholinar'}
                        textPosition={[89,0,0]}
                        textRotation={[Math.PI/-3,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'Urithiru'}
                        textPosition={[-10,10,25]}
                        textRotation={[Math.PI/-4,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'The Purelake'}
                        textPosition={[-28,-3,-6]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'Azimir'}
                        textPosition={[-45,0,30]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Complicated_roshar_with_buildings position={[0,-20,0]} />
                </Suspense>
            </Canvas>
        </>
    )
}