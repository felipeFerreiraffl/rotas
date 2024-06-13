import './App.css';

import { Link } from 'react-router-dom';

// Componentes
import Home from './components/home';
import Mapas from './components/mapas';
import Temperatura from './components/temperatura';

// Importações das rotas
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Rotas</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Mapas />} path='/mapas' />
          <Route element={<Temperatura />} path='/temperatura'/>
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <Mapas />
      <Temperatura /> */}
    </div>
  );
}

export default App;
