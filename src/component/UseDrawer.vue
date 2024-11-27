<template>
  <div class="flex justify-center card">
    <Drawer v-model:visible="visible" header="Drawer" position="top" class="!h-full">
      <div class="flex flex-col gap-3">
        <a href="#" @click="visible = false">Home</a>
        <a href="#" @click="visible = false">About</a>
        <a href="#" @click="visible = false">Blog</a>
        <a href="#" @click="visible = false">Contact Us</a>
        <Button as="a" href="#" icon="pi pi-user" label="Login" class="" />
      </div>
    </Drawer>
    <Button icon="pi pi-bars" @click="visible = true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';

const visible = ref(false);
</script>
