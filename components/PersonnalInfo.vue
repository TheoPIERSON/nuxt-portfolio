<template>
  <main id="header" class="grid gap-3 pt-20 md:mb-20">
    <h1 :class="{ 'fade-in': isVisible }" class="text-5xl md:text-6xl">
      Hello, moi c'est Theo <Icon name="la:hand-peace" />
    </h1>
    <h2 :class="{ 'fade-in': isVisible }" class="text-2xl md:text-4xl mt-10">------ Développeur Web</h2>
    <p :class="{ 'fade-in-delayed': isVisible }" class="text-lg mt-10">
      Salut, je suis un Développeur Web basé en France et <br />
      je suis très passionné et dédié à mon travail.
    </p>

    <div :class="{ 'fade-in-delayed': isVisible }" class="flex mt-10">
      <a
        class="bg-zinc-800 p-4 px-5 text-xl text-white rounded-lg mr-8 hover:bg-white hover:text-black border-2 border-black"
        @click.prevent="scrollToSection('contact')"
        href="#contact"
      >
        Infos de contact
      </a>
      <a
        class="bg-zinc-800 p-4 px-5 text-xl text-white rounded-lg hover:bg-white hover:text-black border-2 border-black"
        href="/CV-TheoPierson.pdf"
        download="CV-TheoPierson.pdf"
        >Télécharger CV</a
      >
    </div>
  </main>
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
