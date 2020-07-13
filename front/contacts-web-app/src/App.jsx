import React from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoreInfo from "./components/MoreInfo";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch> 
            <Route exact path="/" component={Home} />
            <Route path="/edit/:id" component={EditContact} />
            <Route path="/add" component={AddContact} />
            <Route path="/moreInfo/:id" component={MoreInfo} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
