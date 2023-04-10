<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  label: string;
  availableOptions: any;
  selectedOption: number | string;
  callback: Function;
}>();

const selection = ref(props.selectedOption);

const computedName = (option: any) => {
  if (option.name !== undefined) return option.name;
  return option;
};

const computedValue = (option: any) => {
  if (option.value !== undefined) return option.value;
  else if (option.name !== undefined) return option.name;
  return option;
};
</script>

<template>
  <label>
    {{ props.label }}
    <select v-model="selection" style="margin-left: 10px" @change="callback(selection)">
      <option
        v-for="option in availableOptions"
        :value="computedValue(option)"
        :key="computedValue(option)"
      >
        {{ computedName(option) }}
      </option>
    </select>
  </label>
</template>

<style scoped>
label {
  color: gray;
}

.dark label {
  color: #ffffff;
}

select {
  /*Reset*/
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  /*Personalize*/
  height: 2em;
  padding: 0 4em 0 1em;
  background: url(/caret-black.svg) no-repeat right 0.8em center/1.4em,
    linear-gradient(to left, rgba(0, 0, 0, 0.3) 3em, rgba(0, 0, 0, 0.2) 3em);
  color: black;
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  /*<option> colors*/
  /*Remove focus outline*/
  /*Remove IE arrow*/
}

.dark select {
  background: url(/caret-white.svg) no-repeat right 0.8em center/1.4em,
    linear-gradient(to left, rgba(0, 0, 0, 0.3) 3em, rgba(0, 0, 0, 0.2) 3em);
  color: white;
}

select option {
  color: inherit;
  background-color: #320a28;
}

select:focus {
  outline: none;
}

select::-ms-expand {
  display: none;
}
</style>
