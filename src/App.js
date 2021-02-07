import './App.css';
import Navegacion from './Componentes/Compartido/Navegacion';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Plantas from "./Componentes/Plantas";
import Jardines from './Componentes/Jardines';
function App() {
  return (
    <>
    <Router>
    <Navegacion/>
      <Switch>
        <>
          <Route path='/Jardines' exact children={<Jardines/>}/>
          <Route path='/Plantas' exact children={<Plantas/>}/>
        </>
      </Switch>
    </Router>
    </>
  );
}

export default App;
