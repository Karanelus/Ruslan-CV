import styles from "../About.styles";
import AboutSkillsLanguage from "./AboutSkillsLanguage/AboutSkillsLanguage";
import AboutSkillsTechstack from "./AboutSkillsTechstack/AboutSkillsTechstack";

const AboutSkills = () => {
  return (
    <div className={styles.section}>
      <AboutSkillsTechstack />
      <AboutSkillsLanguage />
    </div>
  );
};

export default AboutSkills;
