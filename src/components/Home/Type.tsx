
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { t } = useTranslation();
  
  return (
    <Typewriter
      onInit={() => {}}
      options={{
        strings: [
          t("type_strings.1"),
          t("type_strings.2"),
          t("type_strings.3"),
          t("type_strings.4"),
          t("type_strings.5"),
          t("type_strings.6"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
