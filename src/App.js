// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sejarah from './pages/Sejarah';
import Testimoni from './pages/Testimoni';
import HubungiKami from './pages/HubungiKami';
import Gallery from './pages/Gallery';
import DataSiswa from './pages/DataSiswa';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/testimoni" element={<Testimoni />} />
          <Route path="/hubungi" element={<HubungiKami />} />
          <Route path="/data-siswa" element={<DataSiswa />} />
          <Route path="/hubungi" element={<HubungiKami />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sejarah" element={<Sejarah />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
