---
layout: home
---

<ClientSideOnly> <!-- markdownlint-disable-line MD041 -->
   <main>
     <BeltBuilder />
   </main>
</ClientSideOnly>

<script setup lang="ts">
import BeltBuilder from './components/BeltBuilder.vue'
</script>

<style scoped>
main {
  padding: 20px;
  text-align: center;
}
</style>
