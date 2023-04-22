<template>
  <CustomBelt :belt-props="belts" />
</template>

<script setup lang="ts">
import { CustomBelt, ibjjfJSON, BeltSystem } from 'vue-custom-belt';

const ibjjfSystem: BeltSystem = new BeltSystem(ibjjfJSON);
const belts = ibjjfSystem.getBeltPropsByNames(
  ['White', 'Blue', 'Purple', 'Brown', 'Black'],
  0,
  'Right',
  'transition: all 3.0s ease-in-out;',
  2000
);
</script>

<style scoped></style>
