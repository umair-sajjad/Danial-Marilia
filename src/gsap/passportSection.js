import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const passportParallax = () => {
  const images = document.querySelectorAll(
    ".passport__content__month__img--img"
  );

  if (images.length === 0) return;

  images.forEach((img) => {
    gsap.fromTo(
      img,
      { y: -25 },
      {
        y: 25,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom up",
          scrub: 1,
        },
      }
    );
  });
};

window.addEventListener("DOMContentLoaded", passportParallax);
