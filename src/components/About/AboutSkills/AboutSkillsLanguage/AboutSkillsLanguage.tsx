import AboutSkillsLanguageUnit from "./AboutSkillsLanguageUnit";
import styles from "../../About.styles";
import aboutData from "../../About.data";

const AboutSkillsLanguage = () => {
  const containerStyle =
    styles.skillsSection.languagesSection.languageContainer;
  const languages = aboutData.language.map((lang) => (
    <AboutSkillsLanguageUnit key={lang} language={lang} />
  ));

  return (
    <div>
      <h2>Languages</h2>
      <ul className={containerStyle}>{languages}</ul>
    </div>
  );
};

export default AboutSkillsLanguage;
