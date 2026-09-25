import gsap from "gsap";

const links = document.querySelectorAll(".portfolio__content__nav__link");
const portfolioImg = document.getElementById("portfolio-img");

const originalSrc = portfolioImg.src;

links.forEach((link) => {
  const hoverSrc = link.querySelector("img").src;

  link.addEventListener("mouseenter", () => {
    gsap.killTweensOf(portfolioImg);

    portfolioImg.src = hoverSrc;

    gsap.fromTo(
      portfolioImg,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 0.8,
        ease: "none",
      }
    );
  });

  link.addEventListener("mouseleave", () => {
    gsap.killTweensOf(portfolioImg);

    portfolioImg.src = originalSrc;
    gsap.to(portfolioImg, {
      scale: 1,
    });
  });
});
