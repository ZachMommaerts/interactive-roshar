import styled from "styled-components"

const Div = styled.div`
    position: absolute;
    background-color: #212129;
    cursor: default;
    text-align: center;
    padding: 1em;
    color: white;
    z-index: 1;
    right: 25%;
    top: 40%;
    font-family: 'Cinzel', serif;
    border-radius: .5em;
    width: 20em;
    transition: opacity 2s;
    opacity: ${({ clicked }) => (clicked ? '1' : '0')};
    visibility: ${({ clicked }) => (clicked ? 'visible' : 'hidden')};
`;

const H2 = styled.h2`
    text-decoration: underline;
`;

const P = styled.p`

`;

export default function Summary({ bookInfo, chapter, clicked }) {
    if (bookInfo.chapters){
        return(
            <Div clicked={clicked}>
                <H2>{bookInfo.chapters[chapter].characters[0].name}</H2>
                <P>{bookInfo.chapters[chapter].chapter_location_characters[0].summary}</P>
            </Div>
        )
    } else {
        return(
            <></>
        )
    }
}