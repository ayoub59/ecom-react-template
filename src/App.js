import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Container from './components/Container';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Add from './components/Add';
import styled from "styled-components"

function App() {
  return (
    <div className="App">

      <Router>
        <LinksContainer>
          <Link to="/">Home</Link>
          <Link to="add">add</Link>
        </LinksContainer>

        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
const LinksContainer = styled.div`
display: flex;
justify-content: space-around;
    height: 50px;
    align-items: center;
    margin-bottom: 20px;
`