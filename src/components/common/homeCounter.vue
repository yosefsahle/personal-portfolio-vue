<template>
  <div 
    ref="sectionRef"
    class="hidden w-full mt-30 md:flex gap-1 justify-between"
  >
    
    <div class="flex flex-col gap-3 items-start animate-item delay-1">
      <p class="text-2xl md:text-5xl font-bold text-[#0DB760]">
        {{ clients }}+
      </p>
      <p class="text-sm md:text-2xl">Satisfied clients</p>
    </div>

    <div class="w-[1px] h-20 bg-[#0DB760]"></div>

    <div class="flex flex-col gap-3 items-start animate-item delay-2">
      <p class="text-2xl md:text-5xl font-bold text-[#0DB760]">
        {{ projects }}+
      </p>
      <p class="text-sm md:text-2xl">Projects completed</p>
    </div>

    <div class="w-[1px] h-20 bg-[#0DB760]"></div>

    <div class="flex flex-col gap-3 items-start animate-item delay-3">
      <p class="text-2xl md:text-5xl font-bold text-[#0DB760]">
        {{ reviews }}+
      </p>
      <p class="text-sm md:text-2xl">Reviews given</p>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)

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

        animateCounter(80, clients)
        animateCounter(6, projects)
        animateCounter(99, reviews)

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