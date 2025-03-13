<template>
  <h2 :class="{ 'fade-in': isVisible }" class="text-5xl mt-20">Mes compétences</h2>

  <section id="abilities" class="grid mt-10 mb-7">
    <div class="md:grid w-full">
      <h3 class="text-2xl font-semibold mb-5 p-1 md:p-10">Développement Frontend</h3>
      <div class="md:flex justify-center" id="cards" data-aos="fade-left">
        <TechCard />
      </div>
      <h3 class="w-3/4 text-2xl font-semibold mb-5 p-1 md:p-10">Backend, Base de données et DevOps</h3>
      <div class="md:flex justify-center" id="cards" data-aos="fade-right">
        <TechCardBackend />
      </div>
    </div>
  </section>
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
<style>
.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
</style>
