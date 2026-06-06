<script setup>
import { ref } from 'vue'
import { useTheme } from '../../composables/useTheme'

const scrollContainer = ref(null)
const {lighMode} = useTheme();

// 👉 Scroll functions
const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -280, behavior: 'smooth' })
}

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 280, behavior: 'smooth' })
}
</script>

<template>
  <div class="z-0 overflow-hidden absolute w-full md:w-5/6 h-full">
            <div class="top-20 left-120 absolute w-[20px] h-[20px] bg-[#F4C430] rounded-[100%] float-1 blur-sm"></div>
            <div class="top-10 left-20 absolute w-[20px] h-[20px] bg-[#F4C430] rounded-[100%] float-2 blur-sm"></div>
            <div class="top-30 right-60 absolute w-[50px] h-[50px] bg-[#F4C430] rounded-[100%] float-3 blur-sm"></div>
            <div class="top-60 right-90 absolute w-[20px] h-[20px] bg-[#3A86FF] rounded-[100%] float-4 blur-sm"></div>
            <div class="top-20 right-70 absolute w-[20px] h-[20px] bg-[#F4C430] rounded-[100%] float-1 blur-sm"></div>
            <div class="top-15 left-50 absolute w-[20px] h-[20px] bg-[#0DB760] rounded-[100%] float-2 blur-sm"></div>
            
            <div class="top-60 left-50 absolute w-[30px] h-[30px] bg-[#F4C430] rounded-[100%] float-3 blur-sm"></div>
            <div class="top-40 left-10 absolute w-[30px] h-[30px] bg-[#E63946] rounded-[100%] float-4 blur-sm"></div>
            <div class="top-20 left-90 absolute w-[30px] h-[30px] bg-[#3A86FF] rounded-[100%] float-1 blur-sm"></div>
            <div class="top-30 left-70 absolute w-[40px] h-[40px] bg-[#0DB760] rounded-[100%] float-2 blur-sm"></div>
            <div class="top-90 left-80 absolute w-[40px] h-[40px] bg-[#E63946] rounded-[100%] float-3 blur-sm"></div>
            <div class="top-50 left-20 absolute w-[150px] h-[150px] bg-[#F4C430] rounded-[100%] float-2 blur-xl"></div>

        </div>
  <div class="z-1 w-full mt-30 flex flex-col md:flex-row justify-between items-center gap-5">

    <!-- LEFT TEXT -->
    <div class="z-2 w-full md:w-2/5 flex flex-col gap-5 items-center md:items-start">
      <p class="text-[#0DB760] border rounded-[50%_/_50%] w-22 font-bold text-center">
        Portfolio
      </p>

      <p :class="lighMode ? 'text-black':'text-gray-400'" class="text-3xl font-bold">
        My Creative Works Latest 
        <span class="text-[#0DB760]">Projects</span>
      </p>

      <p :class="lighMode ? 'text-black':'text-gray-400'" class="text-sm">
        I have selected some of my latest projects.
      </p>

      <button :class="lighMode ? 'text-white':'text-black'" class="bg-[#0DB760] w-full md:w-auto px-8 py-4 rounded-lg font-semibold">
        Show More
      </button>
    </div>

    <!-- RIGHT SIDE -->
    <div class="z-1 flex w-full md:w-3/5 flex-col md:flex-row gap-5">


      <!-- RIGHT COLUMN -->
       <div class="flex flex-col justify-between w-full">
        <!-- 🟢 TOP: NEXT IMAGES -->
         <div ref="scrollContainer" class="flex flex-col gap-3 overflow-x-auto no-scrollbar scroll-smooth mb-5">
         <div  class="flex gap-4 ">
          <!-- IMAGE ITEM -->
           <div class="min-w-[270px] h-60 rounded-lg overflow-hidden">
            <img src="/projects/eliora.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
          </div>
          <div class="min-w-[270px] h-60 rounded-lg overflow-hidden">
            <img src="/projects/ekubers.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
          </div>
          <div class="min-w-[270px] h-60 rounded-lg overflow-hidden">
            <img src="/projects/kulfinet.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
          </div>
          <div class="min-w-[270px] h-60 rounded-lg overflow-hidden">
            <img src="/projects/searchet.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
          </div>
          <div class="min-w-[270px] h-60 rounded-lg overflow-hidden">
            <img src="/projects/prime.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
          <div class="min-w-[270px] h-60 rounded-lg overflow-hidden">
            <img src="/projects/sparaz.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
          <div class="min-w-[270px] h-60 rounded-lg overflow-hidden">
            <img src="/projects/buna.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
          <div class="min-w-[270px] h-60 rounded-lg overflow-hidden">
            <img src="/projects/hongkong.jpg" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
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