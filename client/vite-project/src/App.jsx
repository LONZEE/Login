import './App.css'
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import axios  from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
