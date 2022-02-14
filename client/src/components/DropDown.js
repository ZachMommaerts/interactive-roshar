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
            <option value={0}>Prologue</option>
            <option value={1}>Chapter One</option>
            <option value={2}>Chapter Two</option>
            <option value={3}>Chapter Three</option>
            <option value={4}>Chapter Four</option>
        </Dropdown>
    )
};