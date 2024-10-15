<template>
  <section>
    <h2 class="text-emerald-500 text-4xl text-center mt-2 font-semibold m-2 mb-10">Mon Portfolio</h2>
    <div class="font-CourierPrime grid grid-cols-[1fr,2fr]" id="grille">
      <p class="w-1/2 text-neutral-300">J'ai réalisé ce portfolio essentiellement avec Nuxt, Angular ou NextJs</p>
      <div class="w-full grid grid-cols-2 gap-2">
        <div class="relative w-[400px]">
          <NuxtImg
            src="onyxinstitut.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-full transition-opacity duration-300"
          />
          <NuxtImg
            src="onyx2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          <NuxtLink to="https://theopierson.fr" class="text-center border-b border-neutral-400">Onyx Insitut</NuxtLink>
          <p class="flex">
            <NuxtImg src="angular-icon.svg" width="30px" class="m-1" /><NuxtImg
              src="spring-icon.svg"
              width="30px"
              class="m-1"
            /><NuxtImg src="java.svg" width="30px" class="m-1" /><NuxtImg
              src="postgresql.svg"
              width="30px"
              class="m-1"
            /><NuxtImg src="typescript-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
        <div class="relative w-[400px]">
          <!-- Première image visible par défaut -->
          <NuxtImg
            src="dobronx.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-full transition-opacity duration-300"
          />
          <!-- Deuxième image visible au survol -->
          <NuxtImg
            src="dobronx2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          <NuxtLink to="https://theopierson.fr" class="text-center border-b border-neutral-400">Do Bronx MMA</NuxtLink>
          <p class="flex">
            <NuxtImg src="nuxt-icon.svg" width="30px" class="m-1" />
            <NuxtImg src="typescript-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
        <div class="relative w-[400px]">
          <NuxtImg
            src="chefprodesk.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-full transition-opacity duration-300"
          />
          <NuxtImg
            src="chefpro2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
          <NuxtLink to="https://theopierson.fr" class="text-center border-b border-neutral-400">Chef Pro 360</NuxtLink>
          <p class="flex">
            <NuxtImg src="nextjs-icon.svg" width="30px" class="m-1" /><NuxtImg
              src="typescript-icon.svg"
              width="30px"
              class="m-1"
            />
          </p>
        </div>
        <div class="relative w-[400px]">
          <NuxtImg
            src="mighty.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-full transition-opacity duration-300"
          />
          <NuxtImg
            src="mighty2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          <NuxtLink to="https://theopierson.fr" class="text-center border-b border-neutral-400"
            >Mighty Coaching</NuxtLink
          >
          <p class="flex">
            <NuxtImg src="angular-icon.svg" width="30px" class="m-1" /><NuxtImg
              src="typescript-icon.svg"
              width="30px"
              class="m-1"
            />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
