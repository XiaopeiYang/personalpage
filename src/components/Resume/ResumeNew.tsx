import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import cven from "../../Assets/CV_EN_GaopengBai.pdf";
import cvcn from "../../Assets/CV_CN_GaopengBai.pdf";
import cvge from "../../Assets/CV_GE_GaopengBai.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useTranslation } from "react-i18next";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdf, setPdf] = useState(cven);
  const { i18n } = useTranslation();

  useEffect(() => {
    setWidth(window.innerWidth);

    switch (i18n.language) {
      default:
        setPdf(cven);
        break;
      case "de":
        setPdf(cvge);
        break;
      case "zh":
        setPdf(cvcn);
        break;
    }
  }, [i18n.language]);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            options={{
              cMapUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/cmaps/`,
              cMapPacked: true,
            }}
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
