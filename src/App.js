import './App.css';
import Navegacion from './Componentes/Compartido/Navegacion';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Plantas from "./Componentes/Plantas";
function App() {
  return (
    <Router>
      <Switch>
        <>
        <Route path='/Plantas' exact children={<Plantas/>}/>
        </>
      </Switch>
    </Router>
  );
}

export default App;
