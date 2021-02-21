import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import Characters from "./components/Characters/Characters";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";

function App() {
  return (
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/characters"/>}/>

          <Route exact path="/characters" render={() => <Characters/>}/>

          <Route exact path="/characters/:charterId" render={() => <CharacterDetail/>}/>

          <Route path="*" render={() => <div>404 page not found</div>}/>
        </Switch>

      </div>
  );
}

const MainApp = (props) => {
  return (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  )
};

export default MainApp;