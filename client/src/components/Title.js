import styled from "styled-components"

const Div = styled.div`
    position: absolute;
    bottom: 2%;
    left: 40%;
    background-color: #171a1f;
    color: white;
    text-align: center;
    width: 25rem;
    border-radius: .5em;
    z-index: 1;
`;

const H1 = styled.h1`
    margin-top: -.5rem;
    margin-bottom: -.5rem;
    font-family: 'Cinzel', serif;
    font-size: 1rem;
`

const H2 = styled.h2`
    font-family: 'Cinzel', serif;
    font-size: .85rem;
`

export default function Title({ bookInfo, chapter }) {

    if (bookInfo.chapters){
        return(
            <Div>
                <H2>{bookInfo.chapters[chapter].section}</H2>
                <H1>{bookInfo.chapters[chapter].title}</H1>
                <H2> Year: {bookInfo.chapters[chapter].year}</H2>
            </Div>
        )
    } else {
        return(
            <></>
        )
    }
}