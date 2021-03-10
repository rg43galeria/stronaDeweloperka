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
  Carousel,
  Card,
} from "react-materialize";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/blob/main/src/components/img/1.webp",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export default class Gallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
