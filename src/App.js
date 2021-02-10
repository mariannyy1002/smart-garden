import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navegacion from './Componentes/Compartido/Navegacion';
import Plantas from "./Componentes/Plantas";
import Jardines from './Componentes/Jardines';
import Dispositivos from './Componentes/Dispositivos';
import Jardin from './Componentes/Jardin';
import Area from './Componentes/Area';

function App() {
  return (
    <Router>
    <Navegacion/>
      <Switch>
        <>
          <Route path='/' exact children={<Jardines/>}/>
          <Route path='/Jardines' exact children={<Jardines/>}/>
          <Route path='/Plantas' exact children={<Plantas/>}/>
          <Route path='/Dispositivos' exact children={<Dispositivos/>}/>
          <Route path='/Jardin/:id' children={<Jardin/>}/>
          <Route path='/Area/:idJ/:idA' children={<Area/>}/>
        </>
      </Switch>
    </Router>
  );
}

export default App;
