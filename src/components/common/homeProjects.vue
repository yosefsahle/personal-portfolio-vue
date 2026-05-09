<script setup>
import { ref } from 'vue'

// 📦 Projects
const projects = ref([
  { id: 1, image: 'https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg' },
  { id: 2, image: 'https://dcassetcdn.com/design_img/796104/30934/30934_4793971_796104_74cb62dd_image.jpg' },
  { id: 3, image: 'https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg' },

])

const currentIndex = ref(0)

// 👉 Next / Prev
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.value.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + projects.value.length) % projects.value.length
}
</script>

<template>
  <div class="w-full mt-30 flex flex-col md:flex-row justify-between items-center gap-5">

    <!-- LEFT TEXT -->
    <div class="z-2 w-full md:w-1/3 flex flex-col gap-5 items-center md:items-start">
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

      <button class="bg-[#0DB760] px-8 py-4 rounded-lg text-white font-semibold">
        Show More
      </button>
    </div>

    <!-- RIGHT SIDE -->
    <div class="flex w-full md:w-2/3 h-auto md:h-90 flex-col md:flex-row gap-5">


      <!-- RIGHT COLUMN -->
      <div class="flex flex-col justify-between w-full">

        <!-- 🟢 TOP: NEXT IMAGES (SCROLLABLE) -->
        <div class="flex flex-col gap-3 overflow-x-auto no-scrollbar">
          <div class="flex gap-2">
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" alt="" class="w-60 h-40 object-cover rounded-lg hover:scale-120" />
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" alt="" class="w-60 h-40 object-cover rounded-lg" />
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" alt="" class="w-60 h-40 object-cover rounded-lg" />
          </div>
          <div class="flex gap-2">
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" alt="" class="w-60 h-40 object-cover rounded-lg" />
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" alt="" class="w-60 h-40 object-cover rounded-lg" />
            <img src="https://images01.nicepagecdn.com/page/28/47/website-design-preview-284704.jpg" alt="" class="w-60 h-40 object-cover rounded-lg" />
          </div>
          
        </div>

        <!-- 🟢 BOTTOM: CONTROLS -->
        <div class="flex items-center justify-between mt-3">

          <!-- LEFT -->
          <i 
            class="fa-solid fa-arrow-left text-[#0DB760] cursor-pointer"
            @click="prevSlide"
          ></i>

          <!-- DOTS -->
          <div class="flex gap-2">
            <div 
              v-for="(project, index) in projects" 
              :key="project.id"
              @click="currentIndex = index"
              class="w-2 h-2 rounded-full cursor-pointer"
              :class="index === currentIndex ? 'bg-[#0DB760]' : 'bg-black/20'"
            ></div>
          </div>

          <!-- RIGHT -->
          <i 
            class="fa-solid fa-arrow-right text-[#0DB760] cursor-pointer"
            @click="nextSlide"
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