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

  //   Hotel Events
  //   gsap.from(".image-container", {
  //     duration: 5,
  //     transform: "scale(1.4, 1.4)",
  //     scrollTrigger: {
  //       trigger: ".hotel-times-event",
  //       scroller: "body",
  //       start: "top 60%",
  //       end: "bottom top",
  //       markers: true,
  //       transform: "scale(1, 1)",
  //     },
  //   });
  //   gsap.from(".hotel-events h2", {
  //     duration: 5,
  //     scale: 1.4,
  //     scrollTrigger: {
  //       trigger: ".hotel-times-event",
  //       scroller: "body",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: 2,
  //       markers: true, // Shows markers for debugging
  //     },
  //   });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hotel-times-event",
        scroller: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        markers: true, // Shows markers for debugging
      },
    })
    .from(
      ".hotel-events h2",
      {
        scale: 0.5,
      },
      0
    );
  //   gsap.from(".image-grid-1", {
  //     duration: 5,
  //     transform: "translateY(-20%)",
  //     scrollTrigger: {
  //       trigger: ".hotel-times-event",
  //       scroller: "body",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: 4,
  //       markers: true, // Shows markers for debugging
  //     },
  //   });
  //   gsap.from(".image-grid-2", {
  //     duration: 5,
  //     transform: "translateY(20%)",
  //     scrollTrigger: {
  //       trigger: ".hotel-times-event",
  //       scroller: "body",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: 4,
  //       markers: true, // Shows markers for debugging
  //     },
  //   });
  //   gsap.from(".image-grid-3", {
  //     duration: 5,
  //     transform: "translateY(-20%)",
  //     scrollTrigger: {
  //       trigger: ".hotel-times-event",
  //       scroller: "body",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: 4,
  //       markers: true, // Shows markers for debugging
  //     },
  //   });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hotel-times-event",
        start: "top bottom",
        end: "bottom top",
        scrub: 4,
      },
    })
    .to(
      ".image-grid-1",
      {
        y: "-20%",
      },
      0
    )
    .to(
      ".image-grid-2",
      {
        y: "20%",
      },
      0
    )
    .to(
      ".image-grid-3",
      {
        y: "-20%",
      },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hotel-times-event",
        scroller: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: 4,
        markers: true, // Shows markers for debugging
      },
    })
    .to(
      ".image-container",
      {
        //   position: "fixed",
        scale: 1,
        duration: 0,
      },
      0
    );

  //   gsap.from(".image-container", {
  //     duration: 5,
  //     scale: 1.4,
  //     scrollTrigger: {
  //       trigger: ".hotel-times-event",
  //       scroller: "body",
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: 4,
  //       markers: true, // Shows markers for debugging
  //     },
  //   });

  //   const stickySections = document.querySelectorAll('.fixed-sec');
  //        stickySections.forEach(sticky => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: ".image-container",
  //         start: "top bottom",
  //       },
  //     })
  //     .to(".image-container", {
  //       position: "fixed",
  //       duration: 0,
  //     });
  //  }),
};

appFunc();
