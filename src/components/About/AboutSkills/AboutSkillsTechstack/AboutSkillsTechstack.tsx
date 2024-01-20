import AboutSkillsTechstackUnit from "./AboutSkillsTechstackUnit";
import styles from "../../About.styles";
import aboutData from "../../About.data";

const AboutSkillsTechstack = () => {
  const containerStyle =
    styles.skillsSection.techstacksSection.techstackContainer;
  const techstacks = aboutData.techstack.map((techstack) => (
    <AboutSkillsTechstackUnit key={techstack} techstack={techstack} />
  ));

  return (
    <div>
      <h2>Techstack</h2>
      <ul className={containerStyle}>{techstacks}</ul>
    </div>
  );
};

export default AboutSkillsTechstack;
