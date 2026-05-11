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
  <div class="w-full mt-30 flex flex-col justify-between items-center gap-5">

    <!-- LEFT TEXT -->
    <div class="z-2 w-full flex flex-col md:flex-row gap-5 items-start md:items-end">
      <div class="flex flex-col md:w-1/3 items-center md:items-start gap-3">
        <p class="text-[#0DB760] border rounded-[50%_/_50%] w-22 font-bold text-center">
        Reviews
      </p>

      <p class="text-3xl font-bold">
        Our Customer Say Something  
        <span class="text-[#0DB760]">About Us</span>
      </p>
      </div>
      <div class="w-2/3 hidden md:flex flex-row gap-5 items-end justify-end md:pr-20">
        <i class="fa-solid fa-arrow-left-long cursor-pointer text-xl" @click="scrollLeft"ss></i>
        <i class="fa-solid fa-arrow-right-long cursor-pointer text-xl" @click="scrollRight"></i>
      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="flex w-full flex-col md:flex-row gap-5">


      <!-- RIGHT COLUMN -->
       <div class="flex flex-col justify-between w-full">
        <!-- 🟢 TOP: NEXT IMAGES -->
         
         <div ref="scrollContainer" class="flex overflow-x-auto no-scrollbar scroll-smooth">
            <div class="flex flex-col gap-3 w-100 min-w-[250px] md:min-w-[420px] bg-white p-5 rounded-lg">
                <div>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                </div>
                <p class="text-xs">We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company</p>
                <div class="flex flex-row gap-3">
                    <img src="../../assets/yosef.png" alt="" class="h-10 rounded-full">
                    <div>
                        <p class="font-bold text-xs">Yosef Sahle</p>
                        <p class="text-xs text-gray-500">CEO, Company</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 w-100 min-w-[420px] bg-white p-5 rounded-lg">
                <div>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                </div>
                <p class="text-xs">We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company</p>
                <div class="flex flex-row gap-3">
                    <img src="../../assets/yosef.png" alt="" class="h-10 rounded-full">
                    <div>
                        <p class="font-bold text-sm">Yosef Sahle</p>
                        <p class="text-xs text-gray-500">CEO, Company</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 w-100 min-w-[420px] bg-white p-5 rounded-lg">
                <div>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                </div>
                <p class="text-xs">We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company</p>
                <div class="flex flex-row gap-3">
                    <img src="../../assets/yosef.png" alt="" class="h-10 rounded-full">
                    <div>
                        <p class="font-bold text-sm">Yosef Sahle</p>
                        <p class="text-xs text-gray-500">CEO, Company</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 w-100 min-w-[420px] bg-white p-5 rounded-lg">
                <div>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                    <i class="fa-solid fa-star text-[#FFD700] text-xs"></i>
                </div>
                <p class="text-xs">We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company</p>
                <div class="flex flex-row gap-3">
                    <img src="../../assets/yosef.png" alt="" class="h-10 rounded-full">
                    <div>
                        <p class="font-bold text-sm">Yosef Sahle</p>
                        <p class="text-xs text-gray-500">CEO, Company</p>
                    </div>
                </div>
            </div>
            
            
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