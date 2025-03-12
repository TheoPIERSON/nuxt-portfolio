<template>
  <section id="portfolio">
    <h2 :class="{ 'fade-in': isVisible }" class="text-6xl mt-20 mb-10">Mon portfolio</h2>

    <!-- Container des images et texte -->
    <div class="w-full flex flex-col md:flex-row p-4 my-10" data-aos="fade-left">
      <!-- Container des images (50% en desktop) -->
      <div class="relative w-full md:w-1/2" id="Onyx Institut">
        <NuxtImg
          alt="Capture d'écran du site Onyx Institut"
          src="onyxinstitut.png"
          class="relative top-0 left-0 w-full transition-opacity duration-300"
        />
        <NuxtImg
          alt="Capture d'écran du site Onyx Institut côté admin"
          src="onyx2.png"
          class="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <!-- Container du texte (50% en desktop) -->
      <div class="w-full md:w-1/2 flex items-center">
        <div class="pl-8">
          <h3 class="font-semibold text-lg">Onyx Institut</h3>
          <p class="mt-5">Plateforme d'aide à la gestion d'une TPE pour un institut de prothésiste ongulaire.</p>
          <p>
            L' application est séparée en deux parties, un site vitrine permettant aux clients de créer leur compte et
            réserver un rendez-vous et une application admin permettant à la gérante de gérer les rendez-vous, les
            comptes clients, les prestations proposées et les paiement reçus.
          </p>
          <p class="font-medium mt-10 mb-5">Stack utilisée:</p>
          <p class="flex">
            <NuxtPicture alt="Icone Angular" src="angular-icon.svg" width="30px" class="m-1" /><NuxtPicture
              alt="Icone TypeScript"
              src="typescript-icon.svg"
              width="30px"
              class="m-1"
            />
            <NuxtPicture alt="Icone Java" src="java.svg" width="30px" class="m-1" />
            <NuxtPicture alt="Icone Spring Boot" src="spring-icon.svg" width="30px" class="m-1" />
            <NuxtPicture alt="Icone PostgreSQL" src="postgresql.svg" width="30px" class="m-1" />
          </p>
        </div>
      </div>
    </div>
    <!-- Fin du Container des images et texte -->

    <!-- Container des images et texte -->
    <div class="w-full flex flex-col md:flex-row p-4 my-10" data-aos="fade-right">
      <!-- Container du texte (50% en desktop) -->
      <div class="w-full md:w-1/2 flex items-center">
        <div class="pl-8">
          <h3 class="font-semibold text-lg">Mas Photo</h3>
          <p class="mt-5">Portfolio simple et animé pour un mannequin.</p>
          <p class="mb-5">
            Ce portfolio permet à un mannequin de présenter ses photos et mettre en avant son travail ainsi que de se
            présenter rapidement en affichant ses mensurations.
          </p>
          <p class="font-medium mt-10 mb-5">Stack utilisée:</p>
          <p class="flex">
            <NuxtPicture alt="Icone Nuxt" src="nuxt-icon.svg" width="30px" class="m-1" />
            <NuxtPicture alt="Icone TypeScript" src="typescript-icon.svg" width="30px" class="m-1" />
            <NuxtPicture alt="Icone Tailwind" src="tailwindcss-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
      </div>
      <!-- Container des images (50% en desktop) -->
      <div class="relative w-full md:w-1/2" id="Onyx Institut">
        <NuxtImg
          alt="Capture d'écran du site Model Book"
          src="model-book.png"
          class="relative top-0 left-0 w-full transition-opacity duration-300"
        />
        <NuxtImg
          alt="Capture d'écran du site Mas Photo"
          src="model-book2.png"
          class="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
    <!-- Fin du Container des images et texte -->

    <!-- Container des images et texte -->
    <div class="w-full flex flex-col md:flex-row p-4 my-10" data-aos="fade-left">
      <!-- Container des images (50% en desktop) -->
      <div class="relative w-full md:w-1/2" id="Onyx Institut">
        <NuxtImg
          alt="Capture d'écran du site UFC VS"
          src="ufc-vs.png"
          class="relative top-0 left-0 w-full transition-opacity duration-300"
        />
      </div>
      <!-- Container du texte (50% en desktop) -->
      <div class="w-full md:w-1/2 flex items-center">
        <div class="pl-8">
          <h3 class="font-semibold text-lg">UFC Vs</h3>
          <p class="mt-5">Mini jeu sur le thème de l'UFC.</p>
          <p class="mb-5">
            Mini-jeu web sous forme de quizz mettant en scène deux combattants de l'UFC. Le joueur doit choisir quel
            combattant à gagné le combat afin de tester sa culture de l'organisation.
          </p>
          <p class="font-medium mt-10 mb-5">Stack utilisée:</p>
          <p class="flex">
            <NuxtPicture alt="Icone Nuxt" src="nuxt-icon.svg" width="30px" class="m-1" />
            <NuxtPicture alt="Icone TypeScript" src="typescript-icon.svg" width="30px" class="m-1" />
            <NuxtPicture alt="Icone Tailwind" src="tailwindcss-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
      </div>
    </div>
    <!-- Fin du Container des images et texte -->

    <!-- Container des images et texte -->
    <div class="w-full flex flex-col md:flex-row p-4 my-10" data-aos="fade-right">
      <!-- Container du texte (50% en desktop) -->
      <div class="w-full md:w-1/2 flex items-center">
        <div class="pl-8">
          <h3 class="font-semibold text-lg">Do Bronx MMA</h3>
          <p class="mt-5">Site vitrine pour une association sportive.</p>
          <p class="mb-5">
            Site vitrine pour une association sportive de MMA. Le site permet de présenter l'association, les cours et
            les horaires tout en mettant en avant les valeurs de l'association ainsi que le palmarès des coaches.
          </p>
          <p class="font-medium mt-10 mb-5">Stack utilisée:</p>
          <p class="flex">
            <NuxtPicture alt="Icone Nuxt" src="nuxt-icon.svg" width="30px" class="m-1" />
            <NuxtPicture alt="Icone TypeScript" src="typescript-icon.svg" width="30px" class="m-1" />
            <NuxtPicture alt="Icone Tailwind" src="tailwindcss-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
      </div>
      <!-- Container des images (50% en desktop) -->
      <div class="relative w-full md:w-1/2" id="Onyx Institut">
        <NuxtImg
          alt="Capture d'écran du site Do Bronx MMA"
          src="dobronx.png"
          class="relative top-0 left-0 w-full transition-opacity duration-300"
        />
        <NuxtImg
          alt="Capture d'écran du site Do Bronx MMA"
          src="dobronx2.png"
          class="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
    <!-- Fin du Container des images et texte -->

    <!-- Container des images et texte -->
    <div class="w-full flex flex-col md:flex-row p-4 my-10" data-aos="fade-left">
      <!-- Container des images (50% en desktop) -->
      <div class="relative w-full md:w-1/2" id="Onyx Institut">
        <NuxtImg
          alt="Capture d'écran du site Chef Pro 360"
          src="chefprodesk.png"
          class="relative top-0 left-0 w-full transition-opacity duration-300"
        />
        <NuxtImg
          alt="Capture d'écran du site Chef Pro 360"
          src="chefpro2.png"
          class="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <!-- Container du texte (50% en desktop) -->
      <div class="w-full md:w-1/2 flex items-center">
        <div class="pl-8">
          <h3 class="font-semibold text-lg">Chef Pro 360</h3>
          <p class="mt-5">Landing page mettant en avant un produit.</p>
          <p class="mb-5">
            Cette landing page a pour but de mettre en avant un nouveau type de couteau de cuisine. La page permet de
            voir une description du produit, de s'inscrire pour être sur liste d'attente également de voir des avis de
            personnes utilisant déjà le produit.
          </p>
          <p class="font-medium mt-10 mb-5">Stack utilisée:</p>
          <p class="flex">
            <NuxtPicture alt="Icone Next" src="nextjs-icon.svg" width="30px" class="m-1" />
            <NuxtPicture alt="Icone TypeScript" src="typescript-icon.svg" width="30px" class="m-1" />
            <NuxtPicture alt="Icone Tailwind" src="tailwindcss-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
      </div>
    </div>
    <!-- Fin du Container des images et texte -->
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
