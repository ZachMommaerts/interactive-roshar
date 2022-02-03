import styled from "styled-components"

const Dropdown = styled.select`
    position: absolute;
    display: block;
    z-index: 1;
    left: 5%;
    top: 5%;
`;

export default function DropDown({ setChapter }) {

    const handleChange = (e) => {
        setChapter(e.target.value)
    }

    return(
        <Dropdown onChange={handleChange}>
            <option value='Chapter One'>Chapter One</option>
            <option value='Chapter Two'>Chapter Two</option>
        </Dropdown>
    )
};