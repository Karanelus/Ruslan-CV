import { contactLinks } from "./Contact.data";
import ContactLink from "./ContactLink";
import styles from "./Contact.styles";

const Contact = () => {
  const ContactLinks = contactLinks.map((link) => (
    <ContactLink
      key={link.id}
      name={link.name}
      url={link.url}
      hoverColor={link.hoverColor}
    />
  ));

  return (
    <div className={styles.contactContainer}>
      <h2>Contact with me</h2>
      <ul className={styles.links.linksContainer}>{ContactLinks}</ul>
    </div>
  );
};

export default Contact;
