
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";

import { Pricingtable } from "./Pricingtable";
import { Resumeabout } from "./Resumeabout";
import { Educationabout } from "./Educationabout";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { Trans } from "react-i18next";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <Trans i18nKey="About.title">
                Know Who <strong className="purple">I'M</strong>
              </Trans>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <Trans i18nKey="About.sub_works">
            My <strong className="purple">Working Experience</strong>
          </Trans>
        </h1>
        <Resumeabout />
        <br />
        <br />
        <h1 className="project-heading">
          <Trans i18nKey="About.sub_education">
            My <strong className="purple">Education</strong>
          </Trans>
        </h1>
        <Educationabout />
        <br />
        <br />
        <h1 className="project-heading">
          <Trans i18nKey="About.sub_sills">
            Professional <strong className="purple">Skillset </strong>
          </Trans>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <Trans i18nKey="About.sub_tools">
            <strong className="purple">Tools</strong> I use
          </Trans>
        </h1>
        <Toolstack />

        <Github />
        <br />
        <br />
        <h1 className="project-heading">
          <Trans i18nKey="About.sub_pricing">
            <strong className="purple">Pricing</strong> Table
          </Trans>
        </h1>

        <Pricingtable />
      </Container>
    </Container>
  );
}

export default About;
