import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import codeforcesLogo from "../../Assets/codeforces-logo2.png"
import codechefLogo from "../../Assets/codechef-logo.png"
import leetcodeLogo from "../../Assets/leetcode-logo.png"
import Tilt from "react-parallax-tilt";
import profile from "../../Assets/profile.json"

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {FaCode, FaFacebookF, FaHackerrank, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

function Home2() {

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">

            <h1 style={{ paddingBottom: 15 }} className="home2-heading">
              Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
            </h1>

            <div className="home-about-body">
              <p>
                Hi, I'm <span className="home2-name">{profile.nickName}</span>, and I'm passionate about building <span
                  className="home2-highlight-text">cutting-edge software</span> with the latest technologies.
              </p>
              <p>
                <span className="icon">👨‍💻</span> With years of experience in software engineering, I specialize
                in <span className="home2-highlight-text">Java</span>, <span
                  className="home2-highlight-text">C++</span>, <span
                  className="home2-highlight-text">Spring Boot</span>, <span
                  className="home2-highlight-text">MySQL</span>, and <span
                  className="home2-highlight-text">Python</span>.
              </p>
              <p>
                <span className="icon">🚀</span> I take pride in my ability to design, develop, and deploy <span
                  className="home2-highlight-text">scalable backend systems</span>, and have a proven track record of
                doing so.
              </p>
              <p>
                <span className="icon">🏆</span> Additionally, I excel in <span className="home2-highlight-text">algorithms and data structures</span>,
                thanks to my past achievements as a competitive programmer.
              </p>
              <p>
                <span className="icon">💪</span> I take <span className="home2-highlight-text">ownership</span> of my
                work and <span className="home2-highlight-text">lead feature design and implementation processes</span>.
              </p>
              <p>
                <span className="icon">🤝</span> I enjoy collaborating with cross-functional teams and have a reputation
                for delivering <span className="home2-highlight-text">high-quality work within tight deadlines</span>.
              </p>
              <p>
                <span className="icon">🌍</span> My goal is to continue growing as a developer while making a <span
                  className="home2-highlight-text">positive impact on the world</span> with my skills.
              </p>
              {/*<a href="#contact" className="cta-button">Ready to discuss your next project?</a>*/}
            </div>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON SOCIAL MEDIA</h1>
            <p>Feel free to <span className="purple">connect </span>with me</p>
            <ul className="home-about-social-links">
              {profile.social.facebook && (
                  <li className="social-icons">
                    <a href={`https://${profile.social.facebook}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      <FaFacebookF />
                    </a>
                  </li>
              )}
              {profile.social.instragam && (
                  <li className="social-icons">
                    <a href={`https://${profile.social.instragam}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      <FaInstagram />
                    </a>
                  </li>
              )}
              {profile.social.github && (
                  <li className="social-icons">
                    <a href={`https://${profile.social.github}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      <AiFillGithub />
                    </a>
                  </li>
              )}
              {profile.social.codeforces && (
                  <li className="social-icons">
                    <a href={`https://${profile.social.codeforces}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      <img src={codeforcesLogo} alt="Codeforces" className="social-icons-custom-image" />
                    </a>
                  </li>
              )}
              {profile.social.codechef && (
                  <li className="social-icons">
                    <a href={`https://${profile.social.codechef}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      {/*<FaCode />*/}
                      <img src={codechefLogo} alt="Codechef" className="social-icons-custom-image" />
                    </a>
                  </li>
              )}
              {profile.social.hackerrank && (
                  <li className="social-icons">
                    <a href={`https://${profile.social.hackerrank}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      <FaHackerrank />
                    </a>
                  </li>
              )}
              {profile.social.leetcode && (
                  <li className="social-icons">
                    <a href={`https://${profile.social.leetcode}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      {/*<FaCode />*/}
                      <img src={leetcodeLogo} alt="Leetcode" className="social-icons-custom-image" />
                    </a>
                  </li>
              )}
              {profile.social.instagram && (
                  <li className="social-icons">
                    <a href={`https://${profile.social.instagram}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      <AiFillInstagram />
                    </a>
                  </li>
              )}
              {profile.social.linkedin && (
                  <li className="social-icons">
                    <a href={`https://${profile.social.linkedin}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      <FaLinkedinIn />
                    </a>
                  </li>
              )}
              {profile.social.twitter && (
                  <li className="social-icons">
                    <a href={`https://${profile.social.twitter}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      <AiOutlineTwitter />
                    </a>
                  </li>
              )}
              {profile.email && (
                  <li className="social-icons">
                    <a href={`mailto:${profile.email}`} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                      <HiOutlineMail />
                    </a>
                  </li>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
