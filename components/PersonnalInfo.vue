<template>
  <header class="grid place-items-center gap-2">
    <h1 class="text-5xl mt-24 text-center">
      Développeur Web - <span class="font-CourierPrime text-6xl font-bold">Freelance</span>
    </h1>
    <h2 class="text-4xl text-center mt-2">Développeur Angular | Vue | Springboot à Lille</h2>

    <h3 class="text-4xl flex justify-center items-center mt-2">
      <Icon name="majesticons:map-marker" />Lille | Lestrem
    </h3>
    <p class="font-CourierPrime text-xl mt-10 text-center">Création d'application web, site vitrine, landing page.</p>
    <p class="font-CourierPrime text-xl text-center">Prêt à vous aider à résoudre votre problème !</p>
    <div class="flex m-2">
      <button class="btn-hover m-2 p-1 border-b-2 border-emerald-800 font-CourierPrime">Voir mes créations</button>
      <button class="btn-hover m-2 p-1 border-b-2 border-emerald-800 font-CourierPrime">Me contacter</button>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

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
</style>
