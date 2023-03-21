import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {FaFacebookF, FaHackerrank, FaLinkedinIn} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import logo from "../Assets/logo-tariq4.png";
import profile from "../Assets/profile.json"
import codeforcesLogo from "../Assets/codeforces-logo2.png"
import codechefLogo from "../Assets/codechef-logo.png"
import leetcodeLogo from "../Assets/leetcode-logo.png"
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/*<h3>Designed and Developed by Soumyajit Behera</h3>*/}
          <h3>
            Forked from &nbsp;
            <a href="https://github.com/soumyajit4419/Portfolio">
              soumyajit
            </a>,
            Customized by Tariqul Islam
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          {/*<h3>Copyright © {year} Tariq</h3>*/}
          <h3>Copyright © {year} <img src={logo} className="img-fluid logo" alt="Tariq" /></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {profile.social && profile.social.facebook && (
                <li className="social-icons">
                  <a
                      href={`https://${profile.social.facebook}`}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
            )}
            {profile.social && profile.social.instragam && (
                <li className="social-icons">
                  <a
                      href={`https://${profile.social.instragam}`}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
            )}
            {profile.social && profile.social.github && (
                <li className="social-icons">
                  <a
                      href={`https://${profile.social.github}`}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
            )}
            {profile.social && profile.social.codeforces && (
                <li className="social-icons">
                  <a
                      href={`https://${profile.social.codeforces}`}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <img src={codeforcesLogo} alt="Codeforces" className="footer-social-icons-custom-image"/>
                  </a>
                </li>
            )}
            {profile.social && profile.social.codechef && (
                <li className="social-icons">
                  <a
                      href={`https://${profile.social.codechef}`}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <img src={codechefLogo} alt="CodeChef" className="footer-social-icons-custom-image"/>
                  </a>
                </li>
            )}
            {profile.social && profile.social.hackerrank && (
                <li className="social-icons">
                  <a
                      href={`https://${profile.social.hackerrank}`}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <FaHackerrank />
                  </a>
                </li>
            )}
            {profile.social && profile.social.leetcode && (
                <li className="social-icons">
                  <a
                      href={`https://${profile.social.leetcode}`}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <img src={leetcodeLogo} alt="LeetCode" className="footer-social-icons-custom-image"/>
                  </a>
                </li>
            )}
            {profile.social && profile.social.linkedin && (
                <li className="social-icons">
                  <a
                      href={`https://${profile.social.linkedin}`}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
            )}
            {profile.social && profile.social.twitter && (
                <li className="social-icons">
                  <a
                      href={`https://${profile.social.twitter}`}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
            )}
            {profile.email && (
                <li className="social-icons">
                  <a
                      href={`mailto:${profile.email}`}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <MdEmail />
                  </a>
                </li>
            )}
          </ul>
        </Col>

      </Row>
    </Container>
  );
}

export default Footer;
