import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/nav';
import { MainLanding } from './components/mainLanding';
import {ProductsPage} from './components/ProductsPage';
import {ServicesPage} from './components/ServicesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={<MainLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
