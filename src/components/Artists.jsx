import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Card,
  Button,
  Col,
  Divider,
  Row,
  Slider,
  Slide,
  Caption,
  Modal,
  Table,
  Carousel,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Artists = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  return (
    <Row>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Col m={10} push="m2">
        <Row>
          <div data-aos="fade-right" data-aos-duration="2000" className="">
            <Col s={12} m={4}>
              <img
                className="artist"
                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                width="70%"
              />
            </Col>
            <Col s={12} m={8} l={5} className="left-align ">
            <Row/><Row/><Row/><Row/>
              <h5>Jan Kowalski</h5>
              ur. 20XI1980
              <br />
              <br />
              <Divider />
              Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio Bio Bio Bio Bio Bio
              Bio Bio Bio Bio BioBio Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio
              Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio Bio Bio Bio Bio Bio Bio
              Bio Bio Bio BioBio Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio Bio
              Bio Bio Bio Bio Bio Bio Bio Bio Bio
              <br />
              <br />
              <Divider />
              <Link>wejdz na stronę artysty</Link>
            </Col>
          </div>
        </Row>
        <Row/><Row/><Row>
          <div data-aos="fade-right" data-aos-duration="2000" className="">
            <Col s={12} m={4}>
              <img
                className="artist"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                width="70%"
              />
            </Col>
            <Col s={12} m={8} l={5} className="left-align ">
            <Row/><Row/><Row/><Row/>
              <h5>Jan Kowalski</h5>
              ur. 20XI1980
              <br />
              <br />
              <Divider />
              Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio Bio Bio Bio Bio Bio
              Bio Bio Bio Bio BioBio Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio
              Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio Bio Bio Bio Bio Bio Bio
              Bio Bio Bio BioBio Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio Bio
              Bio Bio Bio Bio Bio Bio Bio Bio Bio
              <br />
              <br />
              <Divider />
              <Link>wejdz na stronę artysty</Link>
            </Col>
          </div>
        </Row>
        <Row/><Row/>
        <Row>
          <div data-aos="fade-right" data-aos-duration="2000" className="">
            <Col s={12} m={4}>
              <img
                className="artist"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                width="70%"
              />
            </Col>
            <Col s={12} m={8} l={5} className="left-align ">
            <Row/><Row/><Row/><Row/>
              <h5>Jan Kowalski</h5>
              ur. 20XI1980
              <br />
              <br />
              <Divider />
              Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio Bio Bio Bio Bio Bio
              Bio Bio Bio Bio BioBio Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio
              Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio Bio Bio Bio Bio Bio Bio
              Bio Bio Bio BioBio Bio Bio Bio Bio Bio Bio Bio Bio Bio BioBio Bio
              Bio Bio Bio Bio Bio Bio Bio Bio Bio
              <br />
              <br />
              <Divider />
              <Link>wejdz na stronę artysty</Link>
            </Col>
          </div>
        </Row>
     
      </Col>
    </Row>
  );
};

export default Artists;
