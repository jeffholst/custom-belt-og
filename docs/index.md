---
layout: home

title: Custom Belt 
titleTemplate: Demo and Documenttion for vue-custom-belt 

hero:
  name: Custom Belt
  tagline: A Vue 3 component to easily create any style martial arts belt in SVG format 
  actions:
    - theme: brand
      text: Demo 
      link: /demo
    - theme: alt
      text: Documentation 
      link: /documentation 
---

<template style="display: inline;">
  <AnimatedBelts id="animatedBelt" style="padding-top: 50px; max-width: 600px;"/>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AnimatedBelts from './components/AnimatedBelts.vue';

onMounted(() => {
  // Move the animated belt to the main element
  const mains = document.getElementsByClassName('main');
  const belt = document.getElementById('animatedBelt');
  mains[0].appendChild(belt);
})
</script>

<style scoped>
</style>
