const appFunc = () => {
  // Loader
  gsap.from(".loader", {
    opacity: 1,
    visibility: "visible",
    duration: 1,
    delay: 4,
    height: "100vh",
  });
  gsap.from(".logo", {});
};

appFunc();
