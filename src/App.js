import React, { Component } from "react";
import "./App.css";
import "materialize-css";
import { Button, Card, Row, Col } from "react-materialize";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Other from "./components/Other";
import Portfolio from "./components/Portfolio";
import Offer from "./components/Offer";
import Nav from "./components/Nav";
import TypA from "./components/TypA";
import TypB from "./components/TypB";
import TypC from "./components/TypC";
import TypD from "./components/TypD";
import SideNav from "./components/SideNav.jsx";
import Wystawy from "./components/Wystawy.jsx";
import Wystawa1 from "./components/Wystawa1.jsx";
import Artists from "./components/Artists";
function App() {
  return (
    <div className="App">
      <Row>
        <Col s={12} m={12} l={12} push="" className="">
          <BrowserRouter>
            <Nav />

            <SideNav />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/offer" component={Offer} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/wystawa1" component={Wystawa1} />
              <Route path="/typb" component={TypB} />
              <Route path="/typc" component={TypC} />
              <Route path="/typd" component={TypD} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/artysci" component={Artists} />
              <Route path="/wystawy" component={Wystawy}/>
              <Route path="/other" component={Other} />{" "}
              <Route path="/:any" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </Col>
      </Row>
    </div>
  );
}

export default App;
