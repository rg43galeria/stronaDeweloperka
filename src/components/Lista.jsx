import React from "react";
import { Table, Button, Modal, Row,Col } from "react-materialize";
import Divider from "react-materialize/lib/Divider";
import planparter1 from './svg/planparter1.svg';
import planparter2 from './svg/planparter2.svg';
import planparter3 from './svg/planparter3.svg';
import planpietro1a from './svg/planpietro1a.svg';
import planpietro1b from './svg/planpietro1b.svg';
let baseURL =
  "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/";
const Lista = [
  {
    Lokal: <h5>Lokal</h5>,
    Metraz: <h5>Metraz</h5>,
    Pietro: <h5>Piętro</h5>,
    Cena: <h5>Cena</h5>,
    Status: <h5>Status</h5>,
    Status: <h5>Rzut</h5>,
    Informacje: <h5>Informacjie</h5>,
  },
  {
    Lokal: "M 1",
    Metraz: "20m2",
    Pietro: "parter",
    Cena: "2pln",
    Status: "Wolny",
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 1"}
        id="M1"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button node="button" small>
            Rzut
          </Button>
        }
      >
        <Row>
        <Divider/>
          <Row/><Row/>
        <Col s={12} m={8} push="m" l={4}>
        <img className="center" src={planparter1} alt="" width="100%" /> 
        </Col>
        <Col s={12} m={4} push="m" >
       Kuchnia
       Łazienka itp
        </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2  " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 2",
    Metraz: "20m2",
    Pietro: "pierwsze",
    Cena: "2pln",
    Status: "Wolny",
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 2"}
        id="M2"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button node="button" small>
            Rzut
          </Button>
        }
      >
        <Row>
        <Divider/>
          <Row/><Row/>
        <Col s={12} m={8} push="m" l={4}>
        <img className="center" src={planpietro1a} alt="" width="100%" /> 
        </Col>
        <Col s={12} m={4} push="m" >
       Kuchnia
       Łazienka itp
        </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 3",
    Metraz: "20m2",
    Pietro: "parter",
    Cena: "2pln",
    Status: "Wolny",
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 3"}
        id="M3"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button node="button" small>
            Rzut
          </Button>
        }
      >
        <img src="" alt="" width="100%" />
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2  " small node="a" href="typc">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 4",
    Metraz: "20m2",
    Pietro: "pierwsze",
    Cena: "2pln",
    Status: "Wolny",
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 4"}
        id="M4"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button node="button" small>
            Rzut
          </Button>
        }
      >
        <img src="" alt="" width="100%" />
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2  " small node="a" href="typd">
        informacje
      </Button>
    ),
  },



  
];
export default Lista;
