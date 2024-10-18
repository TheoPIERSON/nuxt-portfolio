import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 1300, // Durée des animations
      easing: "ease-in-out", // Type d'animation
      once: true, // Animation ne se joue qu'une seule fois
    });
  }
});
