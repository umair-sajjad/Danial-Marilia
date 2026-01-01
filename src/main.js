import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sass/main.scss";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

const toggleNav = document.getElementById("navToggler");
const nav = document.getElementById("navMenu");

toggleNav.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

//scroll
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
});
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
