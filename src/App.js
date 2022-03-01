import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from '../src/pages/register';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Register />} />
        </Routes>
      </Router>
  );
}

export default App;
