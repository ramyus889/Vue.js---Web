<template>
  <div class="flex justify-center card">
    <Drawer v-model:visible="visible" header="Drawer" position="top" class="!h-[320px]">
      <div class="flex flex-col gap-3">
        <RouterLink to="/" @click="visible = false">CURSOR</RouterLink>
        <RouterLink to="#" @click="visible = false">PRICING</RouterLink>
        <RouterLink to="#" @click="visible = false">FEATURES</RouterLink>
        <RouterLink to="#" @click="visible = false">BLOG</RouterLink>
        <div class="flex justify-center gap-5 mt-5">
          <UseButton
            @click="visible = false"
            class="!bg-black !text-white !border !border-slate-700"
            label="SIGN IN"
          />
          <UseButton
            @click="visible = false"
            class="!bg-white !text-black !border !border-black"
            icon="pi pi-download"
            label="DOWNLOAD"
          />
        </div>
      </div>
    </Drawer>
    <UseButton icon="pi pi-bars" class="!bg-white !border-none" @click="visible = true" />
  </div>
</template>

<script setup>
import Drawer from 'primevue/drawer';
import { ref } from 'vue';

const visible = ref(false);
</script>
