<script setup>
import { useRoute } from 'vue-router';
import UseDrawer from './UseDrawer.vue';

import 'primeicons/primeicons.css';

const route = useRoute();

function isActive(path) {
  return route.path === path ? 'bg-[#272727] p-5 rounded-xl' : 'bg-transparent p-5';
}
</script>

<template>
  <div
    class="bg-slate-700 sm:h-screen sm:max-w-[130px] sm:rounded-r-[30px] rounded-r-[0px] rounded-br-[30px] sm:rounded-bl-[0px] rounded-bl-[30px] p-4 fixed top-0 sm:bottom-0 left-0 max-[640px]:right-0"
  >
    <div class="flex flex-row justify-between w-full gap-10 sm:flex-col sm:h-full">
      <div class="flex items-center justify-center">
        <img src="/img/Code/frontend.jpg" alt="" class="w-[50px] rounded-xl" />
      </div>
      <div class="flex sm:hidden">
        <UseDrawer />
      </div>
      <div class="flex-col items-center justify-center hidden gap-5 sm:flex md:gap-10">
        <RouterLink to="/">
          <i :class="isActive('/')" class="pi pi-home" />
        </RouterLink>
        <RouterLink to="/Blog">
          <i :class="isActive('/Blog')" class="pi pi-id-card" />
        </RouterLink>
        <RouterLink to="/About">
          <i :class="isActive('/About')" class="pi pi-search" />
        </RouterLink>
        <RouterLink to="/Contact">
          <i :class="isActive('/Contact')" class="pi pi-phone" />
        </RouterLink>
      </div>
      <div class="flex-col items-center justify-center hidden gap-5 sm:flex">
        <RouterLink to="/Settings">
          <i :class="isActive('/Settings')" class="pi pi-cog" />
        </RouterLink>
        <div class="hidden w-full sm:flex">
          <div class="h-[1px] w-full bg-slate-400"></div>
        </div>
        <RouterLink to="/Profile">
          <i :class="isActive('/Profile')" class="pi pi-user" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
