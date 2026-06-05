<script setup>
import { ref, computed } from "vue";
import { useTheme } from "../../composables/useTheme";

const {lighMode} = useTheme();

const activeFilter = ref("all");

const skills = ref([  
  
  { name: "Flutter", icon: "ekubers.jpg", category: "mobile", type: "Framework" },
  { name: "React", icon: "searchet.jpg", category: "design", type: "Framework" },
  { name: "Vue", icon: "eliora.jpg", category: "web", type: "Framework" },


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
        <p :class="lighMode?'text-black':'text-gray-400'" class="text-4xl font-bold">My <span class="text-[#0DB760]">Executions</span></p>
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
    @click="setFilter('design')"
    :class="activeFilter === 'design' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Design
  </button>
  <button
    @click="setFilter('others')"
    :class="activeFilter === 'others' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Others
  </button>
</div>
</div>

<div class="mb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
  <div :class="lighMode?'shadow-lg shadow-gray-400 hover:shadow-gray-500':'shadow-lg shadow-gray-300/20'" v-for="(skill, index) in filteredSkills" :key="index" class="rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
    <div class=" bg-gray-100 rounded-t-lg flex items-center justify-center overflow-hidden">
      <img :src="`/projects/${skill.icon}`" class="hover:scale-105 transition-transform duration-300"/>
    </div>

    <div :class="lighMode?'bg-white':'bg-gray-600/80'" class="p-3 rounded-b-lg">
      <p class="text-sm">{{ skill.name }}</p>
      <p class="text-xs text-gray-400">{{ skill.type }}</p>
    </div>
  </div>
</div>
    </div>
</template>