
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import pysyft from "../../Assets/Projects/pysyft.png";
import overview from "../../Assets/Projects/overview.png";
import myspotify from "../../Assets/Projects/myspotify.png";
import chatify from "../../Assets/Projects/chatify.png";
import tfserving from "../../Assets/Projects/tfserving.png";
import mann from "../../Assets/Projects/mann.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { useTranslation, Trans } from "react-i18next";
function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="Project-heading" style={{ color: "white" }}>
          <Trans i18nKey="projects.title">
            My previous <strong className="purple">Works </strong>
          </Trans>
        </h1>
        <p style={{ color: "white" }}>{t("projects.subTitle")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title={t("projects.project_1.title")}
              description={t("projects.project_1.description")}
              link="https://github.com/Gaopeng-Bai/OCR_RT_monitor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title={t("projects.project_7.title")}
              description={t("projects.project_7.description")}
              link="https://github.com/Gaopeng-Bai/myspotipy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pysyft}
              isBlog={false}
              title={t("projects.project_2.title")}
              description={t("projects.project_2.description")}
              link="https://github.com/Gaopeng-Bai/Gradient-Secure"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={overview}
              isBlog={false}
              title={t("projects.project_3.title")}
              description={t("projects.project_3.description")}
              link="https://github.com/Gaopeng-Bai/PersonalPageTemplate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title={t("projects.project_4.title")}
              description={t("projects.project_4.description")}
              link="https://github.com/Gaopeng-Bai/QT_flowmanager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tfserving}
              isBlog={false}
              title={t("projects.project_8.title")}
              description={t("projects.project_8.description")}
              link="https://github.com/Gaopeng-Bai/tf-serving-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mann}
              isBlog={false}
              title={t("projects.project_5.title")}
              description={t("projects.project_5.description")}
              link="https://github.com/Gaopeng-Bai/MANN_model"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myspotify}
              isBlog={false}
              title={t("projects.project_6.title")}
              description={t("projects.project_6.description")}
              link="https://github.com/Gaopeng-Bai/myspotipy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myspotify}
              isBlog={false}
              title={t("projects.project_9.title")}
              description={t("projects.project_9.description")}
              link="https://github.com/Gaopeng-Bai/BS_spotify"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
