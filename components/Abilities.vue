<template>
  <section id="abilities" class="grid place-items-center mb-10">
    <h2 class="text-emerald-500 text-4xl text-center mt-2 font-semibold m-2 mb-10">Mes Compétences</h2>
    <div class="md:grid grid-cols-2 w-3/4">
      <h3 class="text-2xl font-semibold m-1">Développement Frontend</h3>
      <div class="md:grid grid-cols-2 font-CourierPrime" id="cards" data-aos="fade-left">
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtPicture src="angular-icon.svg" alt="logo Angular" width="50px" /><span>Angular</span>
          <p>Framework Frontend - Expérience: Depuis 2023</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtPicture src="nuxt-icon.svg" alt="logo NuxtJs" width="50px" /><span>NuxtJs</span>
          <p>Framework Frontend - Expérience: Depuis 2024</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtPicture src="nextjs-icon.svg" alt="logo NextJS" width="50px" /><span>NextJs</span>
          <p>Framework Frontend - Expérience: Depuis 2024</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtPicture src="typescript-icon.svg" alt="logo TypeScript" width="50px" /><span>TypeScript</span>
          <p>Langage de programation - Expérience: Depuis 2023</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtPicture src="tailwindcss-icon.svg" alt="logo Tailwind" width="50px" /><span>Tailwind</span>
          <p>Framework CSS - Expérience: Depuis 2024</p>
        </div>
      </div>
      <h3 class="text-2xl font-semibold m-1 w-5/6">Développement Backend et base de données</h3>
      <div class="md:grid grid-cols-2 font-CourierPrime" id="cards" data-aos="fade-left">
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtPicture src="java.svg" alt="logo java" width="50px" /><span>Java</span>
          <p>Langage de programation - Expérience: Depuis 2023</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtPicture src="spring-icon.svg" alt="logo Spring" width="50px" /><span>Spring</span>
          <p>Framework Backend - Expérience: Depuis 2023</p>
        </div>
        <div class="grid place-items-center border-b border-neutral-400 p-4 w-3/4 mx-auto">
          <NuxtPicture src="postgresql.svg" alt="logo Spring" width="50px" /><span>PostgreSQL</span>
          <p>Base de données - Expérience: Depuis 2023</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
