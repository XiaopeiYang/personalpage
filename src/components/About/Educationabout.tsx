import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ImPointRight } from "react-icons/im";
import laptopImg from "../../Assets/about.png";

export const Educationabout = () => {
  const { t } = useTranslation();
  return (
    <div className="resume-items">
      <div className="resume-item">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={2}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              // paddingBottom: "10px",
            }}
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col md={8} style={{ paddingTop: "20px" }}>
            <div className="name">{t("education.education1.title")}</div>
            <div className="date">{t("education.education1.date")}</div>
          </Col>
        </Row>

        <br />
        <ul style={{ marginLeft: "60px" }}>
          <li className="about-activity">
            <ImPointRight /> {t("education.education1.jd.1")}
          </li>
        </ul>
      </div>

      <div className="resume-item">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={2}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              // paddingBottom: "10px",
            }}
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col md={8} style={{ paddingTop: "20px" }}>
            <div className="name">{t("education.education2.title")}</div>
            <div className="date">{t("education.education2.date")}</div>
          </Col>
        </Row>

        <br />
        <ul style={{ marginLeft: "60px" }}>
          <li className="about-activity">
            <ImPointRight /> {t("education.education2.jd.1")}
          </li>
        </ul>
      </div>

      <div className="resume-item">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={2}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              // paddingBottom: "10px",
            }}
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col md={8} style={{ paddingTop: "20px" }}>
            <div className="name">{t("education.education3.title")}</div>
            <div className="date">{t("education.education3.date")}</div>
          </Col>
        </Row>

        <br />
        <ul style={{ marginLeft: "60px" }}>
          <li className="about-activity">
            <ImPointRight /> {t("education.education3.jd.1")}
          </li>
        </ul>
      </div>

      <div className="resume-item">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={2}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              // paddingBottom: "10px",
            }}
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col md={8} style={{ paddingTop: "20px" }}>
            <div className="name">{t("education.education4.title")}</div>
            <div className="date">{t("education.education4.date")}</div>
          </Col>
        </Row>

        <br />
        <ul style={{ marginLeft: "60px" }}>
          <li className="about-activity">
            <ImPointRight /> {t("education.education4.jd.1")}
          </li>
        </ul>
      </div>
    </div>
  );
};
