import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Counter from "./components/Counter";
import About from "./components/About";
import Home from "./components/Home";
import { IncrementContext } from "./helpers/IncrementContext";

import { IncrementForm } from "./components/IncrementForm";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <IncrementForm />
        <IncrementContext.Provider value={1}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/counter" component={Counter} />
        </IncrementContext.Provider>
      </div>
    </Router>
  );
};

export default AppRouter;
