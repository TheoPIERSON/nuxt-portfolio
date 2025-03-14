<template>
  <h2 :class="{ 'fade-in': isVisible }" class="text-5xl mt-20">Mon profil</h2>
  <section class="grid gap-4 md:w-auto md:flex justify-around">
    <NuxtImg
      data-aos="fade-left"
      id="profilePic"
      class="m-2 md:hidden rounded-xl ml-4"
      src="profilepic.jpeg"
      alt="photo de Theo Pierson Dévelppeur Web à Lestrem/Lille"
      width="300px"
    />
    <!--TODO Faire 3 colonnes au lieu de 3 lignes avec les decriptions + Ajouter des animations comme pour les logos de
    stack -->
    <div class="flip-card md:m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front grid place-items-center text-9xl border-2 border-black rounded-lg">
          <Icon name="game-icons:spell-book" />
          <h3 class="font-semibold text-xl">Parcours scolaire</h3>
        </div>
        <div class="flip-card-back border-2 border-black rounded-lg">
          <p class="title">Parcours scolaire</p>
          <p class="text-center p-4">
            Issus d'une prépa Art et Design et du tatouage, j'ai décidé de me professionnaliser dans un domaine qui
            allie ma passion pour l'informatique et mon goût pour l'innovation et la créativité : le développement web.
            Afin d'acquérir rapidement les compétences nécessaires, j'ai opté pour des formations accélérées et une
            alternance, ce qui m'a permis d'obtenir en seulement deux ans un titre de Concepteur Développeur
            d'Applications (CDA).
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card md:m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front grid place-items-center text-9xl border-2 border-black rounded-lg">
          <Icon name="hugeicons:dumbbell-03" />
          <h3 class="font-semibold text-xl">Début de parcours professionnel</h3>
        </div>
        <div class="flip-card-back border-2 border-black rounded-lg">
          <p class="title">Début de parcours professionnel</p>
          <p class="text-center p-4">
            Mes débuts en développement ont été marqués par des projets explorant diverses technologies front et
            back-end. Aujourd'hui, je me spécialise dans des outils modernes comme Vue.js, NuxtJs et Angular pour créer
            des interfaces utilisateur fluides et engageantes. En parallèle, je développe des backends solides en
            utilisant Java Spring Boot, souvent conteneurisés avec Docker pour une intégration efficace.
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card md:m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front grid place-items-center text-9xl border-2 border-black rounded-lg">
          <Icon name="game-icons:tie" />
          <h3 class="font-semibold text-xl">Expérience professionelle</h3>
        </div>
        <div class="flip-card-back border-2 border-black rounded-lg">
          <p class="title">Expérience professionelle</p>
          <p class="text-center p-4">
            En tant que développeur web, j'ai acquis une expérience significative au fil des projets, toujours animé par
            la volonté de répondre aux besoins spécifiques de mes clients et de leur offrir des solutions sur mesure.
            Mon engagement réside dans la création de plateformes performantes et une poussée de ma créativité au
            maximum, afin de permettre à mes clients d'améliorer leur présence en ligne, d'optimiser leurs processus ou
            de simplifier la gestion de leurs activités quotidiennes.
          </p>
        </div>
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
<style scoped>
/* From Uiverse.io by joe-watson-sbf */
.flip-card {
  background-color: transparent;
  width: 26rem;
  height: 32rem;
  perspective: 1000px;
  font-family: sans-serif;
}
@media (max-width: 768px) {
  .flip-card {
    width: 21rem /* 32px */;
    height: 23rem;
  }
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
