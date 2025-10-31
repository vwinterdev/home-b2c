import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Promotions from './pages/Promotions';
import NewArrivals from './pages/NewArrivals';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
