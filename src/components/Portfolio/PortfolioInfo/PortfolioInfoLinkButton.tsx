import styles from "../Portfolio.styles";

type Props = {
  link: string;
  name: string;
};

const PortfolioInfoLinkButton = ({ link, name }: Props) => {
  const buttonStyleShortcut =
    styles.portfolioSection.projectInfoSection.linkButtons.linkButton;

  return (
    <button className={buttonStyleShortcut}>
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </button>
  );
};

export default PortfolioInfoLinkButton;
