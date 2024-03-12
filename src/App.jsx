import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Layout from './layout/Layout.jsx';

function App() {
  return (
    <div className='text-white bg-black'>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;