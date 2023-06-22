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

function App() {
  return (
    <div className="App">

      <Router>
        <Link to="/">Home</Link><br />
        <Link to="add">add</Link>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
