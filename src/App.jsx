import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Login from './pages/Login/Login.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Events from './pages/Events/Events.jsx';
import Team from './pages/Team/Team.jsx';
import Layout from './layout/Layout.jsx';

function App() {
  return (
    <div className='text-white bg-black'>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/events' element={<Events />} />
          {/* <Route path='/events/:id' element={} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;