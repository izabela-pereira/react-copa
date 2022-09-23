import './App.css';
import {Routes, Route} from "react-router-dom";

import Login from './pages/Login';

function App() {
  return (
    <div>
      <LoginPage />
        {/* <MenuPageTemplate>
           <Routes>
             <Route path ="/" exact = {true} element = {<HomePage/>}/>
             <Route path ="/login" exact = {true} element = {<LoginPage/>}/>
             <Route path ="/dados" exact = {true} element = {<DadosPage/>}/>
           </Routes>
        </MenuPageTemplate> */}
    </div>
  );
}

export default App;