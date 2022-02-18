import styled from "styled-components";
import { Link } from 'react-router-dom';

const Div = styled.div`
    cursor: default;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const H1 = styled.h1`
    font-family: 'Cinzel Decorative', cursive;
    font-size: 6rem;
    `;

const H2 = styled.h2`
    margin-top: -2rem;
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    `;

const Button =styled.button`
    margin-top: 2rem;
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    background-color: transparent;
    cursor: pointer;
    border: .1rem solid;
    border-radius: .25rem;
    text-decoration: none;
    -webkit-transition: color 0.2s ease-out;
    -moz-transition: color 0.2s ease-out;
    -o-transition: color 0.2s ease-out;
    -ms-transition: color 0.2s ease-out;
    transition: color 0.2s ease-out;

    &:hover {
        color: white;
    }
`;

export default function StartMenu() {
    return(
        <Div>
            <H1>The World of Roshar</H1>
            <H2>Based off the works of Brandon Sanderson's Stormlight Archive</H2>
            <Link to='/map'>
                <Button>Enter</Button>
            </Link>
        </Div>
    )
}