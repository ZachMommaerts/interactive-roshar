import styled from "styled-components"

const Dropdown = styled.select`
    appearance: none;
    text-align: center;
    position: absolute;
    background-color: #212129;
    color: white;
    font-family: 'Cinzel', serif;
    font-size: 1.2em;
    border-radius: .25em;
    z-index: 1;
    left: 1%;
    top: 11%;
    padding-left: .5rem;
    padding-right: .5rem;
    &:hover{
        background-color: #3e3f4d;
    }
`;

export default function BookDropDown({ setBook }){
    const handleChange = (e) => {
        setBook(e.target.value)
    }

    return(
        <Dropdown onChange={handleChange}>
            <option value={1}>The Way of Kings</option>
            <option value={2}>Words of Radiance</option>
            <option value={3}>Oathbringer</option>
            <option value={4}>Rhythm of War</option>
        </Dropdown>
    )
}