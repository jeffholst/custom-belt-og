---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<main> <!-- markdownlint-disable-line MD041 -->
  <BeltBuilder />
</main>

<script setup lang="ts">
import BeltBuilder from './components/BeltBuilder.vue'
</script>

<style scoped>
main {
  padding: 20px;
  text-align: center;
}
</style>
