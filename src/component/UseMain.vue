<script setup>
import { onMounted } from 'vue';
import { useVueJsStore } from '../useStore/useStore';
const useVueStore = useVueJsStore();

onMounted(() => useVueStore.fetchUse());
</script>

<template>
  <div class="mt-[200px] mx-20">
    <div class="flex items-center place-content-center">
      <div class="">
        <div class="grid grid-cols-6 gap-10">
          <div v-for="item in useVueStore.vueuse" :key="item.id" class="">
            <RouterLink
              :to="item.link"
              class="border border-slate-500 flex flex-col gap-5 justify-between bg-[#0c0c0c] rounded-xl group group-hover:border-slate-300 transition-all duration-500 max-w-[420px] py-[16px] px-[16px]"
            >
              <div class="text-[36px] font-semibold">{{ item.title }}</div>
              <div class="text-lg font-semibold text-gray-500">
                {{ item.text }}
              </div>
              <div class="">
                <img :src="item.image" alt="" />
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
