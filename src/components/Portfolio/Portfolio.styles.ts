const styles = {
  container:
    "mb-8 w-section animate-opening rounded-[1rem] bg-orange-200 px-4 py-8 md:mb-12",
  portfolioSection: {
    container: "flex flex-col items-center rounded-lg bg-orange-100 px-4 py-8",
    infoSplitter:
      "relative grid w-full grid-rows-2 rounded-2xl px-4 py-2 sm:grid-cols-2 sm:grid-rows-1 md:px-8 md:py-4",
    arrowButton:
      "absolute top-2/4 grid aspect-square h-7 -translate-y-1/2 place-items-center rounded-md bg-orange-200 duration-150 hover:translate-y-[calc(-50%-0.25rem)] hover:bg-orange-400 hover:shadow-buttonShadow active:scale-90",
    imageSection: {
      container: "relative aspect-project px-4 py-2 duration-200",
      image: "w-full rounded-lg",
      imageCheckButtons: {
        container:
          "absolute bottom-0 right-1/2 flex w-fit translate-x-1/2 translate-y-1/2 gap-2",
        checkButton:
          "aspect-square w-4 cursor-pointer appearance-none rounded-full bg-zinc-300 duration-150 before:block before:aspect-square before:w-4 before:scale-0 before:rounded-full before:bg-slate-700 before:duration-150",
      },
    },
    projectInfoSection: {
      container:
        "relative flex aspect-project flex-col gap-2 px-4 py-2 duration-200",
      headerText: "text-left",
      linkButtons: {
        container:
          "absolute bottom-0 right-1/2 flex w-max translate-x-1/2 translate-y-1/2 justify-center gap-4",
        linkButton:
          "rounded-lg bg-white px-2 py-1 duration-150 hover:-translate-y-1 hover:bg-rose-300 hover:text-white hover:shadow-buttonShadow",
      },
    },
  },
};

export default styles;
