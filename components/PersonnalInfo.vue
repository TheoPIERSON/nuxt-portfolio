<template>
  <header id="header" class="grid place-items-center gap-2 pt-20">
    <h1 :class="{ 'fade-in': isVisible }" class="text-5xl mt-24 text-center">
      Développeur Web - <span class="font-CourierPrime text-6xl font-bold">Freelance</span>
    </h1>
    <h2 :class="{ 'fade-in': isVisible }" class="text-4xl text-center mt-2">Développeur Java | TypeScript à Lille</h2>

    <h3 :class="{ 'fade-in': isVisible }" class="text-4xl flex justify-center items-center mt-2">
      <Icon name="majesticons:map-marker" />Lille | Lestrem
    </h3>
    <p :class="{ 'fade-in-delayed': isVisible }" class="font-CourierPrime text-xl mt-10 text-center">
      Création d'application web, site vitrine, landing page.
    </p>
    <p :class="{ 'fade-in-delayed': isVisible }" class="font-CourierPrime text-xl text-center">
      Prêt à vous aider à résoudre votre problème !
    </p>
    <div :class="{ 'fade-in-delayed': isVisible }" class="flex m-2">
      <a
        class="btn-hover m-2 p-1 border-b-2 border-emerald-800 font-CourierPrime"
        @click.prevent="scrollToSection('portfolio')"
        href="#portfolio"
      >
        Voir mes créations
      </a>
      <a
        class="btn-hover m-2 p-1 border-b-2 border-emerald-800 font-CourierPrime"
        @click.prevent="scrollToSection('contact')"
        href="#contact"
        >Me contacter</a
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isVisible = ref(false);

onMounted(() => {
  // Attendre que la page soit chargée pour ajouter l'animation
  setTimeout(() => {
    isVisible.value = true;
  }, 200); // Délai avant de déclencher l'animation
});
const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    // Calculer la position de la section moins l'offset
    const offset = -100; // Ajuste cette valeur selon tes besoins
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset + offset;

    // Utiliser scrollTo pour défiler vers la position avec l'offset et un défilement fluide
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  }
};
</script>

<style scoped>
.btn-hover {
  position: relative;
  overflow: hidden;
  background: transparent;
  z-index: 1;
  transition: color 0.4s ease;
}

.btn-hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #04784e; /* Couleur vert émeraude */
  z-index: -1;
  transition: left 0.4s ease;
}

.btn-hover:hover::before {
  left: 0;
}

.btn-hover:hover {
  color: white;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.fade-in-delayed {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease-in-out 0.6s, transform 1s ease-in-out 0.6s; /* Délai de 0.6s */
}

h1,
h2,
h3 {
  opacity: 0;
  transform: translateY(20px);
}
p,
div {
  opacity: 0;
  transform: translateY(20px);
}
</style>
