import './App.css';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
      <MenuPageTemplate>
        <Routes>
          <Route path ="/" exact = {true} element = {<HomePage/>}/>
          <Route path ="/login" exact = {true} element = {<LoginPage/>}/>
          <Route path ="/dados" exact = {true} element = {<DadosPage/>}/>
        </Routes>
    </MenuPageTemplate>
  );
}

export default App;