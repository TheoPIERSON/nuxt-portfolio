<template>
  <p :class="{ 'fade-in-delayed': isVisible }" class="text-xl mt-20">
    Scroll Down <Icon name="solar:arrow-to-down-left-broken" />
  </p>
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
</script>

<style scoped>
.fade-in-delayed {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease-in-out 0.6s, transform 1s ease-in-out 0.6s; /* Délai de 0.6s */
}
p {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
