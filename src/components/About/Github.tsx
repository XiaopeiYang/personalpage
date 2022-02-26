
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Trans } from "react-i18next";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    level4: "#8400b8",
    level3: "#b22ff4",
    level2: "#b265f6",
    level1: "#c084f5",
    level0: "#ecd9fc",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <Trans i18nKey="About.sub_code">
          Days I <strong className="purple">Code</strong>
        </Trans>
      </h1>
      <GitHubCalendar
        username="Gaopeng-Bai"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
        year={new Date().getFullYear()}
      />
    </Row>
  );
}

export default Github;
