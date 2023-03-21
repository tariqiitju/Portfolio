import React from "react";

import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import architect from "../../Assets/architecture.png";
import Home2 from "./Home2";
import Type from "./Type";
import ParticleWrap from "../ParticleWrap";
import profile from "../../Assets/profile.json"

function Home() {

  const fullName = profile.firstName + " " +  profile.lastName

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <ParticleWrap/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/*<h1 style={{ paddingBottom: 15 }} className="heading">*/}
              {/*  Hello There!{" "}*/}
              {/*  <span className="wave" role="img" aria-labelledby="wave">*/}
              {/*    👋🏻*/}
              {/*  </span>*/}
              {/*</h1>*/}

              <h1 className="heading-name">
                <strong className="main-name"> {fullName.toUpperCase()}</strong>
              </h1>

              <div style={{ paddingTop: 5, paddingLeft: 175, textAlign: "left" , fontSize:"12px"}}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={architect}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
