import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { OrbitControls, Bounds, useBounds } from '@react-three/drei';
import styled from 'styled-components';
import Marker from './Marker';
import ChapterDropDown from './ChapterDropDown';
import BookDropDown from './BookDropDown';
import Lights from './Lights';
import Text from './Text';
import Key from './Key';
import Summary from './Summary';
import Complicated_roshar_with_buildings from './Map'

export default function Environment() {
    const [ book, setBook ] = useState(1);
    const [ bookInfo, setBookInfo ] = useState({})
    const [ chapter, setChapter ] = useState(0);

    useEffect(() => {
        fetch(`/books/${book}`)
        .then(r => r.json())
        .then(data => setBookInfo(data))
        .catch(error => alert(error))
    }, [book])

    const renderChapter = () => {
        if (bookInfo.chapters) {
        const chapterSelect = bookInfo.chapters[chapter];
        const summary = chapterSelect.chapter_location_characters[0].summary
        const character = chapterSelect.characters[0].name
        const color = chapterSelect.characters[0].color
        const locationName = chapterSelect.locations[0].name
        return(
            <>
                <Marker
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
            <Key bookInfo={bookInfo} chapter={chapter} />
            <Summary bookInfo={bookInfo} chapter={chapter} />
            <BookDropDown setBook={setBook} />
            <Canvas camera={{position: [0,100,150]}}>
                <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} minDistance={50} maxDistance={150}/>
                <Lights />
                {/* Kaladin Marker */}
                <Suspense fallback={null}>
                    {/* Chapter and Prologue information */}
                    {renderChapter()}
                    {/* Countries start here */}
                    <Text 
                        text={'Unclaimed Hills'}
                        textPosition={[100,10,20]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={2}
                        textWidth={1}
                    />
                    <Text 
                        text={'Alethkar'}
                        textPosition={[65,10,10]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Herdaz'}
                        textPosition={[70,10,-38]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Jah Keved'}
                        textPosition={[25,10,-18]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Reshi Isles'}
                        textPosition={[-20,5,-70]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Jah Keved'}
                        textPosition={[25,10,-18]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Shinovar'}
                        textPosition={[-100,10,0]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Frostlands'}
                        textPosition={[60,5,60]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Thaylenah'}
                        textPosition={[28,5,80]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={3}
                        textWidth={1}
                    />
                    <Text 
                        text={'Azir'}
                        textPosition={[-40,6,20]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Tukar'}
                        textPosition={[-55,0,55]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    <Text 
                        text={'Aimia'}
                        textPosition={[-135,0,30]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={4}
                        textWidth={1}
                    />
                    {/* Start of cities */}
                    <Text
                        text={'Kharbranth'}
                        textPosition={[19,5,50]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'The Shattered Plains'}
                        textPosition={[92,12,45]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'Hearthstone'}
                        textPosition={[85,5,-30]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'Kholinar'}
                        textPosition={[88,5,-5]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'Urithiru'}
                        textPosition={[-9,13,22]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'The Purelake'}
                        textPosition={[-30,-3,-7]}
                        textRotation={[Math.PI/-5,0,0]}
                        textSize={1.5}
                        textWidth={.5}
                    />
                    <Text
                        text={'Azimir'}
                        textPosition={[-45,2,30]}
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