import gsap from "gsap";

const initInstagramSlider = () => {
  const slider = document.querySelector(".instagram__content__wrapper__slider");
  const btnLeft = document.querySelector(
    ".instagram__content__wrapper__buttons--left"
  );
  const btnRight = document.querySelector(
    ".instagram__content__wrapper__buttons--right"
  );

  if (!slider || !btnLeft || !btnRight) return;

  let currentX = 0;

  const getMoveDistance = () => {
    const isMobile = window.innerWidth <= 768;
    const vwValue = isMobile ? 65 : 20;
    const gap = 16;

    // Calculate actual pixel value of the move
    return window.innerWidth * (vwValue / 100) + gap;
  };

  btnRight.addEventListener("click", () => {
    const moveAmount = getMoveDistance();

    const maxScroll = -(slider.scrollWidth - slider.parentElement.offsetWidth);

    currentX -= moveAmount;

    if (currentX < maxScroll) currentX = maxScroll;

    gsap.to(slider, {
      x: currentX,
      duration: 0.8,
      ease: "power2.out",
    });
  });

  btnLeft.addEventListener("click", () => {
    const moveAmount = getMoveDistance();

    currentX += moveAmount;

    if (currentX > 0) currentX = 0;

    gsap.to(slider, {
      x: currentX,
      duration: 0.8,
      ease: "power2.out",
    });
  });
};

window.addEventListener("DOMContentLoaded", initInstagramSlider);
