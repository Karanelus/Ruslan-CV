const CvContactLink = () => {
  return (
    <>
      <h2 className="text-center">Contact with me</h2>
      <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
        <a
          className="cursor-pointer rounded-lg bg-orange-50 p-2 text-center duration-150 hover:translate-y-[-0.25rem] hover:bg-[#0a66c2] hover:text-white hover:shadow-buttonShadow"
          href="https://www.linkedin.com/in/karanelus/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="cursor-pointer rounded-lg bg-orange-50 p-2 text-center duration-150 hover:translate-y-[-0.25rem] hover:bg-[#0D1117] hover:text-white hover:shadow-buttonShadow"
          href="https://github.com/Karanelus"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="cursor-pointer rounded-lg bg-orange-50 p-2 text-center duration-150 hover:translate-y-[-0.25rem] hover:bg-[#28A8EA] hover:text-white hover:shadow-buttonShadow"
          href="https://t.me/Karane1us"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
        <a
          className="cursor-pointer rounded-lg bg-orange-50 p-2 text-center duration-150 hover:translate-y-[-0.25rem] hover:bg-[#5562EA] hover:text-white hover:shadow-buttonShadow"
          href="https://www.discordapp.com/users/Karanelus#7672"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
      </ul>
    </>
  );
};

export default CvContactLink;
