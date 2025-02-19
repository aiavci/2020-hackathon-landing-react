import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import Chat from "./onepirate/Chat";
import Panel from "./onepirate/Panel";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>

        <Route path="/panel">
          <Panel />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
