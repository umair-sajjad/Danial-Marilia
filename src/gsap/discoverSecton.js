import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initDiscoverScaling = () => {
  const wrapper = document.querySelector(".discover");
  const cards = gsap.utils.toArray(".discover__card");

  if (!wrapper || cards.length === 0) return;

  const totalCardShift = (cards.length - 1) * 100;

  gsap.fromTo(
    cards[0],
    { scale: 1 },
    {
      scale: 0.94,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top 30%",
        end: "top top",
        scrub: true,
      },
    }
  );

  const mainTl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: () => `+=${totalCardShift}%`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  cards.forEach((card, index) => {
    if (index > 0) {
      const label = `step${index}`;

      mainTl.fromTo(
        card,
        { y: "100vh" },
        { y: "0%", ease: "none", duration: 1 },
        label
      );

      mainTl.fromTo(
        card,
        { scale: 1 },
        {
          scale: 0.94,
          ease: "none",
          duration: 0.3,
        },
        `${label}+=0.7`
      );
    }
  });

  ScrollTrigger.create({
    trigger: wrapper.parentNode,
    start: () => `bottom bottom`,
    end: () => `bottom top`,
    scrub: true,
    animation: gsap.to(wrapper, {
      scale: 0.7,
      ease: "none",
    }),
    invalidateOnRefresh: true,
  });
};
window.addEventListener("DOMContentLoaded", initDiscoverScaling);
