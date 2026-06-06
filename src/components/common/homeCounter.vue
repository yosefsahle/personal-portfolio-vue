<template>
  <div class="z-0 overflow-hidden absolute w-full md:w-5/6 h-full">
            <div class="top-20 right-120 absolute w-[20px] h-[20px] bg-[#F4C430] rounded-[100%] float-1 blur-xs opacity-80"></div>
            <div class="top-10 right-20 absolute w-[20px] h-[20px] bg-[#F4C430] rounded-[100%] float-2 blur-xs opacity-80"></div>
            <div class="top-30 left-60 absolute w-[50px] h-[50px] bg-[#F4C430] rounded-[100%] float-3 blur-xs opacity-80"></div>
            <div class="top-60 left-90 absolute w-[20px] h-[20px] bg-[#3A86FF] rounded-[100%] float-4 blur-xs opacity-80"></div>
            <div class="top-20 left-70 absolute w-[20px] h-[20px] bg-[#F4C430] rounded-[100%] float-1 blur-xs opacity-80"></div>
            <div class="top-15 right-50 absolute w-[20px] h-[20px] bg-[#0DB760] rounded-[100%] float-2 blur-xs opacity-80"></div>
            </div>
  <div 
    ref="sectionRef"
    class="hidden w-full mt-30 md:flex gap-1 justify-between"
  >
    
    <div class="flex flex-col gap-3 items-start animate-item delay-1">
      <p  class="text-2xl md:text-5xl font-bold text-[#0DB760]">
        {{ clients }}+
      </p>
      <p :class="lighMode ? 'text-black':'text-gray-400'" class="text-sm md:text-2xl">Satisfied clients</p>
    </div>

    <div class="w-[1px] h-20 bg-[#0DB760]"></div>

    <div class="flex flex-col gap-3 items-start animate-item delay-2">
      <p class="text-2xl md:text-5xl font-bold text-[#0DB760]">
        {{ projects }}+
      </p>
      <p :class="lighMode ? 'text-black':'text-gray-400'" class="text-sm md:text-2xl">Projects completed</p>
    </div>

    <div class="w-[1px] h-20 bg-[#0DB760]"></div>

    <div class="flex flex-col gap-3 items-start animate-item delay-3">
      <p class="text-2xl md:text-5xl font-bold text-[#0DB760]">
        {{ reviews }}+
      </p>
      <p :class="lighMode ? 'text-black':'text-gray-400'" class="text-sm md:text-2xl">Reviews given</p>
    </div>

  </div>
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
            <div class="top-20 right-10 absolute w-[80px] h-[80px] bg-[#E63946] rounded-[100%] float-2 blur-xl"></div>
        </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from '../../composables/useTheme'

const sectionRef = ref(null)
const {lighMode} = useTheme();

const clients = ref(0)
const projects = ref(0)
const reviews = ref(0)

const hasAnimated = ref(false)

const animateCounter = (target, refVar, duration = 1500) => {
  let start = 0
  const increment = target / (duration / 16)

  const counter = setInterval(() => {
    start += increment

    if (start >= target) {
      refVar.value = target
      clearInterval(counter)
    } else {
      refVar.value = Math.floor(start)
    }
  }, 16)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]

      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true

        animateCounter(6, clients)
        animateCounter(6, projects)
        animateCounter(10, reviews)

        observer.disconnect() // stop observing after trigger
      }
    },
    {
      threshold: 0.3 // triggers when 30% visible
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>