<script setup>
import UseDrawer from './UseDrawer.vue';
</script>

<template>
  <div class="fixed z-50 flex w-full top-4 lg:top-6 place-content-center">
    <div class="max-w-[1672px] px-6 w-full bg-black py-2 rounded-[14px] mx-10">
      <div class="flex items-center justify-between">
        <div class="text-xl font-bold"><RouterLink to="/" class="">@VueUse</RouterLink></div>
        <div class="flex md:hidden"><UseDrawer /></div>
        <ul class="hidden gap-5 md:flex lg:gap-11">
          <li><a href="#">PRICING</a></li>
          <li><a href="#">FEATURES</a></li>
          <li><a href="#">BLOG</a></li>
        </ul>
        <div class="hidden gap-3 md:flex">
          <UseButton class="!bg-black !text-white !border !border-slate-700" label="SIGN IN" />
          <UseButton
            class="!bg-white !text-black !border !border-black"
            icon="pi pi-download"
            label="DOWNLOAD"
          />
        </div>
      </div>
    </div>
  </div>
</template>
