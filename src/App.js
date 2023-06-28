
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
