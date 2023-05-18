<template>
  <slot></slot><span v-if="showRefresh">(<a @click="refresh">refresh</a>)</span>
  <CustomBelt :belt-props="randomBelt" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BeltType, CustomBelt, getBeltPropsRandom } from 'vue-custom-belt';

const props = defineProps({ showRefresh: Boolean });

const randomBelt = ref(
  getBeltPropsRandom(true, false, 0, undefined, undefined, [
    BeltType.Solid,
    BeltType.Striped,
    BeltType.Coral,
    BeltType.Split,
    BeltType.Checkered,
    BeltType.Crazy
  ])
);

const refresh = () => {
  randomBelt.value = getBeltPropsRandom(true, false, 0, undefined, undefined, [
    BeltType.Solid,
    BeltType.Striped,
    BeltType.Coral,
    BeltType.Split,
    BeltType.Checkered,
    BeltType.Crazy
  ]);
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
