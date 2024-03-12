import './App.css';
import NavBar from './components/NavBar/NavBar.jsx'
// import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <div className='text-white bg-black'>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;