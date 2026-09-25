import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initStoriesParallax = () => {
  const wrapper = document.querySelector(".stories");
  const img1 = document.querySelector(".stories__parallax--1");
  const img2 = document.querySelector(".stories__parallax--2");
  const slider = document.querySelector(".stories__slider__wrapper");

  const clone = slider.innerHTML;
  slider.insertAdjacentHTML("beforeend", clone);

  const pixelsPerSecond = 50;
  const totalWidth = slider.scrollWidth / 2;
  const duration = totalWidth / pixelsPerSecond;

  if (!wrapper || !img1 || !img2 || !slider) return;

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

  const marquee = gsap.fromTo(
    slider,
    { x: 0 },
    {
      x: -totalWidth,
      ease: "none",
      duration: duration,
      repeat: -1,
      onReverseComplete: () =>
        marquee.totalTime(marquee.rawTime() + marquee.duration() * 100),
    }
  );

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newWidth = slider.scrollWidth / 2;
      marquee.vars.x = -newWidth;
      marquee.vars.duration = newWidth / pixelsPerSecond;
      marquee.invalidate().restart();
    }, 250);
  });
};
window.addEventListener("DOMContentLoaded", initStoriesParallax);
