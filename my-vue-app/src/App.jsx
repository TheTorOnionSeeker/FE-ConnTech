import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/Login";
//import "./App.css";
import { Landing } from "./Views/Landing";
import About from "./Views/About";
import Preguntas from "./Components/Preguntas";
import Profile from "./Components/ProfileUser/ProfileUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/info" component={Preguntas} />
        <Route path="/perfil" component={Profile} />
      </BrowserRouter>
    </div>
  );
}

export default App;