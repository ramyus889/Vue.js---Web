<script setup></script>

<template>
  <div class="flex mb-32 mt-28 place-content-center">
    <div
      class="bg-[url('/bg-compress.jpg')] w-[1800px] h-[800px] rounded-xl overflow-hidden flex place-content-center"
    >
      <div class="">
        <div class="text-[154px] text-center mt-[80px] font-semibold leading-[127px]">
          The AI Code Editor
        </div>
        <div class="text-[22px] text-center leading-[27px] mt-[55px]">
          Built to make you extraordinarily productive, <br />
          Cursor is the best way to code with AI.
        </div>
        <div class="flex justify-center mt-[24px] gap-5">
          <div class="group">
            <div
              class="relative p-1 transition-all duration-700 border -outline-offset-2 border-white/30 rounded-xl group-hover:border-white"
            >
              <UseButton
                class="!bg-white !text-black !border !border-black !py-4"
                icon="pi pi-download"
                label="DOWNLOAD FOR WINDOWS"
              />
            </div>
          </div>
          <div class="group">
            <div
              class="relative p-1 transition-all duration-700 border -outline-offset-2 border-white/30 rounded-xl group-hover:border-white"
            >
              <UseButton
                icon="pi pi-video"
                class="!bg-black !text-white !border-none !py-4"
                label="WATCH DEMO"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mx-auto mt-[50px] max-w-[1280px]">
          <img src="/watch-demo.jpg" alt="" class="w-full rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>
