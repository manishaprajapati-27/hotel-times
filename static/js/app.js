const appFunc = () => {
  // Loader
  gsap.from(".loader", {
    visibility: "visible",
    height: "100vh",
    duration: 2,
    delay: 2,
  });
  gsap.to(".loader .logo", {
    opacity: 1,
    visibility: "visible",
    duration: 1,
    delay: 0.5,
  });
  gsap.to(".loader .logo img", {
    opacity: 1,
    transform: "scale(1)",
    visibility: "visible",
    duration: 1,
    delay: 0.5,
  });
  gsap.to(".loader .logo h4", {
    opacity: 1,
    visibility: "visible",
    duration: 1,
    delay: 1,
  });

  //   Text Marquee Animation

  //   gsap.from(".hero .marque", {
  //     transform: "translateX(-200%)",
  //     repeat: -1,
  //     duration: 20,
  //     delay: 1,
  //     ease: "none",
  //     ScrollTrigger: {
  //       trigger: ".hero",
  //       scroller: "body",
  //     },
  //   });

  // Create the GSAP timeline
  const marqueTimeline = gsap.timeline({
    repeat: -1, // Infinite looping
    paused: false, // Start paused; we'll control it manually
  });

  marqueTimeline.to(".hero .marque", {
    x: "0%", // Moves left
    duration: 20, // Duration of animation
    ease: "none", // Linear motion
  });

  // Setup ScrollTrigger
  ScrollTrigger.create({
    trigger: ".hero", // Element to monitor for scrolling
    scroller: "body", // Default scroller is body
    start: "top top", // When element starts at the top
    end: "bottom top", // When element ends at the top
    onUpdate: (self) => {
      // self.direction: 1 for scrolling down, -1 for scrolling up
      if (self.direction === 1) {
        marqueTimeline.play(); // Scroll down plays animation
      } else if (self.direction === -1) {
        marqueTimeline.reverse(); // Scroll up reverses animation
      }
    },
  });

  //   window.addEventListener("wheel", (dets) => {
  //     console.log(dets.deltaY);
  //     if (dets.deltaY > 0) {
  //       gsap.from(".hero .marque", {
  //         // transform: "translateX(-200%)",
  //         x: "-200%",
  //         repeat: -1,
  //         duration: 5,
  //         delay: 1,
  //         ease: "none",
  //       });
  //     } else if (dets.deltaY < 0) {
  //       gsap.from(".hero .marque", {
  //         // transform: "translateX(0%)",
  //         x: "0%",
  //         repeat: -1,
  //         duration: 5,
  //         delay: 1,
  //         ease: "none",
  //       });
  //     }
  //   });
};

appFunc();
