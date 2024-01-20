type Props = {
  text: string;
};

const AboutPersonalInfoParagraf = ({ text }: Props) => {
  return <p data-with-indent>{text}</p>;
};

export default AboutPersonalInfoParagraf;
