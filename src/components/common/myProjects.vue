<script setup>
import { ref, computed } from "vue";

const activeFilter = ref("all");

const skills = ref([  
  
  { name: "eliora.com", img: "eliora.jpg", category: "web",  },
  { name: "NTRT.com", img: "hongkong.jpg", category: "web", },
  { name: "Vue", img: "prime.jpg", category: "web", },
  { name: "Bunna.et", img: "buna.jpg", category: "mobile",  },
  { name: "NTRT.com", img: "hongkong.jpg", category: "web", },
  { name: "Vue", img: "prime.jpg", category: "web", },
  
]);

const filteredSkills = computed(() => {
  if (activeFilter.value === "all") return skills.value;
  return skills.value.filter(
    (skill) => skill.category === activeFilter.value
  );
});

const setFilter = (filter) => {
  activeFilter.value = filter;
};
</script>

<template>
    <div class="flex items-center justify-center mt-20 flex-col gap-10">
      <div class="w-full flex flex-col md:flex-row justify-between items-center gap-5">
        <p class="text-4xl font-bold">My  <span class="text-[#0DB760]">Tools</span></p>
        <div class="z-2 flex md:gap-5 bg-[#0db760] w-full md:w-1/2 px-4 py-3 items-center justify-around rounded-full">
  <button
    @click="setFilter('all')"
    :class="activeFilter === 'all' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    All
  </button>

  <button
    @click="setFilter('web')"
    :class="activeFilter === 'web' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Web
  </button>

  <button
    @click="setFilter('mobile')"
    :class="activeFilter === 'mobile' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Mobile
  </button>

  <button
    @click="setFilter('backend')"
    :class="activeFilter === 'backend' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Backend
  </button>
  <button
    @click="setFilter('design')"
    :class="activeFilter === 'design' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Design
  </button>
</div>
</div>
<div class="mb-20 flex w-full flex-col md:flex-row gap-5">
   <div class="flex flex-col justify-between w-full">
      <div ref="scrollContainer" class="flex overflow-x-auto no-scrollbar scroll-smooth gap-5 py-5">
        <div v-for="(project, index) in filteredSkills" :key="index" class="w-100 min-w-[200px] md:min-w-[330px] h-90 rounded-lg shadow-lg shadow-gray-300 hover:shadow-gray-400 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div class="h-4/5 bg-gray-100 rounded-t-lg flex items-center justify-center overflow-hidden">
            <img :src="`/src/assets/projects/${project.img}`" class="object-contain transition-transform duration-300 hover:scale-110"/>
          </div>
          <div class="p-3 bg-white rounded-b-lg">
            <p class="text-sm">{{ project.name }}</p>
            <p class="text-xs text-gray-400">{{ project.category }}</p>
          </div>
        </div>  
      </div>
      <div class="w-full flex flex-row gap-5  justify-between">
          <i class="fa-solid fa-arrow-left-long cursor-pointer text-2xl" @click="scrollLeft"></i>
          <i class="fa-solid fa-arrow-right-long cursor-pointer text-2xl" @click="scrollRight"></i>
        </div>
    </div>
</div>
<!-- <div v-if="activeFilter !== 'all'" class="mb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 w-5/6">
  <div v-for="(skill, index) in filteredSkills" :key="index" class="h-40 rounded-lg shadow-lg shadow-gray-300 hover:shadow-gray-400 hover:scale-105 transition-transform duration-300 cursor-pointer">
    <div class="h-2/3 bg-gray-100 rounded-t-lg flex items-center justify-center">
      <img :src="`https://skillicons.dev/icons?i=${skill.icon}`" />
    </div>

    <div class="p-3 bg-white rounded-b-lg">
      <p class="text-sm">{{ skill.name }}</p>
      <p class="text-xs text-gray-400">{{ skill.type }}</p>
    </div>
  </div>
</div> -->
    </div>
</template>