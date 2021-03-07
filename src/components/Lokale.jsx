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

const Lokale = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  const items = Lista.map((Lista) => {
    return (
      <Table>
        <tr className="hoverable">
          <td>{Lista.Lokal}</td>
          <td>{Lista.Metraz}</td>
          <td>{Lista.Pietro}</td>
          <td>{Lista.Cena}</td>
          <td>{Lista.Status}</td>
          <td>{Lista.Rzut}</td>
          <td>{Lista.Informacje}</td>
        </tr>
      </Table>
    );
  });

  return (
    <div>
        <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="hoverable z-depth-2"
      >
      <Row>
      <Col s={12} m={8}>
            {" "}
            <img
              src="https://img.lovepik.com/original_origin_pic/18/05/20/adc00a4eae7b2857a3d6c766a9f5e5a1.png_wh860.png"
              width="100%"
            />
          </Col>
      <Col s={12} m={4}>
            <div className="left-align">
              <h3>
                Układ Lokali
                <Divider />
              </h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus
              <Row/>
            
            </div>
          </Col>
      </Row>
   </div>   <Table className="center">
        {/* <thead>
          <tr>
            <th data-field="id">Lokal</th>
            <th data-field="name">Metraż</th>
            <th data-field="price">Piętro</th>
            <th data-field="price">Cena</th>
            <th data-field="price">Status</th>
            <th data-field="price">Informacje</th>
          </tr>
        </thead> */}
      </Table>
      {items}
    </div>
  );
};

export default Lokale;
