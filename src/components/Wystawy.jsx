import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Card,
  MediaBox,
  Caption,
  Modal,
  Table,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Lista from "./Lista";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
const Wystawy = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  let lang = localStorage.getItem("lang");

  return (
  
    <Row>
      <Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/>
      <Col s={12} m={10} push="m1">
     <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className=" "
      >
        <Row>
          <Col s={12} m={7}><Row/><Row/>
            <img
              src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFpcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              width="100%"
            />
          </Col>
          <Col s={12} m={5} className="left-align">
            <h3>Jan Kowalski: Bajki w Bajkach</h3>
<br/>
22 Kwietnia - 22 Maja 2021

            <Divider /><Row/>
           <div className="left-align" >
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
           </div>
           <br/><br/><br/>
           <Link to="wystawa1" className="btn-large black z-depth-3">

              Więcej informacji
            </Link>
          </Col>
        </Row>
     </div>
     <Row/><Row/> <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className=" "
      >
        <Row>
          <Col s={12} m={7}><Row/><Row/>
            <img
              src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFpcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              width="100%"
            />
          </Col>
          <Col s={12} m={5} className="left-align">
            <h3>Jan Kowalski: Bajki w Bajkach</h3>
<br/>
22 Kwietnia - 22 Maja 2021

            <Divider /><Row/>
           <div className="left-align" >
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
           </div>
           <br/><br/><br/>
           <Link to="wystawa1" className="btn-large black z-depth-3">

              Więcej informacji
            </Link>
          </Col>
        </Row>
     </div>   <Row/><Row/>
     <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className=" "
      >
        <Row>
          <Col s={12} m={7}><Row/><Row/>
            <img
              src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFpcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              width="100%"
            />
          </Col>
          <Col s={12} m={5} className="left-align">
            <h3>Jan Kowalski: Bajki w Bajkach</h3>
<br/>
22 Kwietnia - 22 Maja 2021

            <Divider /><Row/>
           <div className="left-align" >
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
           </div>
           <br/><br/><br/>
           <Link to="wystawa1" className="btn-large black z-depth-3">

              Więcej informacji
            </Link>
          </Col>
        </Row>
     </div>
     <Row/><Row/>
     <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className=" "
      >
        <Row>
          <Col s={12} m={7}><Row/><Row/>
            <img
              src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFpcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              width="100%"
            />
          </Col>
          <Col s={12} m={5} className="left-align">
            <h3>Jan Kowalski: Bajki w Bajkach</h3>
<br/>
22 Kwietnia - 22 Maja 2021

            <Divider /><Row/>
           <div className="left-align" >
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
           </div>
           <br/><br/><br/>
           <Link to="wystawa1" className="btn-large black z-depth-3">

              Więcej informacji
            </Link>
          </Col>
        </Row>
     </div>
    

      </Col></Row>
  );
};

export default Wystawy;
