<template>
  <section id="portfolio">
    <h2 class="text-emerald-500 text-4xl text-center mt-2 font-semibold m-2 mb-10">Mon Portfolio</h2>
    <div class="font-CourierPrime grid md:grid-cols-[1fr,2fr]">
      <p class="text-start w-screen md:w-1/2 text-neutral-300 md:mt-6">
        J'ai réalisé ce portfolio essentiellement avec Nuxt, Angular ou NextJs.
      </p>
      <div class="w-full grid md:grid-cols-2 gap-4 p-6" data-aos="fade-left">
        <div class="relative md:w-[400px]" id="Onyx Institut">
          <NuxtImg
            alt="Capture d'écran du site Onyx Institut"
            src="onyxinstitut.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <NuxtImg
            alt="Capture d'écran du site Onyx Institut côté admin"
            src="onyx2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
          <NuxtLink to="https://onyx-institut.com/" class="text-center border-b border-neutral-400"
            >Onyx Insitut</NuxtLink
          >
          <p class="flex">
            <NuxtPicture alt="Icone Angular" src="angular-icon.svg" width="30px" class="m-1" /><NuxtPicture
              alt="Icon Springboot"
              src="spring-icon.svg"
              width="30px"
              class="m-1"
            /><NuxtPicture alt="Icone Java" src="java.svg" width="30px" class="m-1" /><NuxtPicture
              alt="Icon Postgresql"
              src="postgresql.svg"
              width="30px"
              class="m-1"
            /><NuxtPicture alt="Icone TypeScript" src="typescript-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
        <div class="relative md:w-[400px]" id="ModelBook">
          <NuxtPicture
            src="model-book.png"
            alt="Capture d'écran du site portfolio d'un mannequin"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <NuxtPicture
            src="model-book2.png"
            alt="Seconde capture d'écran du site portfolio d'un mannequin"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
          <NuxtLink to="https://model-book.vercel.app/" class="text-center border-b border-neutral-400"
            >Model Book</NuxtLink
          >
          <p class="flex">
            <NuxtPicture alt="Icone NuxtJS" src="nuxt-icon.svg" width="30px" class="m-1" /><NuxtPicture
              alt="Icone TypeScript"
              src="typescript-icon.svg"
              width="30px"
              class="m-1"
            />
          </p>
        </div>
        <div class="relative md:w-[400px]" id="DoBronxMMA">
          <!-- Première image visible par défaut -->
          <NuxtPicture
            src="dobronx.png"
            alt="Capture d'écran du site Do Bronx MMA site d'une association sportive fictive"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <!-- Deuxième image visible au survol -->
          <NuxtPicture
            alt="Capture d'écran du site Do Bronx MMA site d'une association sportive fictive"
            src="dobronx2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          <NuxtLink to="https://do-bronx-mma.vercel.app/" class="text-center border-b border-neutral-400"
            >Do Bronx MMA</NuxtLink
          >
          <p class="flex">
            <NuxtPicture src="nuxt-icon.svg" width="30px" class="m-1" alt="Icon NuxtJS" />
            <NuxtPicture src="typescript-icon.svg" width="30px" class="m-1" alt="Icone TypeScript" />
          </p>
        </div>
        <div class="relative md:w-[400px]" id="ChefPro">
          <NuxtPicture
            alt="Capture d'écran du site Chef Pro 360 landing page d'une marque de couteau fictive"
            src="chefprodesk.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <NuxtPicture
            alt="Capture d'écran du site Chef Pro 360 landing page d'une marque de couteau fictive"
            src="chefpro2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
          <NuxtLink to="https://chef-pro-360.vercel.app/" class="text-center border-b border-neutral-400"
            >Chef Pro 360</NuxtLink
          >
          <p class="flex">
            <NuxtPicture alt="Icone NextJS" src="nextjs-icon.svg" width="30px" class="m-1" /><NuxtPicture
              alt="Icone TypeScript"
              src="typescript-icon.svg"
              width="30px"
              class="m-1"
            />
          </p>
        </div>
        <div class="relative md:w-[400px]" id="MightyCoaching">
          <NuxtPicture
            src="mighty.png"
            alt="Capture d'écran de Mighty Coaching site de formation fictif d'un combattant de MMA"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <NuxtPicture
            alt="Capture d'écran de Mighty Coaching site de formation fictif d'un combattant de MMA"
            src="mighty2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          <NuxtLink to="https://mighty-coaching.vercel.app/" class="text-center border-b border-neutral-400"
            >Mighty Coaching</NuxtLink
          >
          <p class="flex">
            <NuxtPicture alt="Icone Angular" src="angular-icon.svg" width="30px" class="m-1" /><NuxtPicture
              alt="Icone TypeScript"
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
