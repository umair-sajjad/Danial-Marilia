import gsap from "gsap";

const initLoader = () => {
  window.scrollTo(0, 0);

  const loader = document.getElementById("loader");
  const masterWrap = document.getElementById("master-wrap");
  const counterNum = document.querySelector(".loader__content__counter__num");
  const loaderContent = document.querySelector(".loader__content");

  document.body.classList.add("is-loading");

  const counter = { value: 0 };
  const tl = gsap.timeline({
    onComplete: () => {
      document.body.classList.remove("is-loading");
      loader.style.display = "none";
      // If you have any ScrollTrigger animations, refresh them here:
      // ScrollTrigger.refresh();
    },
  });

  // 1. Fade in and Counter (Happens first)
  tl.to(loaderContent, {
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
  });

  tl.to(
    counter,
    {
      value: 100,
      duration: 2,
      ease: "none",
      onUpdate: () => {
        counterNum.innerHTML = Math.round(counter.value);
      },
    },
    "<",
  );

  // 2. THE REVEAL ANIMATION
  // We move the loader UP
  tl.to(
    loader,
    {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
    },
    "+=0.2",
  );

  // We reveal the webpage by sliding it slightly "into" place
  // without changing its final transform values
  tl.from(
    masterWrap,
    {
      y: 150, // Starts 150px down
      duration: 1.2,
      ease: "power4.inOut",
    },
    "<",
  ); // Starts exactly when the loader starts moving
};

window.addEventListener("load", initLoader);
