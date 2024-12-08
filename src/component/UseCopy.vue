<script setup>
import { useThrottleFn } from '@vueuse/core';
const throttledFunction = useThrottleFn(() => {
  console.log('Функция была вызвана с ограничением частоты вызовов!');
}, 2000);
function handleClick() {
  throttledFunction();
}
</script>
<template>
  <div class="p-4 text-center">
    <button @click="handleClick" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
      Нажмите много раз!
    </button>
  </div>
</template>
