import { useTranslation } from "react-i18next";
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="language-select ml-auto">
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">en</option>
        <option value="de">de</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;
