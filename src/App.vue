<script setup>
import UseHeader from './component/UseHeader.vue';
</script>

<template>
  <div class="">
    <div class="flex gap-32">
      <UseHeader />
      <RouterView />
    </div>
  </div>
</template>
