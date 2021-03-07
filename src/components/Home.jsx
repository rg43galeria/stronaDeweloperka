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
import ogrod from "./svg/ogrod.svg"
import autostrada from "./svg/autostrada.svg"
import karkowwieliczka from "./svg/krakowwieliczka.svg"
import silence from "./svg/silence.svg"
import windows from "./svg/windows.svg"
import layout from "./svg/layout.svg"


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
                  Nasze domy szeregowe wyróżniają się nowoczesną architekturą oraz wysokim standardem. W realizacjach Real Invest szczególną uwagę przywiązujemy do przeszkleń, dzięki czemu oferowane przez nas wnętrza są słoneczne, a sama bryła budynku sprawia wrażenie lżejszej. Damy również o estetykę i funkcjonalność zagospodarowania części wspólnych naszych osiedli, dzięki czemu są przestrzeniami przyjaznymi dla mieszkańców niezależnie od wieku.
                </div>
                <Row />
                <Row>
                  <Col s={4}>
                    <img src={autostrada} width="60%" /><br />
                    5 minut od autostrady
                  </Col>
                  <Col s={4}>
                    <img src={karkowwieliczka} width="60%" /><br />
                    Na granicy Krakowa i Wieliczki
                  </Col>
                  <Col s={4}>
                    <img src={layout} width="60%" /><br />
                    Praktyczny i adaptowalny uklad przestrzenny
                  </Col>
                  <Col s={4}>
                    <img src={silence} width="60%" /><br />
                    Cicha i spokojna okolica
                  </Col>
                  <Col s={4}>
                    <img src={ogrod} width="60%" /><br />
                    Kazdy lokal z przydzielonym, ogrodzonym ogrodkiem
                  </Col>
                  <Col s={4}>
                    <img src={windows} width="60%" /><br />
                    Duze przeszklenia
                  </Col>

                </Row>
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
                  Oferowane przez Real Invest nowe segmenty usytuowane są w spokojnej, cichej okolicy. Znajdują się one z dala od centrum miasta, do którego mieszkańcy mają jednak ułatwiony dostęp dzięki kursującym tutaj miejskim autobusom i tramwajom. Systematycznie wzbogacamy rynek pierwotny o kolejne domy  zaprojektowane według najnowocześniejszych technologii. W wielu z nich zamontowano nowoczesne systemy bezpieczeństwa. Dzięki łączności Wi-Fi można sterować z dowolnego miejsca m. in. ogrzewaniem, oświetleniem czy działaniem systemu alarmowego.
                  <br />
                  <br />
                  <br />
                  <Row>
                    <Col m={2}></Col>
                    <Col m={8}>
                  <div>
                     <h5>
                    <li>Centrum Wieliczki - 3,5km</li>
                    <br />
                    <li>Stacja Kolejowa Kokotow - 1km</li>
                    <br />
                    <li>Rynek Glowny - 13,7km</li>
                    <br />
                    <li>Autostrada - 1km</li>
                    <br />
                    <li>Paczkomat Inpost - 500m</li>
                    <br /></h5></div></Col></Row>
                </div>
                <div className="left-align">
                  Dziekilokalizacji obiektow przysli wlasciciele nieruchomosci moga liczyc na:
                <br />
                Obnizone koszta zycia w stosunku do Krakowa
                <br />
                Swietny dostep do aotostrady i stacji kolejowej
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
