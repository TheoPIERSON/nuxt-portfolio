<template>
  <div class="w-screen font-CourierPrime">
    <nav class="bg-neutral-900 w-full px-8 py-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-xl text-emerald-500 flex items-center"> Theo PIERSON </NuxtLink>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
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
          <NuxtLink @click="toggleNav" to="/" class="btn duration-200"> Accueil </NuxtLink>
        </li>
        <li>
          <NuxtLink @click="toggleNav" to="/about" class="btn duration-200"> Compétences </NuxtLink>
        </li>
        <li>
          <NuxtLink @click="toggleNav" to="/" class="btn duration-200"> Portfolio </NuxtLink>
        </li>
        <li>
          <NuxtLink @click="toggleNav" to="/about" class="btn duration-200"> Contact </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router"; // Importer useRoute pour accéder à la route actuelle

export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    const route = useRoute(); // Utiliser useRoute pour connaître la route active

    return { showMenu, toggleNav, route }; // Retourner la route
  },
};
</script>
