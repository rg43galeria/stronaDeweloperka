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
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Lista from "./Lista";
import Iframe from "react-iframe";
import ReactPlayer from "react-player";
import Lokale from "./Lokale";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  return (
    <Row className="white">
      <Row>
        <Col s={12}>
          <div className="video-wrapper">
            <ReactPlayer
              // className="react-player"
              url="https://www.youtube.com/embed/BFnwwnzsfP8"
              playing={true}
              muted={true}
              width="100%"
              height="600px"
            />
          </div>
          {/* <Iframe
          url="https://www.youtube.com/embed/BSF5yoD-vC4"
          width="100%"
          height="600px"
          id="myId"
          allow='autoplay; encrypted-media'
          className="myClassname"
          display="initial"
          position="relative"
        /> */}
        </Col>
      </Row>
      <Row />
      <Row />
      <Row />
      <Row>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="hoverable z-depth-2"
        >
          <Card>
            <h5>
              Domy Czarnochowice (nazwa) <Divider />
            </h5>
            <Row />
            <Row />
            <Row />
            <Row>
              <Col m={6} s={12}>
                <div className="left-align  ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus
                </div>
              </Col>
              <Col m={6} s={12}>
              <Iframe
                  url="https://sketchfab.com/models/a85b372a3f8d4a7985caea65ca94932b/embed"
                  width="100%"
                  height="600px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />{" "}
              </Col>
            </Row>
          </Card>
        </div>
      </Row>
      <Row>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="hoverable z-depth-2"
        >
          <Card>
            <h5>
              Lokalizacja <Divider />
            </h5>
            <Row />
            <Row />
            <Row />
            <Row>
              <Col m={6} s={12}>
                <div className="left-align  ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus
                  <br />
                  <br />
                  <br />
                  <br />
                  <li>Odleglosc do 1 miejsca</li>
                  <br />
                  <li>Odleglosc do 2 miejsca</li>
                  <br />
                  <li>Odleglosc do 1 miejsca</li>
                  <br />
                  <li>Odleglosc do 2 miejsca</li>
                  <br />
                  <li>Odleglosc do 1 miejsca</li>
                  <br />
                  <li>Odleglosc do 2 miejsca</li>
                </div>
              </Col>
              <Col m={6} s={12}>
                <Iframe
                  url="https://maps.google.com/maps?q=Czarnochowice%2072,%2032-020%20Czarnochowice&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="600px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />{" "}
              </Col>
            </Row>
          </Card>
        </div>
      </Row>
      <Row>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="hoverable z-depth-2"
        >
          <Card>
            <h5>
              Terminy <Divider />
            </h5>
            <Row />
            <Row />
            <Row />
            <Row>
              <Col m={6} s={12}>
                <div className="left-align  ">
              
                </div>
              </Col>
              <Col m={6} s={12}>
               
              </Col>
            </Row>
          </Card>
        </div>
      </Row>
    </Row>
  );
};

export default Home;
