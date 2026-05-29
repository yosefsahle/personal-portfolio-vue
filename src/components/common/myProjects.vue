<script setup>
import { ref, computed } from "vue";
import { useTheme } from "../../composables/useTheme";


const activeFilter = ref("all");
const {lighMode} = useTheme();

const Projects = ref([  
  
  { name: "eliora.com", img: "eliora.jpg", category: "web",  },
  { name: "NTRT.com", img: "hongkong.jpg", category: "web", },
  { name: "Prime", img: "prime.jpg", category: "web", },
  { name: "Bunna.et", img: "buna.jpg", category: "mobile",  },
  { name: "Kulfinet", img: "hongkong.jpg", category: "Mobile", },
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
<div class="flex items-center justify-center mt-10 flex-col gap-10">

    <!-- <p :class="lighMode?'text-black':'text-gray-400'" class="text-center text-4xl font-bold">My  <span class="text-[#0DB760]">Projects</span></p> -->
  <div v-for="project in Projects" class="flex w-full flex-col gap-2">
    <div  class="flex gap-2">
      <div class="w-60 h-60 rounded-md border cursor-pointer border-red overflow-hidden items-center">
        <img class="w-60 h-60 hover:scale-110 transition-transform duration-300" :src="`/src/assets/projects/${project.img}`" alt="">
        
          <button class="relative left-15 bottom-10 z-2 text-black border border-white/40 rounded-full px-5 bg-white/40 hover:bg-black/40 hover:text-white transition-transform duration-300 cursor-pointer">Visite site <i class="fa-solid fa-arrow-right rotate-325"></i></button>
      </div>
      <div class="w-200 border rounded-md p-5">
        <p>{{ project.name }}</p>
        <p>{{ project.category }}</p>
      </div>
    </div>
  </div>
</div>
</template>