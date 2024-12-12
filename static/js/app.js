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
    x: "0%",
    duration: 20,
    ease: "none",
  });

  // Setup ScrollTrigger
  ScrollTrigger.create({
    trigger: ".hero",
    scroller: "body",
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

  //   Hero Images
  let isScrolling;
  const heroAnimationSection = gsap.to(".hero", {
    duration: 10,
    ease: "none",
    height: 0,
    scrollTrigger: {
      trigger: ".hero",
      scroller: "body",
      start: "top top", // When element starts at the top
      end: "bottom top",
      //   markers: true,
      scrub: 3,
    },
  });
  const heroOverlay = gsap.to(".hero .overlay", {
    duration: 5,
    ease: "none",
    height: "100%",
    scrollTrigger: {
      trigger: ".hero",
      scroller: "body",
      start: "top top", // When element starts at the top
      end: "bottom top",
      //   markers: true,
      scrub: 3,
    },
  });

  window.addEventListener("wheel", () => {
    heroAnimationSection.resume();
    heroOverlay.resume();

    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      heroAnimationSection.pause();
      heroOverlay.pause();
    }, 200);
  });

  //   gsap.from(".below-hero-text h2", {
  //     duration: 2,
  //     transform: "translateX(20%)",
  //     opacity: 0,
  //     stagger: 0.5,
  //     scrollTrigger: {
  //       trigger: ".below-hero-text",
  //       scroller: "body",
  //       start: "top top",
  //       end: "bottom top",
  //     },
  //   });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".below-hero-text h2", {
    duration: 2,
    stagger: 0.8,
    opacity: 0, // Move animation properties here
    x: "-20%", // For translateX, use "x" in GSAP
    scrollTrigger: {
      trigger: ".below-text-hero",
      scroller: "body",
      start: "top top",
      end: "bottom top",
    },
  });
};

appFunc();
