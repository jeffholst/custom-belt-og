<script setup lang="ts">
import { ref } from 'vue';
import { beltTypes } from 'vue-custom-belt';

const props = defineProps<{
  callback: Function;
}>();

const checkedRandomBelts = ref([] as string[]);

beltTypes.forEach((beltType) => checkedRandomBelts.value.push(beltType));

const checkboxChanged = () => {
  props.callback(checkedRandomBelts.value);
};
</script>

<template>
  <div v-for="beltType in beltTypes" :key="beltType">
    <label>
      {{ beltType }}
      <input
        type="checkbox"
        :id="beltType"
        @change="checkboxChanged"
        :value="beltType"
        v-model="checkedRandomBelts"
      />
    </label>
  </div>
</template>

<style scoped></style>
