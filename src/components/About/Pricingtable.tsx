import { Col, Row } from "react-bootstrap";
import { BiEuro } from "react-icons/bi";
import { FcFlashOn, FcPaid } from "react-icons/fc";

export const Pricingtable = () => {
  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col md={5} className="pricingtable" style={{ marginRight: "50px" }}>
        <div className="name">
          {" "}
          <FcFlashOn />
          Basic
        </div>
        <BiEuro /> 55,000 / Year
        <ul style={{ listStyleType: "none" }}>
          <li>Machine Learning development</li>
          <li>Software Development</li>
          <li>Full stack Development</li>
          <li>Embedded System development</li>
          <li>Office work</li>
        </ul>
      </Col>
      <Col md={5} className="pricingtable">
        <div className="name">
          <FcPaid /> Pro
        </div>
        <BiEuro /> 60,000 / Year
        <ul style={{ listStyleType: "none" }}>
          <li>Algorithm Development</li>
          <li>Maschine Leaning Algorithms</li>
          <li>Project Management</li>
          <li>Project Leader</li>
        </ul>
      </Col>
    </Row>
  );
};
