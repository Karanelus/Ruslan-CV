const CvContactLink = () => {
  return (
    <>
      <h2 className=" text-center">Contact with me</h2>
      <ul className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-2">
        <a
          className="rounded-lg bg-orange-50 hover:bg-[#0a66c2] p-2 cursor-pointer hover:text-white duration-150 text-center hover:translate-y-[-0.25rem] hover:shadow-buttonShadow"
          href="https://www.linkedin.com/in/karanelus/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="rounded-lg bg-orange-50 hover:bg-[#0D1117] p-2 cursor-pointer hover:text-white duration-150 text-center hover:translate-y-[-0.25rem] hover:shadow-buttonShadow"
          href="https://github.com/Karanelus"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="rounded-lg bg-orange-50 hover:bg-[#28A8EA] p-2 cursor-pointer hover:text-white duration-150 text-center hover:translate-y-[-0.25rem] hover:shadow-buttonShadow"
          href="https://t.me/Karane1us"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
        <a
          className="rounded-lg bg-orange-50 hover:bg-[#5562EA] p-2 cursor-pointer hover:text-white duration-150 text-center hover:translate-y-[-0.25rem] hover:shadow-buttonShadow"
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
