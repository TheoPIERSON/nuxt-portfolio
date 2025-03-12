<template>
  <h2 :class="{ 'fade-in': isVisible }" class="text-6xl mt-20">Mon profil</h2>

  <section id="about" class="grid md:flex place-items-center md:w-screen">
    <NuxtImg
      data-aos="fade-left"
      id="profilePic"
      class="m-2 md:hidden rounded-xl"
      src="profilepic.jpeg"
      alt="photo de Theo Pierson Dévelppeur Web à Lestrem/Lille"
      width="300px"
    />
    <!--TODO Faire 3 colonnes au lieu de 3 lignes avec les decriptions + Ajouter des animations comme pour les logos de
    stack -->
    <div class="p-4 md:p-10 md:w-4/5" id="content" data-aos="fade-right">
      <h3 class="font-medium text-xl">Parcours scolaire</h3>
      <p class="leading-tight mb-8">
        Après une prépa Art et Design et une immersion dans l'univers du tatouage, , j'ai décidé de me réorienter vers
        un domaine qui allie ma passion pour l'informatique et mon goût pour l'innovation et la créativité : le
        développement web. Afin d'acquérir rapidement les compétences nécessaires, j'ai opté pour des formations
        accélérées et une alternance, ce qui m'a permis d'obtenir en seulement deux ans un titre de Concepteur
        Développeur d'Applications (CDA). Aujourd'hui, fort de cette expérience et de ma licence, je suis prêt à relever
        de nouveaux défis dans le monde du développement, en alliant créativité, technique et innovation.
      </p>
      <h3 class="font-medium text-xl">Début de parcours professionnel</h3>
      <p class="mt-1 mb-8 leading-tight">
        Mes débuts en développement ont été marqués par des projets explorant diverses technologies front et back-end.
        Aujourd'hui, je me spécialise dans des outils modernes comme Vue.js, NuxtJs et Angular pour créer des interfaces
        utilisateur fluides et engageantes. En parallèle, je développe des backends solides en utilisant Java Spring
        Boot, souvent conteneurisés avec Docker pour une intégration efficace.
      </p>
      <h3 class="font-medium text-xl">Expériences professionnelles</h3>

      <p class="leading-tight">
        En tant que développeur web, j'ai acquis une expérience significative au fil des projets, toujours animé par la
        volonté de répondre aux besoins spécifiques de mes clients et de leur offrir des solutions sur mesure. Mon
        engagement réside dans la création de plateformes performantes et une poussée de ma créativité au maximum, afin
        de permettre à mes clients d'améliorer leur présence en ligne, d'optimiser leurs processus ou de simplifier la
        gestion de leurs activités quotidiennes.
      </p>
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
