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

<main> <!-- markdownlint-disable-line MD041 -->
  <AnimatedBelts style="width: 500px;"/>
</main>

<script setup lang="ts">
import AnimatedBelts from './components/AnimatedBelts.vue'
</script>

<style scoped>
main {
  padding-left: 225px;
  text-align: center;
}
</style>
