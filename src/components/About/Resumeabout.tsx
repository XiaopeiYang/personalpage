import { Row, Col } from "react-bootstrap";

import { ImPointRight } from "react-icons/im";
import laptopImg from "../../Assets/about.png";
import { useTranslation} from "react-i18next";
export const Resumeabout = () => {
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
              <div className="name">{t("working.working1.title")}</div>
              <div className="date">{t("working.working1.date")}</div>
            </Col>
          </Row>

          <br />
          <ul style={{ marginLeft: "60px" }}>
            <li className="about-activity">
              <ImPointRight /> {t("working.working1.jd.1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("working.working1.jd.2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("working.working1.jd.3")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("working.working1.jd.4")}
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
              <div className="name">{t("working.working2.title")}</div>
              <div className="date">{t("working.working2.date")}</div>
            </Col>
          </Row>

          <br />
          <ul style={{ marginLeft: "60px" }}>
            <li className="about-activity">
              <ImPointRight /> {t("working.working2.jd.1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("working.working2.jd.2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("working.working2.jd.3")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("working.working2.jd.4")}
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
              <div className="name">{t("working.working3.title")}</div>
              <div className="date">{t("working.working3.date")}</div>
            </Col>
          </Row>

          <br />
          <ul style={{ marginLeft: "60px" }}>
            <li className="about-activity">
              <ImPointRight /> {t("working.working3.jd.1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("working.working3.jd.2")}
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
              <div className="name">{t("working.working4.title")}</div>
              <div className="date">{t("working.working4.date")}</div>
            </Col>
          </Row>

          <br />
          <ul style={{ marginLeft: "60px" }}>
            <li className="about-activity">
              <ImPointRight /> {t("working.working4.jd.1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("working.working4.jd.2")}
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
              <div className="name">{t("working.working5.title")}</div>
              <div className="date">{t("working.working5.date")}</div>
            </Col>
          </Row>
          <br />
          <ul style={{ marginLeft: "60px" }}>
            <li className="about-activity">
              <ImPointRight /> {t("working.working5.jd.1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("working.working5.jd.2")}
            </li>
          </ul>
        </div>
      </div>
    );
}
