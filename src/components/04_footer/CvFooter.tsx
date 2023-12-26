const CvFooter = () => {
  const date = new Date();

  return (
    <footer className="w-full bg-gradient-to-r from-rose-300 via-orange-200 to-rose-300 py-4 text-center md:py-6">
      <p>©{date.getFullYear()}, Rusłan Karaniewski</p>
    </footer>
  );
};

export default CvFooter;
