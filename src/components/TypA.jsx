import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Slider,
  Slide,
  Caption,
  Modal,
  Table,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Lista from "./Lista";
import Iframe from "react-iframe";


const TypA = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  let lang = localStorage.getItem("lang");

  return (
    <Row>
      
    </Row>
      );
};

export default TypA;
