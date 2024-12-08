<template>
  <div class="flex justify-center card">
    <Button
      label="Preview Code"
      @click="visible = true"
      class="!bg-[#bebebe] !text-black !border !border-slate-700 !w-full !rounded-t-[70px] !rounded-b-none !sm:max-w-[350px] max-w-[250px]"
    />
    <Dialog
      v-model:visible="visible"
      modal
      header="@VueUse"
      :style="{ width: '50rem' }"
      class="mx-5"
    >
      <div class="flex flex-col gap-5 rounded-xl py-[16px] px-[16px]">
        <div class="flex flex-col w-full sm:flex-row sm:justify-between">
          <div class="text-[36px] font-semibold">{{ props.title }}</div>
          <Button
            icon="pi pi-copy"
            class="!bg-black !text-white !border !border-slate-700 !w-full !sm:max-w-[200px]"
            @click="copy"
          >
            Copy Code
          </Button>
        </div>
        <div class="flex place-content-center">
          <img :src="props.image" class="" alt="" />
        </div>
        <div class="text-lg font-semibold text-gray-500">
          {{ props.text }}
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

// Define props
const props = defineProps(['title', 'image', 'text', 'copyCode']);

const visible = ref(false);

// Method to copy code to clipboard
function copy() {
  const codeToCopy = `${props.copyCode}`;

  navigator.clipboard
    .writeText(codeToCopy)
    .then(() => {
      console.log('Code copied to clipboard');
    })
    .catch((err) => {
      console.error('Failed to copy code: ', err);
    });
}
</script>
