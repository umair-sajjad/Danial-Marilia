import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initEditorialParallax = () => {
  const editorialSection = document.querySelector(".editorial");
  const heading1 = document.querySelector(".editorial__text--1");
  const heading2 = document.querySelector(".editorial__text--2");
  const editorialParallax = document.querySelector(".editorial__parallax");
  const img1 = document.querySelector(".editorial__parallax--1--1");
  const img2 = document.querySelector(".editorial__parallax--2--1");
  const img3 = document.querySelector(".editorial__parallax--2--2");
  const img4 = document.querySelector(".editorial__parallax--3--1");
  const img5 = document.querySelector(".editorial__parallax--3--2");
  const img6 = document.querySelector(".editorial__parallax--5--1");
  const img7 = document.querySelector(".editorial__parallax--5--2");
  const text = document.querySelector(".editorial__parallax--4");

  if (
    !editorialSection ||
    !heading1 ||
    !heading2 ||
    !editorialParallax ||
    !img1 ||
    !img2 ||
    !img3 ||
    !img4 ||
    !img5 ||
    !img6 ||
    !img7 ||
    !text
  )
    return;

  const mm = gsap.matchMedia();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heading1,
      start: "top bottom",
      end: "bottom up",
      scrub: 1,
    },
  });

  tl.to(
    heading1,
    {
      x: -400,
      ease: "none",
    },
    0
  );

  tl.to(
    heading2,
    {
      x: -350,
      ease: "none",
    },
    0.125
  );

  mm.add("(min-width: 980px)", () => {
    gsap.to(img1, {
      yPercent: -65,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img2, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img3, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img4, {
      yPercent: -35,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img5, {
      yPercent: -135,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(text, {
      yPercent: -69,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img6, {
      yPercent: -57,
      ease: "none",
      scrollTrigger: {
        trigger: ".editorial__parallax--3",
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.set(img7, {
      y: -150,
    });

    gsap.to(img7, {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".editorial__parallax--3",
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });
  });

  mm.add("(max-width: 979px)", () => {
    gsap.to(img1, {
      yPercent: -65,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img2, {
      yPercent: -140,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img3, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img4, {
      yPercent: -120,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img5, {
      yPercent: -230,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(text, {
      yPercent: -190,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.set(img6, {
      y: -150,
    });

    gsap.to(img6, {
      yPercent: -80,
      ease: "none",
      scrollTrigger: {
        trigger: ".editorial__parallax--3",
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.set(img7, {
      y: -250,
    });

    gsap.to(img7, {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".editorial__parallax--3",
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });
  });

  mm.add("(max-width: 768px)", () => {
    gsap.to(img1, {
      yPercent: -75,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img2, {
      yPercent: -150,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img3, {
      yPercent: -70,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img4, {
      yPercent: -120,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img5, {
      yPercent: -230,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(text, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.set(img6, {
      y: -150,
    });

    gsap.to(img6, {
      yPercent: -75,
      ease: "none",
      scrollTrigger: {
        trigger: ".editorial__parallax--4",
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.set(img7, {
      y: -100,
    });

    gsap.to(img7, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ".editorial__parallax--4",
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });
  });

  mm.add("(max-width: 480px)", () => {
    gsap.to(img1, {
      yPercent: -75,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img2, {
      yPercent: -130,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img3, {
      yPercent: -35,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.set(img4, {
      y: -50,
    });

    gsap.to(img4, {
      yPercent: -60,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img5, {
      yPercent: -180,
      ease: "none",
      scrollTrigger: {
        trigger: editorialParallax,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img6, {
      yPercent: -60,
      ease: "none",
      scrollTrigger: {
        trigger: ".editorial__parallax--4",
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img7, {
      yPercent: -0,
      ease: "none",
      scrollTrigger: {
        trigger: ".editorial__parallax--4",
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });
  });
};

window.addEventListener("DOMContentLoaded", initEditorialParallax);
