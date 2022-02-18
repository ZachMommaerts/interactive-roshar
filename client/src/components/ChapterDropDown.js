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
    left: 13%;
    top: 11%;
    padding-left: .5rem;
    padding-right: .5rem;
    
    &:hover{
        background-color: #3e3f4d;
    }
`;

const Option = styled.option`

`

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