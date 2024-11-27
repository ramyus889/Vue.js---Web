<script setup>
import { useRoute } from 'vue-router';

import 'primeicons/primeicons.css';

const route = useRoute();

function isActive(path) {
  return route.path === path ? 'bg-[#272727] p-5 rounded-xl' : 'bg-transparent p-5';
}
</script>

<template>
  <div class="bg-slate-700 h-screen max-w-[130px] rounded-r-[30px] p-4 fixed top-0 bottom-0 left-0">
    <div class="flex flex-col justify-between h-full gap-10">
      <div class="flex items-center justify-center">
        <img src="/img/Code/frontend.jpg" alt="" class="w-[50px] rounded-xl" />
      </div>
      <div class="flex flex-col items-center justify-center gap-5 md:gap-10">
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
      <div class="flex flex-col items-center justify-center gap-5">
        <RouterLink to="/Settings">
          <i :class="isActive('/Settings')" class="pi pi-cog" />
        </RouterLink>
        <div class="h-[1px] w-full bg-slate-400"></div>
        <RouterLink to="/Profile">
          <i :class="isActive('/Profile')" class="pi pi-user" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
