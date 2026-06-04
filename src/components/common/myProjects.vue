<script setup>
import { ref, computed } from "vue";
import { useTheme } from "../../composables/useTheme";


const activeFilter = ref("all");
const {lighMode} = useTheme();

const Projects = ref([  
  
  { name: "Ekubers", img: "ekubers.jpg", category: "Mobile/web", desciption:"powerful platform that helps Ekub collectors manage their collections digitally — replacing paper records with a simple, modern system.",frameworks:['flutter.png','react.png','php.png'] },
  { name: "Search ET", img: "searchet.jpg", category: "Telegram Bot",desciption:"🚀 Start our bot and enjoy the best search experience! 🔍 Find what you need instantly ⚡️ Fast, smart & reliable results  🌍 Built for a seamless experience  ",frameworks:['telegram.png'] },
  
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
<div class="flex items-center justify-center mb-20 flex-col gap-10">
    <p :class="lighMode?'text-black':'text-gray-400'" class="text-center text-5xl font-bold">MY <span class="text-[#0DB760]">PROJECTS</span></p>

    <div :key="index" v-for="(item, index) in Projects" class="">
      <div class="flex flex-col md:flex-row relative gap-3">
        <div :class="lighMode?'bg-white':'bg-black'" class="hidden md:flex h-6 absolute left-200 -top-4 z-2 text-black border-gray-400 border rounded-full px-3 py-4 cursor-pointer gap-3 items-center">
          <img v-for="(fw, i) in item.frameworks" :key="i" :src="`/src/assets/icons/${fw}`" class="w-6 h-6 object-contain hover:scale-110 transition"/>
        </div>
        <div class="md:flex-3 w-full h-auto md:w-60 h-60 rounded-md border cursor-pointer border-red overflow-hidden items-center">
          <img class="w-full h-auto md:w-60 md:h-60 hover:scale-110 transition-transform duration-300" :src="`/projects/${item.img}`" alt="">
        </div>
        <div :class="lighMode?'shadow-[0_0_15px_rgba(0,0,0,0.25)]':'shadow-[0_0_15px_rgba(255,255,255,0.15)]'" class="w-full md:flex-9 md:min-w-200 rounded-md p-5 gap-2 flex flex-col  ">
          <p class="text-[#0DB760] w-full text-2xl font-bold" >{{ item.name }}</p>
          <p :class="lighMode?'text-gray-500':'text-gray-400'" >{{ item.category }}</p>
          <p :class="lighMode?'text-gray-400':'text-gray-600'" >{{ item.desciption }}</p>
          <div class="mt-3 md:hidden flex text-black cursor-pointer gap-5 items-center">
            <img v-for="(fw, i) in item.frameworks" :key="i" :src="`/src/assets/icons/${fw}`" class="w-8 h-8 object-contain hover:scale-110 transition"/>
          </div>
        </div>

      </div>
  </div>
  </div>
</template>