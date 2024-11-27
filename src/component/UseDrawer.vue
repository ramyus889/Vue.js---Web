<template>
  <div class="flex justify-center card">
    <Drawer v-model:visible="visible" header="FrontendStore" position="top" class="!h-full">
      <div class="flex flex-col gap-3">
        <RouterLink to="/" @click="visible = false">Home</RouterLink>
        <RouterLink to="/About" @click="visible = false">About</RouterLink>
        <RouterLink to="/Blog" @click="visible = false">Blog</RouterLink>
        <RouterLink to="/Contact" @click="visible = false">Contact Us</RouterLink>
        <Button
          as="router-link"
          to="/Settings"
          icon="pi pi-cog"
          label="Settings"
          class=""
          @click="visible = false"
        />
        <Button
          as="router-link"
          to="/Profile"
          icon="pi pi-user"
          label="Profile"
          class=""
          @click="visible = false"
        />
      </div>
    </Drawer>
    <Button icon="pi pi-bars" severity="secondary" @click="visible = true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';

const visible = ref(false);
</script>
