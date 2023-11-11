const CvFooter = () => {
  const date = new Date();

  return (
    <footer className="w-full text-center md:py-6 py-4 bg-gradient-to-r from-rose-300 via-orange-200 to-rose-300">
      <p>©{date.getFullYear()}, Rusłan Karaniewski</p>
    </footer>
  );
};

export default CvFooter;
