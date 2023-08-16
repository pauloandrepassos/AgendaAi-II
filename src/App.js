import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apresentacao from './components/pages/Apresentacao';
import Container from './components/layaut/Container';
import Navbar from './components/layaut/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min_height">
        <Routes>
          <Route path='/' element={<Apresentacao/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
