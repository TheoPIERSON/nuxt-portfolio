<template>
  <section class="flex">
    <div class="flip-card m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <NuxtPicture src="angular-icon.svg" alt="logo Angular" />
        </div>

        <div class="flip-card-back">
          <p class="title">Angular</p>
          <p>Expérience:</p>
          <p>Depuis 2023</p>
        </div>
      </div>
    </div>
    <div class="flip-card m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <NuxtPicture src="nuxt-icon.svg" alt="logo Angular" />
        </div>
        <div class="flip-card-back">
          <p class="title">Nuxt</p>
          <p>Expérience:</p>
          <p>Depuis 2024</p>
        </div>
      </div>
    </div>
    <div class="flip-card m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <NuxtPicture src="nextjs-icon.svg" alt="logo Angular" />
        </div>
        <div class="flip-card-back">
          <p class="title">Next</p>
          <p>Expérience:</p>
          <p>Depuis 2024</p>
        </div>
      </div>
    </div>
    <div class="flip-card m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <NuxtPicture src="typescript-icon.svg" alt="logo Angular" />
        </div>
        <div class="flip-card-back">
          <p class="title">TypeScript</p>
          <p>Expérience:</p>
          <p>Depuis 2023</p>
        </div>
      </div>
    </div>
    <div class="flip-card m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <NuxtPicture src="tailwindcss-icon.svg" alt="logo Angular" />
        </div>
        <div class="flip-card-back">
          <p class="title">Tailwind</p>
          <p>Expérience:</p>
          <p>Depuis 2024</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* From Uiverse.io by joe-watson-sbf */
.flip-card {
  background-color: transparent;
  width: 8rem;
  height: 200px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
