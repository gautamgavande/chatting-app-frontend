// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Componentes/Login';
import Signup from './Componentes/Signup';
import Chatting from './Componentes/Chatting';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>  
            <Route path='/user' element={<Chatting />}></Route>  
        </Routes>
    </BrowserRouter>
  );
}

export default App;
