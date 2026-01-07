import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initVideoParallax = () => {
  const wrapper = document.querySelector(".video__wrapper");
  const container = document.querySelector(".video__wrapper__container");
  const col1 = document.querySelector(".video__wrapper__container--c1");
  const col2 = document.querySelector(".video__wrapper__container--c3");

  if (!wrapper || !container || !col1 || !col2) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  });

  tl.to(col1, { y: 160, ease: "none" }, 0).to(
    col2,
    { y: -160, ease: "none" },
    0
  );

  tl.to(container, { scale: 2.4, ease: "none" }, 0.125);
};

window.addEventListener("DOMContentLoaded", initVideoParallax);
