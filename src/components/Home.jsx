import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Modal,
  Slide,
  Caption,
  Table,
  Card,
  Slider,
} from "react-materialize";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import Lista from "./Lista";
import Iframe from "react-iframe";
import ReactPlayer from "react-player";
import Lokale from "./Lokale";
import ogrod from "./svg/ogrod.svg";
import autostrada from "./svg/autostrada.svg";
import karkowwieliczka from "./svg/krakowwieliczka.svg";
import silence from "./svg/silence.svg";
import windows from "./svg/windows.svg";
import layout from "./svg/layout.svg";
import arrow from "./svg/arrow.svg";
import oddanie from "./svg/oddanie.svg";
import budowa from "./svg/budowa.svg";
import sprzedaz from "./svg/sprzedaz.svg";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  return (
    <Row>
      <Slider
        fullscreen={true}
        options={{
          duration: 500,
          height: 400,
          indicators: true,
          interval: 6000,
        }}
      >
        <Slide
          image={
            <img
              alt=""
              src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFpcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          }
        >
          <Caption placement="right" className="homeCaption">
            <h3>
              Wystawa 1 - bajki w bakjach
              <Divider />
            </h3>
            <h5 className=" ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </h5>
            <Link to="wystawa1" className="btn-large black z-depth-3">
              Więcej informacji
            </Link>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              src="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFpcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          }
        >
          <Caption placement="left" className="homeCaption">
            <h3>
              Wystawa 2 - drzewa w bakjach
              <Divider />
            </h3>
            <h5 className=" ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </h5>
            <Link to="wystawa2" className="btn-large black z-depth-3">
              Więcej informacji
            </Link>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              src="https://images.unsplash.com/photo-1499343162160-cd1441923dd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFpcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          }
        >
          <Caption placement="right" className="homeCaption">
            <h3>
              Wystawa 3 - krzaki w bakjach
              <Divider />
            </h3>
            <h5 className=" ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </h5>
            <Link to="wystawa3" className="btn-large black z-depth-3">
              Więcej informacji
            </Link>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              src="https://images.unsplash.com/photo-1526025202335-cf944dc3f799?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhaXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          }
        >
          <Caption placement="center" className="homeCaption">
            <h3>
              Wystawa 4 - samoloty w bakjach
              <Divider />
            </h3>
            <h5 className=" ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </h5>
            <Link to="wystawa4" className="btn-large black z-depth-3">
              Więcej informacji
            </Link>
          </Caption>
        </Slide>
      </Slider>
    </Row>
  );
};

export default Home;
