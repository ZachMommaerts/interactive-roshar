import styled from "styled-components"

const Div = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 8em;
    position: absolute;
    border-radius: .25em;
    background-color: #171a1f;
    z-index: 1;
    padding: 1em;
    left: .25%;
    bottom: 25%;
`

const ColorBox = styled.div`
    margin-top: .2em;
    margin-right: 1em;
    border-radius: .25em;
    height: 1em;
    width: 1em;
`;

const InnerDiv = styled.div`
    display: flex;
    position: relative;
`

const Span = styled.span`
    color: white;
    font-family: 'Cinzel', serif;
`

const P = styled.p`
    color: white;
    font-family: 'Cinzel', serif;
    font-size: 1.35em;
    margin-top: 0rem;
`

export default function Key( {bookInfo, chapter} ) {

    if (bookInfo) {
        return(
            <Div>
                <P>Key</P>
                <InnerDiv>
                <ColorBox style={{backgroundColor: `${bookInfo.chapters[chapter].characters[0].color}`}} />
                <Span>{bookInfo.chapters[chapter].characters[0].name}</Span>
                </InnerDiv>
            </Div>
        )
        } else {
            return(
                <>
                </>
            )
    }
}