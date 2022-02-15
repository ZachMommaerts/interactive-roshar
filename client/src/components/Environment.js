import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import styled from 'styled-components';
import Marker from './Marker';
import ChapterDropDown from './ChapterDropDown';
import BookDropDown from './BookDropDown';
import Lights from './Lights';
import Text from './Text';
import Complicated_roshar_with_buildings from './Map'

const H2 = styled.h2`
    position: absolute;
    display: block;
    z-index: 1;
    left: 50%;
    top: 5%;
`;

export default function Environment() {
    const [ book, setBook ] = useState(1);
    const [ bookInfo, setBookInfo ] = useState({})
    const [ chapter, setChapter ] = useState(0);
    const [ chapterSection, setChapterSection ] = useState('Prologue')
    const [ chapterTitle, setChapterTitle ] = useState('To Kill')

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
            <Marker
                xPosition={chapterSelect.locations[0].x_coordinates}
                yPosition={chapterSelect.locations[0].y_coordinates}
                zPosition={chapterSelect.locations[0].z_coordinates}
                color={chapterSelect.characters[0].color}
            />
        )
        }
    }

    return(
        <>
            <BookDropDown setBook={setBook} />
            <ChapterDropDown setChapter={setChapter} />
            <H2>{chapter}</H2>
            <Canvas camera={{position: [0,100,150]}}>
                <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} minDistance={50} maxDistance={150}/>
                <Lights />
                {/* Kaladin Marker */}
                {renderChapter()}
                <Suspense fallback={null}>
                    <Text 
                        text={chapterSection}
                        textPosition={[0,60,-50]}
                        textRotation={[0,0,0]}
                        textSize={5}
                    />
                    <Text 
                        text={chapterTitle}
                        textPosition={[0,50,-50]}
                        textRotation={[0,0,0]}
                        textSize={8}
                    />
                    <Text 
                        text={'Alethkar'}
                        textPosition={[70,15,10]}
                        textRotation={[0,Math.PI / 3,0]}
                        textSize={6}
                    />
                    <Complicated_roshar_with_buildings position={[0,-20,0]} />
                </Suspense>
            </Canvas>
        </>
    )
}