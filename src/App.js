import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './pages/notfound/NotFound';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
