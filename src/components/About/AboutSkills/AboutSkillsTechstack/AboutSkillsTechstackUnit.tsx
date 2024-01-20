import styles from "../../About.styles";

type Props = {
  techstack: string;
};

const AboutSkillsTechstackUnit = ({ techstack }: Props) => {
  const styleTechstack = styles.skillsSection.techstacksSection.techstack;

  return <li className={styleTechstack}>{techstack}</li>;
};

export default AboutSkillsTechstackUnit;
