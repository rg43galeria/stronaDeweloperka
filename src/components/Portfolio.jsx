import "materialize-css";
import React, { Component, useEffect } from "react";
import { Button, Col, Divider, Row, Card, CardTitle } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import commercial from "../components/svg/commercial.svg";
import noncommercial from "../components/svg/noncommercial.svg";
import other from "../components/svg/other.svg";
import arch from "../components/svg/arch.svg";
import obsluga from "../components/svg/obsluga.svg";
import other2 from "../components/svg/other2.svg";
import marketing from "../components/svg/marketing.svg";
import interrior from "../components/svg/interrior.svg";
import bim from "../components/svg/bim.svg";
import { Link} from "react-router-dom";
import Standart from './Standart'
const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en")
    return (
      <Row>
       
      </Row>
    );
  else return   (
    <Row className="">
       
    <div
   data-aos="fade-left"
   data-aos-duration="2000"
   className="hoverable z-depth-2"
 >
     <Col m={10} s={12} push="m1">
       <Card
         actions={[
           <a className="black-text" key="1" href="contact">
             Wyślij zapytanie ofertowe
           </a>,
         ]}
         header={
           <CardTitle image={arch} />
         }
         horizontal
       >
         <h5>
           Nowoczesne budownictwo <Divider />
         </h5>
         <div className="left-align">
         Dostępne w ofercie Real Invest segmenty to domy, których użytkowanie jest znacznie tańsze niż w przypadku starszych obiektów budowlanych. Jeśli zdecydujesz się na zamontowanie na dachu kolektorów słonecznych, będziesz mógł obniżyć rachunki za gaz i prąd nawet o kilkadziesiąt procent. Szczelne okna zapobiegają utracie ciepła. Ściany budynków pokryte są estetycznie wyglądającą, odporną na zabrudzenia elewacją.

         </div>{" "}
       </Card>
     </Col>
   </div>
   
   <Row/>
   <div
   data-aos="fade-right"
   data-aos-duration="2000"
   className="hoverable z-depth-2"
 >
     <Col m={10} s={12} push="m1">
       <Card
         actions={[
           <a className="black-text" key="1" href="contact">
             Wyślij zapytanie ofertowe
           </a>,
         ]}
         header={
           <CardTitle image={marketing} />
         }
         horizontal
       >
        <Standart/>

       </Card>
     </Col>
     </div>
     <Row/>
     <div
   data-aos="fade-right"
   data-aos-duration="2000"
   className="hoverable z-depth-2"
 >
     <Col m={10} s={12} push="m1">
       <Card
         actions={[
           <a className="black-text" key="1" href="contact">
             Wyślij zapytanie ofertowe
           </a>,
         ]}
         header={
           <CardTitle image={other2} />
         }
         horizontal
       >
         <h5>
         Ogrodek do kazdego lokalu <Divider />
         </h5>
         <div className="left-align">
         Do kazdego lokalu  przydzielony jest ogrodek. Ogrodki od strony wejscia do lokali przynaleza do mieszkan na pietrze, ogrodki od drugiej strony przynaleza do mieszkan na parterze.
         </div>{" "}
       </Card>
     </Col>
     </div>
     <Row/>
    <div
   data-aos="fade-right"
   data-aos-duration="2000"
   className="hoverable z-depth-2"
 >
     <Col m={10} s={12} push="m1">
       <Card
         actions={[
           <a className="black-text" key="1" href="contact">
             Wyślij zapytanie ofertowe
           </a>,
         ]}
         header={
           <CardTitle image={interrior}/>
         }
         horizontal
       >
         <h5>
           Projekt Wnętrz <Divider />
         </h5>
         <div className="left-align">
           Oferujemy przygotowanie projektu wnętrz oraz wykonczenia lokali na zyczenie. Koszt oraz czas realizacji takiego zamowienia bedzie dostosowany do Panstwa preferencji i wymagan.
         </div>{" "}
       </Card>
     </Col>
</div><Row/><div
   data-aos="fade-left"
   data-aos-duration="2000"
   className="hoverable z-depth-2"
 >
     <Col m={10} s={12} push="m1">
       <Card
         actions={[
           <a className="black-text" key="1" href="contact">
             Wyślij zapytanie ofertowe
           </a>,
         ]}
         header={
           <CardTitle image={bim} />
         }
         horizontal
       >
         <h5>
           Lokale na parterze <Divider />
         </h5>
         <div className="left-align">
           Współpracujemy z producentami mebli, oświetlenia oraz linii
           technologicznych w zakresie tworzenia modeli 3d , prezentacji
           wirtualnych oraz bibliotek BIM produktów.
         </div>{" "}
       </Card>
     </Col>
     </div> <Row/><div
   data-aos="fade-right"
   data-aos-duration="2000"
   className="hoverable z-depth-2"
 >
     <Col m={10} s={12} push="m1">
       <Card
         actions={[
           <a className="black-text" key="1" href="contact">
             Wyślij zapytanie ofertowe
           </a>,
         ]}
         header={
           <CardTitle image={obsluga} />
         }
         horizontal
       >
         <h5>
           Lokale na pietrze <Divider />
         </h5>
         <div className="left-align">
           Świadczymy usługi w zakresie doradztwa
           architektoniczno-projektowego. W skład pakietów oferowanych przez
           nas wchodzą: 
           <br/>- konsultacje 
           <br/>- szkice projektowe 
           <br/> - rysunki 2D 
           <br/>  - projekt przygotowany w technologii BIM 
           <br/>   - przedstawicielstwo
           inwestora w kontakcie z oraz nadzorze: branżystów, producentów
           mebli, oświetlenia, konserwatorem itp.
         </div>{" "}
       </Card>
     </Col>
     </div>
     <Row/>

   </Row>

);
};

export default Portfolio;
