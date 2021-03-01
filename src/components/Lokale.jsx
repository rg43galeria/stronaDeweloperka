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
      <Table className="center">
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
