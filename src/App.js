import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apresentacao from './components/pages/Apresentacao';
import Container from './components/layaut/Container';
import Navbar from './components/layaut/Navbar';
import FormCadastroCantina from './components/pages/FormCadastroCantina';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min_height">
        <Routes>
          <Route path='/' element={<Apresentacao/>}/>
          <Route path='/FormCadastroCantina' element={<FormCadastroCantina/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
