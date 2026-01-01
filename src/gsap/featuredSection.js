import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initFeaturedParallax = () => {
  const featuredSection = document.querySelector(".featured__parallax");

  const videoCol1 = document.querySelector(".video__wrapper__container--c1");
  const videoCol2 = document.querySelector(".video__wrapper__container--c2");
  const videoCol3 = document.querySelector(".video__wrapper__container--c3");

  if (!featuredSection) return;
  if (!videoCol1) return;
  if (!videoCol2) return;
  if (!videoCol3) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 980px)", () => {
    //featured section
    gsap.to(".featured__parallax__img:first-child", {
      y: -500,
      ease: "none",
      scrollTrigger: {
        trigger: featuredSection,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(".featured__parallax__img:last-child", {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: featuredSection,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });
  });

  mm.add("(max-width: 979px)", () => {
    //featured section
    gsap.to(".featured__parallax__img:first-child", {
      y: -350,
      ease: "none",
      scrollTrigger: {
        trigger: featuredSection,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(".featured__parallax__img:last-child", {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: featuredSection,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });
  });

  mm.add("(max-width: 480px)", () => {
    //featured section
    gsap.to(".featured__parallax__img:first-child", {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: featuredSection,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });

    gsap.to(".featured__parallax__img:last-child", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: featuredSection,
        start: "top bottom",
        end: "bottom up",
        scrub: 1,
      },
    });
  });
};

window.addEventListener("DOMContentLoaded", initFeaturedParallax);
