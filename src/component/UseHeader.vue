<script setup></script>

<template>
  <div class="fixed z-50 flex w-full top-4 lg:top-6 place-content-center">
    <div class="max-w-[1672px] px-6 w-full bg-black py-2 rounded-[14px]">
      <div class="flex items-center justify-between">
        <div class="text-4xl">CURSOR</div>
        <ul class="flex gap-11">
          <li><a href="#">PRICING</a></li>
          <li><a href="#">FEATURES</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">FORUM</a></li>
          <li><a href="#">CAREERS</a></li>
        </ul>
        <div class="flex gap-3">
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
