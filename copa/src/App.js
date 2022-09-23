import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";

import Home from './pages/Home/Home.jsx';
import Login from "./pages/Login/Login.jsx";
import Dados from './pages/Dados/Dados.jsx';



function App() {
  return (
    <Router>
      <ul className="navBar">
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/login">Login</Link>
        </li>
        <li>
          <Link className="link" to="/dados">Dados</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dados" element={<Dados/>}/>
      </Routes>
    </Router>
  );
}

export default App;