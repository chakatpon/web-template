import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";

function App() {
  useEffect(() => {
    console.log("effect was call");
    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
