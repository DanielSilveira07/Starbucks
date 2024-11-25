import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './layout/Header/Header';
import { Home } from './pages/Home/Home';
import { Sobre } from './pages/Sobre/Sobre';
import { Novidades } from './pages/Novidades/Novidades';

function App() {
  return (
  <div id="App">
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/novidades" element={<Novidades />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;