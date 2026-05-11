<script setup>
import { ref } from 'vue'

const scrollContainer = ref(null)

// 👉 Scroll functions
const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
}
</script>

<template>
  <div class="w-full mt-30 flex flex-col md:flex-row justify-between items-center gap-5">

    <!-- LEFT TEXT -->
    <div class="z-2 w-full md:w-2/5 flex flex-col gap-5 items-center md:items-start">
      <p class="text-[#0DB760] border rounded-[50%_/_50%] w-22 font-bold text-center">
        Portfolio
      </p>

      <p class="text-3xl font-bold">
        My Creative Works Latest 
        <span class="text-[#0DB760]">Projects</span>
      </p>

      <p class="text-sm">
        I have selected some of my latest projects.
      </p>

      <button class="bg-[#0DB760] w-full md:w-auto px-8 py-4 rounded-lg text-white font-semibold">
        Show More
      </button>
    </div>

    <!-- RIGHT SIDE -->
    <div class="flex w-full md:w-3/5 h-auto md:h-90 flex-col md:flex-row gap-5">


      <!-- RIGHT COLUMN -->
       <div class="flex flex-col justify-between w-full">
        <!-- 🟢 TOP: NEXT IMAGES -->
         <div ref="scrollContainer" class="flex flex-col gap-3 overflow-x-auto no-scrollbar scroll-smooth">
         <div  class="flex gap-4 ">
          <!-- IMAGE ITEM -->
           <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="../../assets/projects/buna.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
          </div>
          <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="../../assets/projects/prime.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
          </div>
          <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="../../assets/projects/hongkong.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
          <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
          <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
        <div class="flex gap-4">
          <!-- IMAGE ITEM -->
           <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="../../assets/projects/bunna-m.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
          </div>
          <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="../../assets/projects/prime-m.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
          </div>
          <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="../../assets/projects/hongkong-m.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
          <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
          <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
          <div class="min-w-[240px] h-40 rounded-lg overflow-hidden">
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
        </div>

  <!-- 🟢 BOTTOM CONTROLS -->
  <div class="flex items-center justify-between mt-3">

    <!-- LEFT -->
    <i 
      class="fa-solid fa-arrow-left text-[#0DB760] cursor-pointer"
      @click="scrollLeft"
    ></i>

    <!-- DOTS -->
    <div class="flex gap-2">
      <div class="w-2 h-2 rounded-full bg-[#0DB760]"></div>
      <div class="w-2 h-2 rounded-full bg-black/20"></div>
      <div class="w-2 h-2 rounded-full bg-black/20"></div>
    </div>

    <!-- RIGHT -->
    <i 
      class="fa-solid fa-arrow-right text-[#0DB760] cursor-pointer"
      @click="scrollRight"
    ></i>

  </div>

</div>

    </div>

  </div>
</template>

<style>
/* Hide scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  scrollbar-width: none;
}
</style>