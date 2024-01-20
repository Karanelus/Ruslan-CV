const styles = {
  burgerMenu:
    "fixed right-8 top-4 grid aspect-square w-8 cursor-pointer place-items-center rounded-md bg-orange-300 duration-150 active:scale-90 active:bg-orange-400 md:hidden",
  screenUp: {
    basic:
      "duration-150 fixed bottom-4 right-8 grid aspect-square w-10 rotate-90 cursor-pointer place-items-center rounded-lg bg-orange-300 active:scale-75 active:bg-orange-400",
    active: "opacity-100",
    hidden: "pointer-events-none opacity-0",
  },
};

export default styles;
