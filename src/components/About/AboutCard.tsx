
import Card from "react-bootstrap/Card";
import { useTranslation, Trans } from "react-i18next";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <Trans i18nKey="About.aboutme">
              Hi Everyone, I am <span className="purple">Gaopeng Bai </span>
              from <span className="purple"> Henan, China.</span>
              <br />
            </Trans>
            <br />
            {t("About.aboutme_1")}
            <br />
            <br />
            {t("About.aboutme_2")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("About.hobbies.1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("About.hobbies.2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("About.hobbies.3")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("About.hobbies.4")}
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "{t("About.instruct")}"{" "}
          </p>
          <footer className="blockquote-footer">Gaopeng</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
