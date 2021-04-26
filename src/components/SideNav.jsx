import "materialize-css";
import React, { Component, useEffect } from "react";
import { Button, Col, Divider, Row } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import logo from "./svg/logo.svg"

const SideNav = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row></Row>;
  else
    return (
      <div className="sideNav ">
        
          <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Copy-of-workplace.svg" width="100%" alt=""/>
          <br/><br/><br/><br/>
          <Link to="wystawa1" className="sideNavItem">
            Wystawa 1 <br/>bajki w bakjach<Divider/>
          </Link>
<br/>
          <Link to="wystawa2" className="sideNavItem">
          Wystawa 2 <br/> drzewa w bakjach<Divider/>
          </Link>
          <br/>
          <Link to="wystawa3" className="sideNavItem">
          Wystawa 3 <br/>krzaki w bakjach<Divider/>
          </Link><br/>
          <Link to="wystawa4" className="sideNavItem">
          Wystawa 4 <br/>samoloty w bakjach<Divider/>
          </Link><br/>
          <Link to="wystawa5" className="sideNavItem">
          Wystawa 5 <br/>plaża w bakjach<Divider/>
          </Link>
          <br/><br/><br/><br/>
          <div className="left">Informacja RODO</div><br/>
          <div className="rodo left-align">
          <br/>
         
          My i nasi partnerzy możemy uzyskać dodstęp do Twojego urządzenia, aby rozpoznać Cię za pomocą takich indentyfikatorów jak: pliki coockie i ip. Dane te wykorzystanę są tylko i wyłącznie w celu wyboru języka oraz usprawnienia działania strony (poprzez przechowywanie zdjęć, tekstu i filmów ,znajdujących na stronie, w pamięci podręcznej komputera).
     </div>
     <Link>
     więcej informacji
     </Link>
    
      </div>
    );
};

export default SideNav;
