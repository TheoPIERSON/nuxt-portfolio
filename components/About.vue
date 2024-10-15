<template>
  <h2 class="text-emerald-500 text-4xl text-center mt-10 md:mt-32 font-semibold m-2">Mon profil</h2>

  <section class="grid md:flex place-items-center">
    <div class="font-CourierPrime p-4 md:p-10 md:w-4/5">
      <p class="leading-tight">
        En tant que développeur web, j'ai acquis une expérience significative au fil des projets, toujours animé par la
        volonté de répondre aux besoins spécifiques de mes clients et de leur offrir des solutions sur mesure. Mon
        engagement réside dans la création de plateformes robustes et performantes, qui permettent à mes clients
        d'améliorer leur présence en ligne, d'optimiser leurs processus ou de simplifier la gestion de leurs activités
        quotidiennes.
      </p>
      <p class="mt-2 mb-2 leading-tight">
        Mes débuts en développement ont été marqués par des projets explorant diverses technologies front et back-end.
        Aujourd'hui, je me spécialise dans des outils modernes comme Vue.js, NuxtJs et Angular pour créer des interfaces
        utilisateur fluides et engageantes. En parallèle, je développe des backends solides en utilisant Java Spring
        Boot, souvent conteneurisés avec Docker pour une intégration efficace.
      </p>
      <p class="leading-tight">
        Dans un souci constant de qualité, j'ai perfectionné mes compétences en TypeScript, ce qui renforce la fiabilité
        et la maintenabilité de mes projets grâce à son système de typage strict. Toujours à la recherche des dernières
        innovations dans les frameworks JavaScript et les bonnes pratiques de développement, afin de livrer des projets
        à la fois élégants et fonctionnels.
      </p>
    </div>
    <NuxtImg
      class="m-2 md:m-20"
      src="profile-pic.png"
      alt="photo de Theo Pierson Dévelppeur Web à Lestrem/Lille"
      width="300px"
    />
  </section>
</template>

<script setup lang="ts"></script>
