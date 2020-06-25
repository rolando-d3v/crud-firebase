import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Navigation from './components/Navigation';
import CrudSpell from './pages/CrudSpell';
import Home from './pages/Home';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Switch>
        <Route exact={true} path="/" component={Home}  />
        <Route exact={true} path="/crudfirebase" component={CrudSpell}  />
        <Route exact={true} path="*" component={Error404}  />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
