<template>
  <section class="grid grid-cols-2 w-screen md:w-auto gap-0 md:flex">
    <div class="flip-card md:m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <NuxtPicture src="java.svg" alt="logo Java" />
        </div>

        <div class="flip-card-back">
          <p class="title">Java</p>
          <p>Expérience:</p>
          <p>Depuis 2023</p>
        </div>
      </div>
    </div>
    <div class="flip-card md:m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <NuxtPicture src="spring-icon.svg" alt="logo Spring Boot" />
        </div>
        <div class="flip-card-back">
          <p class="title">Spring Boot</p>
          <p>Expérience:</p>
          <p>Depuis 2023</p>
        </div>
      </div>
    </div>
    <div class="flip-card md:m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <NuxtPicture src="postgresql.svg" alt="logo PostgreSQL" />
        </div>
        <div class="flip-card-back">
          <p class="title">PostgreSQL</p>
          <p>Expérience:</p>
          <p>Depuis 2023</p>
        </div>
      </div>
    </div>
    <div class="flip-card md:m-8">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <NuxtPicture src="LogoDocker.svg" alt="logo Docker" />
        </div>
        <div class="flip-card-back">
          <p class="title">Docker</p>
          <p>Expérience:</p>
          <p>Depuis 2023</p>
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
