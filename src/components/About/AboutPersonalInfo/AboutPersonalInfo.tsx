import AboutPersonalInfoParagraf from "./AboutPersonalInfoParagraf";
import aboutData from "../About.data";
import styles from "../About.styles";

const AboutPersonalInfo = () => {
  const paragrafs = aboutData.aboutInfo.map((text) => (
    <AboutPersonalInfoParagraf text={text} />
  ));

  return <section className={styles.section}>{paragrafs}</section>;
};

export default AboutPersonalInfo;
