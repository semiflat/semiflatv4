async function onBeforeRender() {
  return {
    pageContext: {
      pageProps: {
        pageShell: {
          smallGradient: "!bg-[#F0EDFE] md:!blur-[240px] md:!w-[50rem] md:!h-[50rem] md:!-top-[7.25rem] md:!-right-102",
          bigGradient: "!bg-[#F0EDFE] md:!blur-[200px] md:w-[67.5rem] md:h-[67.5rem] md:!-top-[10rem]",
          hide: "!hidden",
          bgColor: "!bg-[#481B97]",
          navHover: "hover:!bg-black/08"
        }
      }
    }
  };
}
const passToClient = ["pageProps"];
export {
  onBeforeRender,
  passToClient
};
