<template>
  <h2 id="contact" :class="{ 'fade-in': isVisible }" class="text-5xl mt-20">Mes infos de contact</h2>
  <footer class="grid md:flex mt-20 pb-32">
    <div class="text-center w-full grid">
      <h3 class="pb-2">Vous souhaitez me parler d'un projet ou d'une opportunité ?</h3>
      <p>
        <a href="mailto:thheopierson@gmail.com" class="border-b">thheopierson@gmail.com</a>
      </p>
    </div>
    <div class="text-center w-full grid place-items-center">
      <h3 class="pb-2">Contactez moi via mes réseaux.</h3>
      <div>
        <ul class="flex mr-36 w-full justify-around">
          <li class="p-1 transform transition-transform duration-300 hover:rotate-45">
            <a href="mailto:thheopierson@gmail.com"> <Icon name="fontisto:linkedin" class="w-10" size="100px" /></a>
          </li>
          <li class="p-1 transform transition-transform duration-300 hover:rotate-45">
            <a href="mailto:thheopierson@gmail.com"> <Icon name="fontisto:instagram" class="w-10" size="100px" /></a>
          </li>
          <li class="p-1 transform transition-transform duration-300 hover:rotate-45">
            <a href="mailto:thheopierson@gmail.com"> <Icon name="fontisto:github" class="w-10" size="100px" /></a>
          </li>
          <li class="p-1 transform transition-transform duration-300 hover:rotate-45">
            <a href="mailto:thheopierson@gmail.com"> <Icon name="fontisto:google" class="w-10" size="100px" /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
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
