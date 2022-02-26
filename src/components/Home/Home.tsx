import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
// import Home2 from "./Home2";
import Type from "./Type";
import { useTranslation, Trans } from "react-i18next";
import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillMediumCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("greetings.greeting")}!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <Trans i18nKey="greetings.name">
                  I'M <strong className="main-name">Gaopeng Bai</strong>
                </Trans>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <Trans i18nKey="Introduction.title">
                LET ME <b className="purple">INTRODUCE</b> MYSELF
              </Trans>
            </h1>
            <p className="home-about-body">
              {t("Introduction.paragraph1")}… 🤷‍♂️
              <br />
              <br />
              <Trans i18nKey="Introduction.paragraph2">
                I am fluent in classics like
                <b className="purple">
                  C++, C#, Java, Javascript/Typescript, Matlab, and Python
                </b>
                .
              </Trans>
              <br />
              <br />
              <Trans i18nKey="Introduction.paragraph3">
                My field of interest is building new
                <b className="purple">Web Technologies and Products</b> and also
                in areas related to
                <b className="purple">
                  Image Processing, Natural Language Processing or other Machine
                  Learning solutions and even Machine learning Algorithms
                </b>
                .
              </Trans>
              <br />
              <br />
              <Trans i18nKey="Introduction.paragraph4">
                Acquired some experience in software development during the work
                regarding the
                <b className="purple">Microsoft Azure service and devops</b>.
              </Trans>
              <br />
              <br />
              <Trans i18nKey="Introduction.paragraph5">
                Some fields did a long time ago, Such as
                <b className="purple">Microcontroller Development</b>,
                <b className="purple">Linux OS development</b>,
                <b className="purple">Internet of things</b>, etc.
                <b className="purple">Embedded system development</b>.
              </Trans>
              <br />
              <br />
              <Trans i18nKey="Introduction.paragraph6">
                Whenever possible, I also apply my passion for developing
                products with <b className="purple">Full Stack development</b>
                and <b className="purple">Machine leanring solutions</b>.
              </Trans>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt> */}
            <img src={myImg} className="img-fluid" alt="avatar" />
            {/* </Tilt> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            
            <h1>
              <Trans i18nKey="social_info.1">FIND ME ON</Trans>
            </h1>
            <p>
              <Trans i18nKey="social_info.2">
                Feel free to <span className="purple">connect </span>with me
              </Trans>
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Gaopeng-Bai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/GaopengBai/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gaopengbai/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://gaopengbai0121.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumCircle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
