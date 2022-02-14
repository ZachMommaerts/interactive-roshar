import styled from "styled-components"

const Dropdown = styled.select`
    position: absolute;
    display: block;
    z-index: 1;
    left: 5%;
    top: 2%;
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