<template>
  <CustomBelt :belt-props="belt" />
  <div>
    <input v-if="colorCount > 0" class="colorSwatch" type="color" v-model="color1" />
    <input v-if="colorCount > 1" class="colorSwatch" type="color" v-model="color2" />
    <input v-if="colorCount > 2" class="colorSwatch" type="color" v-model="color3" />
  </div>
  <div class="controls">
    <div class="control">
      <SelectControl
        label="Type"
        :available-options="beltGroups"
        :selected-option="selectedBeltGroup"
        :callback="beltGroupChanged"
      />
    </div>
    <div v-if="selectedBeltGroup === 0" class="control">
      <SelectControl
        label="Belt"
        :available-options="ibjjfSystem.belts"
        :selected-option="selectedIBJJFBelt"
        :callback="pickBeltIBJJF"
      />
    </div>
    <div v-else-if="selectedBeltGroup === 1" class="control">
      <SelectControl
        label="Belt"
        :available-options="beltTypes"
        :selected-option="selectedCustomBelt"
        :callback="pickBeltCustom"
      />
    </div>
    <div class="control">
      <SelectControl
        label="Stripes"
        :available-options="stripesAvailable"
        :selected-option="selectedStripeCount"
        :callback="updateStripeCount"
      />
    </div>
  </div>
  <div v-if="selectedBeltGroup === 2" class="controls">
    <CheckedBeltsGroup :callback="updateCheckedRandomBelts" />
  </div>
  <CopyToClipboard :allowCopyToClipboard="allowCopyToClipboard" :callback="copyURLToClipboard" />
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import {
  CustomBelt,
  getPredefinedBelt,
  beltTypes,
  getRandomBelt,
  ibjjfJSON,
  BeltSystem,
  type Belt,
  type BeltTypes
} from 'vue-custom-belt';
import CopyToClipboard from './CopyToClipboard.vue';
import SelectControl from './SelectControl.vue';
import CheckedBeltsGroup from './CheckedBeltsGroup.vue';

const ibjjfSystem = new BeltSystem(ibjjfJSON);

const beltGroups = [
  { name: 'IBJJF', value: 0 },
  { name: 'Custom', value: 1 },
  { name: 'Random', value: 2 }
];

const checkedRandomBelts = ref([] as Array<BeltTypes>);

beltTypes.forEach((beltType) => checkedRandomBelts.value.push(beltType));

const belt = ref();
const color1 = ref('#FF0000');
const color2 = ref('#FFFFFF');
const color3 = ref('#0000FF');
const colorCount = ref(0);
const selectedCustomBelt = ref('Striped' as BeltTypes);
const selectedIBJJFBelt = ref('White');
const selectedBeltGroup = ref(0);
const selectedStripeCount = ref(0);
const stripesAvailable = ref();

const updateBeltCustom = () => {
  belt.value = getPredefinedBelt(
    0,
    'Belt Name',
    selectedCustomBelt.value,
    color1.value,
    color2.value,
    color3.value,
    '#000000',
    true,
    '#000000',
    '#000000',
    false,
    '',
    '',
    '#FFFFFF',
    selectedStripeCount.value,
    'Right',
    0,
    10,
    'My Title',
    'My Description',
    '',
    0
  );
};

watch(color1, () => {
  updateBeltCustom();
});

watch(color2, () => {
  updateBeltCustom();
});

watch(color3, () => {
  updateBeltCustom();
});

const pickBeltIBJJF = (newBeltName: string) => {
  selectedIBJJFBelt.value = newBeltName;
  setStripeSelect();
  const newBelt = ibjjfSystem.getBeltPropsByName(
    selectedIBJJFBelt.value,
    selectedStripeCount.value
  );
  belt.value = newBelt;
  colorCount.value = 0;
};

const pickBeltCustom = (newBeltType: BeltTypes) => {
  setColorCount(newBeltType);
  selectedCustomBelt.value = newBeltType;
  updateBeltCustom();
};

const setColorCount = (beltType: BeltTypes) => {
  switch (beltType) {
    case 'Solid':
      colorCount.value = 1;
      break;
    case 'Coral':
    case 'Split':
    case 'Checkered':
      colorCount.value = 2;
      break;
    case 'Striped':
      colorCount.value = 3;
      break;
    case 'Crazy':
      colorCount.value = 0;
      break;
  }
};

const updateStripeCount = (newValue: number) => {
  selectedStripeCount.value = newValue;
  beltGroupChanged(selectedBeltGroup.value);
};

const beltGroupChanged = (groupValue: number) => {
  selectedBeltGroup.value = groupValue;
  setStripeSelect();
  if (groupValue === 0) {
    // IBJJF Belts
    pickBeltIBJJF(selectedIBJJFBelt.value);
  } else if (groupValue === 1) {
    // Custom Belts
    pickBeltCustom(selectedCustomBelt.value);
    updateBeltCustom();
  } else if (groupValue === 2) {
    // Random Belts
    colorCount.value = 0;
    belt.value = getRandomBelt(
      true,
      false,
      selectedStripeCount.value,
      'Right',
      'transition: all 1.0s ease-in-out;',
      checkedRandomBelts.value,
      2000
    );
  }
};

const setStripeSelect = () => {
  let myBelt: Belt | undefined = undefined;
  let ary: Number[] = [];
  switch (selectedBeltGroup.value) {
    case 0: // IBJJF
      myBelt = ibjjfSystem.getBeltByName(selectedIBJJFBelt.value);
      if (myBelt !== undefined) {
        for (let i = myBelt.minStripes; i <= myBelt.maxStripes; i++) {
          ary.push(i);
        }
        stripesAvailable.value = ary;
      }
      break;
    case 1: // Custom
    case 2: // Random
      stripesAvailable.value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      break;
  }
  if (selectedStripeCount.value > stripesAvailable.value[stripesAvailable.value.length - 1]) {
    selectedStripeCount.value = stripesAvailable.value[0];
  } else if (selectedStripeCount.value < stripesAvailable.value[0]) {
    selectedStripeCount.value = stripesAvailable.value[0];
  }
};

const allowCopyToClipboard = computed(() => {
  if (selectedBeltGroup.value === 0) {
    return true;
  } else if (selectedBeltGroup.value === 1 && selectedCustomBelt.value !== 'Crazy') {
    return true;
  }
  return false;
});

const copyURLToClipboard = () => {
  if (typeof window !== 'undefined') {
    let url = window.location.origin + window.location.pathname;
    let parm = '';
    if (selectedBeltGroup.value === 0) {
      const belt = ibjjfSystem.getBeltByName(selectedIBJJFBelt.value);
      if (belt) {
        parm = `0|${belt.id}|${selectedStripeCount.value}`;
      }
    } else if (selectedBeltGroup.value === 1) {
      parm = `1|${selectedCustomBelt.value}|${selectedStripeCount.value}|${color1.value}|${color2.value}|${color3.value}`;
    }
    url = `${url}?belt=${encodeURIComponent(parm)}`;
    copyToClipboard(url);
  }
};

const copyToClipboard = async (text: string) => {
  if (navigator) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard:', text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
};

const updateCheckedRandomBelts = (checkedItems: Array<BeltTypes>) => {
  checkedRandomBelts.value = checkedItems;
  beltGroupChanged(selectedBeltGroup.value);
};

const params: any = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop: string) => searchParams.get(prop)
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let value = params.belt; // "some_value"

if (value) {
  const parms = value.split('|');
  if (parms && parms.length === 3 && parms[0] === '0') {
    selectedBeltGroup.value = 0;
    const belt = ibjjfSystem.getBeltById(Number(parms[1]));
    if (belt !== undefined) {
      selectedIBJJFBelt.value = belt.name;
      selectedStripeCount.value = parseInt(parms[2]);
      pickBeltIBJJF(selectedIBJJFBelt.value);
    }
  } else if (parms && parms.length === 6 && parms[0] === '1') {
    selectedBeltGroup.value = 1;
    selectedCustomBelt.value = parms[1] as BeltTypes;
    selectedStripeCount.value = parseInt(parms[2]);
    color1.value = parms[3];
    color2.value = parms[4];
    color3.value = parms[5];
    setStripeSelect();
    pickBeltCustom(selectedCustomBelt.value);
  }
} else {
  pickBeltIBJJF(selectedIBJJFBelt.value);
}
</script>

<style scoped>
.control {
  background-color: #f6f6f7;
  color: white;
  padding: 1rem;
  height: 4rem;
  border-radius: 0.5rem;
}

.dark .control {
  background-color: #434245;
}

.controls {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  padding-top: 20px;
}

/*Screen larger than 600px? 2 column*/
@media (min-width: 600px) {
  .controls {
    grid-template-columns: repeat(2, 1fr);
  }
}

/*Screen larger than 900px? 3 columns*/
@media (min-width: 900px) {
  .controls {
    grid-template-columns: repeat(3, 1fr);
  }
}

.colorSwatch {
  width: 75px;
  height: 75px;
  cursor: pointer;
}
</style>
