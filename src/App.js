import React from "react";
import { Home } from "./Component/Home";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { Menu } from "./Component/Menu";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    
      <div>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
  );
}

export default App;
