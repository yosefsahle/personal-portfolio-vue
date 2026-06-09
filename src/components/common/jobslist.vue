<script setup>
import { ref, computed } from "vue";
import { useTheme } from "../../composables/useTheme";

const {lighMode} = useTheme();

const activeFilter = ref("all");

const skills = ref([  
  
  { name: "Ekubers", icon: "ekubers.jpg", category: "logo", type: "Logo Design" },
  { name: "Search Et", icon: "searchet.jpg", category: "logo", type: "Logo Design" },
  { name: "Mati Barley", icon: "matiBarley.jpg", category: "logo", type: "Logo Design" },
  { name: "Monday Post", icon: "design.jpg", category: "social", type: "Social Post" },
  { name: "Monday Post", icon: "design-1.jpg", category: "social", type: "Social Post" },
  { name: "Monday Post", icon: "design-2.jpg", category: "social", type: "Social Post" },
  { name: "Monday Post", icon: "design-3.jpg", category: "social", type: "Social Post" },
  { name: "Monday Post", icon: "design-4.jpg", category: "social", type: "Social Post" },
  { name: "Monday Post", icon: "design-5.png", category: "social", type: "Social Post" },
  { name: "Monday Post", icon: "design-6.png", category: "social", type: "Social Post" },
  { name: "Monday Post", icon: "design-7.png", category: "social", type: "Social Post" },
  { name: "Monday Post", icon: "design-8.png", category: "social", type: "Social Post" },



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
    :class="activeFilter === 'all' ? lighMode? 'bg-white text-[#0DB760] px-5':'bg-black text-[#0DB760] px-5' : lighMode ?'text-white hover:bg-gray-100/10 text-sm':'text-black hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    All
  </button>

  <button
    @click="setFilter('logo')"
    :class="activeFilter === 'logo' ? lighMode? 'bg-white text-[#0DB760] px-5':'bg-black text-[#0DB760] px-5' : lighMode ?'text-white hover:bg-gray-100/10 text-sm':'text-black hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Logo
  </button>

  <button
    @click="setFilter('social')"
    :class="activeFilter === 'social' ? lighMode? 'bg-white text-[#0DB760] px-5':'bg-black text-[#0DB760] px-5' : lighMode ?'text-white hover:bg-gray-100/10 text-sm':'text-black hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Social
  </button>

  
  <button
    @click="setFilter('illustration')"
    :class="activeFilter === 'illustration' ? lighMode? 'bg-white text-[#0DB760] px-5':'bg-black text-[#0DB760] px-5' : lighMode ?'text-white hover:bg-gray-100/10 text-sm':'text-black hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Illustration
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