<template>
  <section id="portfolio">
    <h2 class="text-emerald-500 text-4xl text-center mt-2 font-semibold m-2 mb-10">Mon Portfolio</h2>
    <div class="font-CourierPrime grid md:grid-cols-[1fr,2fr]">
      <p class="text-start w-screen md:w-1/2 text-neutral-300">
        J'ai réalisé ce portfolio essentiellement avec Nuxt, Angular ou NextJs.
      </p>
      <div class="w-full grid md:grid-cols-2 gap-4 p-6" data-aos="fade-left">
        <div class="relative md:w-[400px]">
          <NuxtImg
            alt="Capture d'écran du site Onyx Institut"
            src="onyxinstitut.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <NuxtImg
            src="onyx2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          <NuxtLink to="https://theopierson.fr" class="text-center border-b border-neutral-400">Onyx Insitut</NuxtLink>
          <p class="flex">
            <NuxtPicture src="angular-icon.svg" width="30px" class="m-1" /><NuxtPicture
              src="spring-icon.svg"
              width="30px"
              class="m-1"
            /><NuxtPicture src="java.svg" width="30px" class="m-1" /><NuxtPicture
              src="postgresql.svg"
              width="30px"
              class="m-1"
            /><NuxtPicture src="typescript-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
        <div class="relative md:w-[400px]">
          <!-- Première image visible par défaut -->
          <NuxtPicture
            src="dobronx.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <!-- Deuxième image visible au survol -->
          <NuxtPicture
            src="dobronx2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          <NuxtLink to="https://theopierson.fr" class="text-center border-b border-neutral-400">Do Bronx MMA</NuxtLink>
          <p class="flex">
            <NuxtPicture src="nuxt-icon.svg" width="30px" class="m-1" />
            <NuxtPicture src="typescript-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
        <div class="relative md:w-[400px]">
          <NuxtPicture
            src="chefprodesk.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <NuxtPicture
            src="chefpro2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
          <NuxtLink to="https://theopierson.fr" class="text-center border-b border-neutral-400">Chef Pro 360</NuxtLink>
          <p class="flex">
            <NuxtPicture src="nextjs-icon.svg" width="30px" class="m-1" /><NuxtPicture
              src="typescript-icon.svg"
              width="30px"
              class="m-1"
            />
          </p>
        </div>
        <div class="relative md:w-[400px]">
          <NuxtPicture
            src="mighty.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <NuxtPicture
            src="mighty2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          <NuxtLink to="https://theopierson.fr" class="text-center border-b border-neutral-400"
            >Mighty Coaching</NuxtLink
          >
          <p class="flex">
            <NuxtPicture src="angular-icon.svg" width="30px" class="m-1" /><NuxtPicture
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
