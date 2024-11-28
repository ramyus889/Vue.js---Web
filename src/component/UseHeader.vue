<script setup>
import { useRoute } from 'vue-router';

import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import { ref } from 'vue';

const route = useRoute();
const show = ref(false);

function isActive(path) {
  return route.path === path
    ? 'bg-[#272727] p-5 rounded-xl border-2 border-[#1d58a5]'
    : 'bg-[#272727] opacity-70 rounded-xl p-5';
}
</script>

<template>
  <div
    :class="
      show
        ? 'max-w-[250px] w-full transition-all duration-700'
        : 'max-w-[90px] w-full transition-all duration-700'
    "
    class="bg-slate-700 sm:h-screen z-[1000] ps-4 pt-4 pb-4 sticky top-0 bottom-0"
  >
    <div class="flex flex-row justify-between gap-10 overflow-hidden sm:flex-col sm:h-full">
      <div class="flex flex-col gap-10">
        <div class="flex justify-between w-full pe-4">
          <img src="/img/Code/frontend.jpg" alt="" class="w-[57px] rounded-xl" />
          <Button
            icon="pi pi-window-minimize"
            severity="secondary"
            @click="show = !show"
            class="!p-1"
            :class="show ? 'opacity-100 motion-preset-blur-down-lg motion-delay-500' : 'opacity-0 '"
          />
        </div>
        <div class="flex ps-[6px]">
          <Button
            icon="pi pi-window-maximize"
            severity="secondary"
            @click="show = !show"
            class="!p-1"
            :class="
              show ? 'opacity-0  ' : 'opacity-100 motion-preset-blur-down-lg motion-delay-500'
            "
          />
        </div>
      </div>
      <div class="flex-col hidden gap-10 sm:flex">
        <RouterLink to="/" class="flex items-center gap-5">
          <i :class="isActive('/')" class="pi pi-home" />
          <div
            :class="
              show
                ? 'block motion-preset-blur-down-lg motion-delay-500'
                : 'hidden motion-preset-blur-up-lg'
            "
            class=""
          >
            Home
          </div>
        </RouterLink>
        <RouterLink to="/Blog" class="flex items-center gap-5">
          <i :class="isActive('/Blog')" class="pi pi-id-card" />
          <div
            :class="show ? 'block motion-preset-blur-down-lg motion-delay-500' : 'hidden'"
            class=""
          >
            Blog
          </div>
        </RouterLink>
        <RouterLink to="/About" class="flex items-center gap-5">
          <i :class="isActive('/About')" class="pi pi-search" />
          <div
            :class="show ? 'block motion-preset-blur-down-lg motion-delay-500' : 'hidden'"
            class=""
          >
            About
          </div>
        </RouterLink>
        <RouterLink to="/Contact" class="flex items-center gap-5">
          <i :class="isActive('/Contact')" class="pi pi-phone" />
          <div
            :class="show ? 'block motion-preset-blur-down-lg motion-delay-500' : 'hidden'"
            class=""
          >
            Contact
          </div>
        </RouterLink>
      </div>
      <div class="flex-col hidden gap-5 sm:flex">
        <RouterLink to="/Settings" class="flex items-center gap-5">
          <i :class="isActive('/Settings')" class="pi pi-cog" />
          <div
            :class="show ? 'block motion-preset-blur-down-lg motion-delay-500' : 'hidden'"
            class=""
          >
            Settings
          </div>
        </RouterLink>
        <div class="hidden w-full sm:flex">
          <div class="h-[1px] w-full bg-slate-500 me-4"></div>
        </div>
        <RouterLink to="/Profile" class="flex items-center gap-5">
          <i :class="isActive('/Profile')" class="pi pi-user" />
          <div
            :class="show ? 'block motion-preset-blur-down-lg motion-delay-500' : 'hidden'"
            class=""
          >
            Profile
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
