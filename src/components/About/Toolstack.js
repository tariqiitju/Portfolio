import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel, SiJetbrains, SiOpenapiinitiative,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiJetbrains />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <SiOpenapiinitiative />*/}
      {/*</Col>*/}
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <SiVercel />*/}
      {/*</Col>*/}
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <SiHeroku />*/}
      {/*</Col>*/}
    </Row>
  );
}

export default Toolstack;
