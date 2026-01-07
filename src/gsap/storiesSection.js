import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initStoriesParallax = () => {
  const wrapper = document.querySelector(".stories");
  const img1 = document.querySelector(".stories__parallax--1");
  const img2 = document.querySelector(".stories__parallax--2");

  if (!wrapper || !img1 || !img2) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 480px)", () => {
    gsap.to(img1, {
      y: -650,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(img2, {
      y: -250,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });
  });
};

window.addEventListener("DOMContentLoaded", initStoriesParallax);
