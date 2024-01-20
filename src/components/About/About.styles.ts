const styles = {
  section:
    "mb-8 w-section animate-opening rounded-2xl bg-orange-200 bg-gradient-to-r px-8 py-4 md:mb-12 md:px-12 md:py-6",
  skillsSection: {
    techstacksSection: {
      techstackContainer:
        "grid list-none grid-cols-1 flex-col gap-2 md:grid-cols-2 2xl:grid-cols-3",
      techstack:
        "cursor-pointer rounded-lg bg-orange-50 p-2 text-center duration-150 hover:-translate-y-1 hover:bg-rose-300 hover:text-white hover:shadow-buttonShadow",
    },
    languagesSection: {
      languageContainer:
        "grid list-none grid-cols-2 flex-col gap-2 2xl:grid-cols-4",
      language:
        "cursor-pointer rounded-lg bg-orange-50 p-2 text-center duration-150 hover:-translate-y-1 hover:bg-rose-300 hover:text-white hover:shadow-buttonShadow",
    },
  },
};

export default styles;
