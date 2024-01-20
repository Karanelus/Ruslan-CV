import styles from "../../About.styles";

type Props = {
  language: string;
};

const AboutSkillsLanguageUnit = ({ language }: Props) => {
  const styleLanguage = styles.skillsSection.languagesSection.language;

  return <li className={styleLanguage}>{language}</li>;
};

export default AboutSkillsLanguageUnit;
