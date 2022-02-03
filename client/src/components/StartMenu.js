import styled from "styled-components";
import { Link } from 'react-router-dom';

const Div = styled.div`

`;

const Button =styled.button`

`;

export default function StartMenu() {
    return(
        <Div>
            <h1>The World of Roshar</h1>
            <h3>from the works of Brandon Sanderson's Stormlight Archive</h3>
            <Link to='/map'>
                <Button>Enter</Button>
            </Link>
        </Div>
    )
}