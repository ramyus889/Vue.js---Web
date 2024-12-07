<script setup></script>

<template>
  <div class="flex mt-28 place-content-center">
    <div
      class="bg-[url('/bg-compress.jpg')] w-[1800px] sm:h-[800px] h-[600px] rounded-xl overflow-hidden flex place-content-center mx-5"
    >
      <div class="">
        <div
          class="xl:text-[154px] lg:text-[94px] md:text-[80px] sm:text-[65px] text-[40px] max-[420px]:text-[30px] px-5 text-center mt-[80px] font-semibold xl:leading-[127px] lg:leading-[94px] leading-[60px]"
        >
          The AI Code Editor
        </div>
        <div class="flex place-content-center">
          <div
            class="sm:text-[22px] text-[18px] max-[420px]:text-[16px] max-w-[500px] text-center leading-[27px] lg:mt-[55px] mt-[35px] px-5"
          >
            Built to make you extraordinarily productive, Cursor is the best way to code with AI.
          </div>
        </div>
        <div class="flex sm:flex-row flex-col justify-center sm:mt-[24px] mt-[30px] gap-5 px-5">
          <div class="group">
            <div
              class="p-1 transition-all duration-700 border -outline-offset-2 border-white/30 rounded-xl group-hover:border-white"
            >
              <UseButton
                class="!bg-white !text-black !border w-full !border-black !py-4"
                icon="pi pi-download"
                label="DOWNLOAD FOR WINDOWS"
              />
            </div>
          </div>
          <div class="group">
            <div
              class="p-1 transition-all duration-700 border -outline-offset-2 border-white/30 rounded-xl group-hover:border-white"
            >
              <UseButton
                icon="pi pi-video"
                class="!bg-black !text-white w-full !border-none !py-4"
                label="WATCH DEMO"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mx-auto mt-[50px] max-w-[1280px] px-5">
          <img src="/watch-demo.jpg" alt="" class="w-full rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>
