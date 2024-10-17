<template>
  <section class="grid place-items-center mb-10">
    <h2 class="text-emerald-500 text-4xl text-center mt-2 font-semibold m-2 mb-10">Mes Compétences</h2>
    <div class="md:grid grid-cols-2 w-3/4">
      <h3 class="text-2xl font-semibold m-1">Développement Frontend</h3>
      <div class="md:grid grid-cols-2 font-CourierPrime" id="cards">
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <svg width="50px" height="auto" viewBox="0 0 256 271" version="1.1" preserveAspectRatio="xMidYMid">
            <defs>
              <linearGradient x1="25.0714876%" y1="90.9292007%" x2="96.1321855%" y2="55.1837089%" id="linearGradient-1">
                <stop stop-color="#E40035" offset="0%"></stop>
                <stop stop-color="#F60A48" offset="24%"></stop>
                <stop stop-color="#F20755" offset="35.2%"></stop>
                <stop stop-color="#DC087D" offset="49.4%"></stop>
                <stop stop-color="#9717E7" offset="74.5%"></stop>
                <stop stop-color="#6C00F5" offset="100%"></stop>
              </linearGradient>
              <linearGradient x1="21.8628652%" y1="12.0575311%" x2="68.3669921%" y2="68.2103006%" id="linearGradient-2">
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
          ><span>Angular</span>
          <p>Framework Frontend - Expérience: Depuis 2023</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtPicture src="nuxt-icon.svg" alt="logo NuxtJs" width="50px" /><span>NuxtJs</span>
          <p>Framework Frontend - Expérience: Depuis 2024</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtImg src="nextjs-icon.svg" alt="logo NextJS" width="50px" /><span>NextJs</span>
          <p>Framework Frontend - Expérience: Depuis 2024</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtImg src="typescript-icon.svg" alt="logo TypeScript" width="50px" /><span>TypeScript</span>
          <p>Langage de programation - Expérience: Depuis 2023</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtImg src="tailwindcss-icon.svg" alt="logo Tailwind" width="50px" /><span>Tailwind</span>
          <p>Framework CSS - Expérience: Depuis 2024</p>
        </div>
      </div>
      <h3 class="text-2xl font-semibold m-1 w-5/6">Développement Backend et base de données</h3>
      <div class="md:grid grid-cols-2 font-CourierPrime" id="cards">
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtImg src="java.svg" alt="logo java" width="50px" /><span>Java</span>
          <p>Langage de programation - Expérience: Depuis 2023</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtImg src="spring-icon.svg" alt="logo Spring" width="50px" /><span>Spring</span>
          <p>Framework Backend - Expérience: Depuis 2023</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtImg src="postgresql.svg" alt="logo Spring" width="50px" /><span>PostgreSQL</span>
          <p>Base de données - Expérience: Depuis 2023</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
