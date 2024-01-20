import styles from "./Contact.styles";

type Props = {
  name: string;
  url: string;
  hoverColor: string;
};

const ContactLink = ({ name, url, hoverColor }: Props) => {
  const linkStyle = `${styles.links.link} ${hoverColor}`;

  return (
    <a className={linkStyle} href={url} target="_blank" rel="noreferrer">
      {name}
    </a>
  );
};

export default ContactLink;
