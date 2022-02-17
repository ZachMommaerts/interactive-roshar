import styled from "styled-components"

const Dropdown = styled.select`
    appearance: none;
    text-align: center;
    position: absolute;
    background-color: black;
    color: white;
    font-family: 'Cinzel', serif;
    font-size: 1em;
    border-radius: .25em;
    z-index: 1;
    left: 49%;
    top: 1%;
    padding-left: .5rem;
    padding-right: .5rem;
    
    &:hover{
        background-color: #59513b;
    }
`;

export default function ChapterDropDown({ setChapter }) {

    const handleChange = (e) => {
        setChapter(e.target.value)
    }

    return(
        <Dropdown onChange={handleChange}>
            <option value={0}>Prologue</option>
            <option value={1}>Chapter One</option>
            <option value={2}>Chapter Two</option>
            <option value={3}>Chapter Three</option>
            <option value={4}>Chapter Four</option>
        </Dropdown>
    )
};