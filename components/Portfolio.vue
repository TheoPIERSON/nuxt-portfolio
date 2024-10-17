<template>
  <section>
    <h2 class="text-emerald-500 text-4xl text-center mt-2 font-semibold m-2 mb-10">Mon Portfolio</h2>
    <div class="font-CourierPrime grid md:grid-cols-[1fr,2fr]">
      <p class="text-start w-screen md:w-1/2 text-neutral-300">
        J'ai réalisé ce portfolio essentiellement avec Nuxt, Angular ou NextJs.
      </p>
      <div class="w-full grid md:grid-cols-2 gap-4 p-6">
        <div class="relative md:w-[400px]">
          <NuxtImg
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
            <svg
              width="30px"
              class="m-1"
              height="auto"
              viewBox="0 0 256 271"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  x1="25.0714876%"
                  y1="90.9292007%"
                  x2="96.1321855%"
                  y2="55.1837089%"
                  id="linearGradient-1"
                >
                  <stop stop-color="#E40035" offset="0%"></stop>
                  <stop stop-color="#F60A48" offset="24%"></stop>
                  <stop stop-color="#F20755" offset="35.2%"></stop>
                  <stop stop-color="#DC087D" offset="49.4%"></stop>
                  <stop stop-color="#9717E7" offset="74.5%"></stop>
                  <stop stop-color="#6C00F5" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="21.8628652%"
                  y1="12.0575311%"
                  x2="68.3669921%"
                  y2="68.2103006%"
                  id="linearGradient-2"
                >
                  <stop stop-color="#FF31D9" offset="0%"></stop>
                  <stop stop-color="#FF5BE1" stop-opacity="0" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M256,45.1787083 L246.756071,190.336865 L158.373321,0 L256,45.1787083 Z M194.783035,232.875768 L128.000576,270.981182 L61.2169653,232.875768 L74.7998577,199.957744 L181.200142,199.957744 L194.783035,232.875768 Z M128.000576,72.2488146 L162.994709,157.325468 L93.005291,157.325468 L128.000576,72.2488146 Z M9.14940313,190.336865 L0,45.1787083 L97.626679,0 L9.14940313,190.336865 Z"
                  fill="url(#linearGradient-1)"
                ></path>
                <path
                  d="M256,45.1787083 L246.756071,190.336865 L158.373321,0 L256,45.1787083 Z M194.783035,232.875768 L128.000576,270.981182 L61.2169653,232.875768 L74.7998577,199.957744 L181.200142,199.957744 L194.783035,232.875768 Z M128.000576,72.2488146 L162.994709,157.325468 L93.005291,157.325468 L128.000576,72.2488146 Z M9.14940313,190.336865 L0,45.1787083 L97.626679,0 L9.14940313,190.336865 Z"
                  fill="url(#linearGradient-2)"
                ></path>
              </g></svg
            ><NuxtImg src="java.svg" width="30px" class="m-1" /><NuxtImg
              src="postgresql.svg"
              width="30px"
              class="m-1"
            /><NuxtImg src="typescript-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
        <div class="relative md:w-[400px]">
          <!-- Première image visible par défaut -->
          <NuxtImg
            src="dobronx.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <!-- Deuxième image visible au survol -->
          <NuxtImg
            src="dobronx2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          <NuxtLink to="https://theopierson.fr" class="text-center border-b border-neutral-400">Do Bronx MMA</NuxtLink>
          <p class="flex">
            <NuxtImg src="nuxt-icon.svg" width="30px" class="m-1" />
            <NuxtImg src="typescript-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
        <div class="relative md:w-[400px]">
          <NuxtImg
            src="chefprodesk.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <NuxtImg
            src="chefpro2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
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
        <div class="relative md:w-[400px]">
          <NuxtImg
            src="mighty.png"
            width="400px"
            height="220px"
            class="relative top-0 left-0 w-screen md:p-0 md:w-full transition-opacity duration-300"
          />
          <NuxtImg
            src="mighty2.png"
            width="400px"
            height="220px"
            class="absolute top-0 left-0 w-screen md:p-0 md:w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          <NuxtLink to="https://theopierson.fr" class="text-center border-b border-neutral-400"
            >Mighty Coaching</NuxtLink
          >
          <p class="flex">
            <svg
              class="m-1"
              width="30px"
              height="auto"
              viewBox="0 0 256 271"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  x1="25.0714876%"
                  y1="90.9292007%"
                  x2="96.1321855%"
                  y2="55.1837089%"
                  id="linearGradient-1"
                >
                  <stop stop-color="#E40035" offset="0%"></stop>
                  <stop stop-color="#F60A48" offset="24%"></stop>
                  <stop stop-color="#F20755" offset="35.2%"></stop>
                  <stop stop-color="#DC087D" offset="49.4%"></stop>
                  <stop stop-color="#9717E7" offset="74.5%"></stop>
                  <stop stop-color="#6C00F5" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="21.8628652%"
                  y1="12.0575311%"
                  x2="68.3669921%"
                  y2="68.2103006%"
                  id="linearGradient-2"
                >
                  <stop stop-color="#FF31D9" offset="0%"></stop>
                  <stop stop-color="#FF5BE1" stop-opacity="0" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M256,45.1787083 L246.756071,190.336865 L158.373321,0 L256,45.1787083 Z M194.783035,232.875768 L128.000576,270.981182 L61.2169653,232.875768 L74.7998577,199.957744 L181.200142,199.957744 L194.783035,232.875768 Z M128.000576,72.2488146 L162.994709,157.325468 L93.005291,157.325468 L128.000576,72.2488146 Z M9.14940313,190.336865 L0,45.1787083 L97.626679,0 L9.14940313,190.336865 Z"
                  fill="url(#linearGradient-1)"
                ></path>
                <path
                  d="M256,45.1787083 L246.756071,190.336865 L158.373321,0 L256,45.1787083 Z M194.783035,232.875768 L128.000576,270.981182 L61.2169653,232.875768 L74.7998577,199.957744 L181.200142,199.957744 L194.783035,232.875768 Z M128.000576,72.2488146 L162.994709,157.325468 L93.005291,157.325468 L128.000576,72.2488146 Z M9.14940313,190.336865 L0,45.1787083 L97.626679,0 L9.14940313,190.336865 Z"
                  fill="url(#linearGradient-2)"
                ></path>
              </g></svg
            ><NuxtImg src="typescript-icon.svg" width="30px" class="m-1" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
