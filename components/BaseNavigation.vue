<template>
  <div class="w-screen font-CourierPrime">
    <nav class="bg-neutral-900 w-full px-8 py-6 mx-auto md:flex md:justify-between md:items-center fixed z-10">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-xl text-emerald-500 flex items-center"> Theo PIERSON </NuxtLink>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current mr-4">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-4 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 text-md"
      >
        <li>
          <NuxtLink
            @click.prevent="scrollToSection('header')"
            @click="toggleNav"
            href="#header"
            class="btn duration-200"
          >
            Accueil
          </NuxtLink>
        </li>
        <li>
          <a
            @click.prevent="scrollToSection('abilities')"
            @click="toggleNav"
            href="#abilities"
            class="btn duration-200"
          >
            Compétences
          </a>
        </li>
        <li>
          <a
            @click.prevent="scrollToSection('portfolio')"
            @click="toggleNav"
            href="#portfolio"
            class="btn duration-200"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a @click.prevent="scrollToSection('contact')" @click="toggleNav" href="#contact" class="btn duration-200">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Fonction pour faire défiler la page jusqu'à une section spécifique
const showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);

// Fonction qui prend l'ID de la section et fait défiler jusqu'à cette section avec un décalage
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
