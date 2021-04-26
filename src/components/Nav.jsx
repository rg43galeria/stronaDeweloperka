import "materialize-css";
import React, { Component, useEffect } from "react";
import { Button, Col, Divider, Row } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import logo from "./svg/logo.svg"

const Nav = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row></Row>;
  else
    return (
      <div className="navbar right-align">
        <Col m={10} push="m2">
        <Link to="home" className="navbaritem">
            Home
          </Link>
          <Link to="artysci" className="navbaritem">
            Artyści
          </Link>

          <Link to="wystawy" className="navbaritem">
            Wystawy
          </Link>
          <Link to="portfolio" className="navbaritem">
            Archiwum
          </Link>
          <Link to="offer" className="navbaritem">
            Sklep
          </Link>
          <Link to="gallery" className="navbaritem">
            Nowe eksponaty
          </Link>
          <Link to="contact" className="navbaritem">
            O nas
          </Link>
          <Link to="contact" className="navbaritem">
            Partnerzy
          </Link>
          <Link to="contact" className="navbaritem">
            Kontakt
          </Link>
     
        </Col>
      </div>
    );
};

export default Nav;
