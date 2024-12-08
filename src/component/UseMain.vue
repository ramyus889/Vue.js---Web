<script setup>
import { onMounted } from 'vue';
import { useVueJsStore } from '../useStore/useStore';
import UseCodeImage from './UseCodeImage.vue';
const useVueStore = useVueJsStore();

onMounted(() => useVueStore.fetchUse());
</script>

<template>
  <div class="mt-[200px] xl:mx-20 sm:mx-10 mx-5">
    <div class="flex items-center place-content-center">
      <div class="">
        <div
          class="xl:grid flex flex-col min-[2000px]:grid-cols-3 min-[1700px]:grid-cols-3 xl:grid-cols-2 gap-10"
        >
          <div v-for="item in useVueStore.vueuse" :key="item.id" class="">
            <div
              class="border border-slate-500 flex flex-col xl:gap-5 gap-10 justify-between bg-[#0c0c0c] min-[1700px]:h-[820px] xl:h-[780px] rounded-xl hover:border-slate-300 transition-all duration-500 min-[2000px]:max-w-[640px] py-[16px] px-[16px]"
            >
              <div class="text-[36px] font-semibold">{{ item.title }}</div>
              <div class="text-lg font-semibold text-gray-500">
                {{ item.text }}
              </div>
              <div class="">
                <UseCodeImage
                  :title="item.title"
                  :image="item.image"
                  :text="item.text"
                  :copyCode="item.copyCode"
                />
                <div class="flex place-content-center">
                  <img :src="item.image" class="xl:w-[600px] lg:w-[800px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
