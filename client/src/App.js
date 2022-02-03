import './App.css';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import StartMenu from './components/StartMenu';
import Environment from './components/Environment';

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Div>
      <Routes>
        <Route path='/' element={<StartMenu />} />
        <Route path='/map' element={<Environment />} />
      </Routes>
    </Div>
  );
}

export default App;
