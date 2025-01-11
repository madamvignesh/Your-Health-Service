import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
