<script setup>
import Button from 'primevue/button';
import UseDrawer from './UseDrawer.vue';
</script>
<template>
  <div class="flex gap-5 place-content-center">
    <div class="max-w-[800px] w-full bg-[#5a9986] fixed rounded-b-full">
      <div class="flex items-center justify-between gap-5 px-12 py-3">
        <div class="">
          <img src="/img/Code/frontend.jpg" alt="" class="w-[46px] sm:w-14 rounded-xl" />
        </div>
        <div class="flex gap-3 sm:hidden">
          <UseDrawer />
        </div>
        <div class="hidden gap-3 sm:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="hidden sm:flex">
          <Button as="a" href="#" icon="pi pi-user" label="Login" class="" />
        </div>
      </div>
    </div>
  </div>
</template>
