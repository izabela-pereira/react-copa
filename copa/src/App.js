import './App.css';
import {BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx'
import Dados from './pages/Dados/Dados.jsx'

function App() {
  return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink >
            </li>
            <li>
              <NavLink to="/login">
                Login
              </NavLink >
            </li>
            <li>
              <NavLink to="/dados">
                  Dados
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="/login" element = {<Login/>}/>
          <Route path ="/dados" element = {<Dados/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;