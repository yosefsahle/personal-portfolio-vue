<template>
    <div class="flex flex-col md:flex-row mt-5 items-center ">
        <div class="h-140 md:h-108"></div>
        
        <div class="z-0 overflow-hidden absolute w-full md:w-5/6 h-full">
            <div class="top-30 left-20 absolute w-[30px] h-[30px] bg-[#3A86FF] rounded-[100%] blur-sm"></div>
            <div class="top-50 left-20 absolute w-[30px] h-[30px] bg-[#F4C430] rounded-[100%] blur-sm"></div>
            <div class="top-20 left-30 absolute w-[30px] h-[30px] bg-[#E63946] rounded-[100%] blur-sm"></div>
            <!-- <div class="top-10 left-50 absolute w-[30px] h-[30px] bg-[#3A86FF] rounded-[100%] blur-sm"></div> -->
            <div class="top-80 left-40 absolute w-[30px] h-[30px] bg-[#0DB760] rounded-[100%] blur-sm"></div>
            <div class="top-30 left-60 absolute w-[30px] h-[30px] bg-[#0DB760] rounded-[100%] blur-sm"></div>
            
            <!-- <div class="top-5 left-90 absolute w-[30px] h-[30px] bg-[#0DB760] rounded-[100%] blur-sm"></div> -->
            <div class="top-60 left-50 absolute w-[30px] h-[30px] bg-[#F4C430] rounded-[100%] blur-sm"></div>
            <div class="top-40 left-10 absolute w-[30px] h-[30px] bg-[#E63946] rounded-[100%] blur-sm"></div>
            <div class="top-20 left-90 absolute w-[30px] h-[30px] bg-[#3A86FF] rounded-[100%] blur-sm"></div>
            <!-- <div class="top-10 left-10 absolute w-[30px] h-[30px] bg-[#0DB760] rounded-[100%] blur-sm"></div> -->
            <div class="top-90 left-80 absolute w-[30px] h-[30px] bg-[#0DB760] rounded-[100%] blur-sm"></div>
            <div v-for="(skill, index) in skills" :key="index" :class="[ skill.z || 'z-2', skill.position,lighMode?'bg-white':'bg-[#0DB760]/50', 'absolute rounded-md shadow-lg flex items-center gap-5', skill.name ? 'px-2 py-2' : 'p-2', skill.float]">
                <img :src="`https://skillicons.dev/icons?i=${skill.icon}`" class="w-8"/>
                <!-- Show text only if exists -->
                 <span v-if="skill.name" class="hidden md:block">{{ skill.name }}</span>
            </div>
            <div class="hidden z-1 rotate-270 md:rotate-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-2 md:flex items-center w-full items-center justify-center">
                <p class="text-[#0DB760] text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">M</p>
                <p class="text-[#0DB760] text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">Y</p>
                <p :class="lighMode ? 'text-black':'text-white'" class="text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">&ensp;</p>
                <p :class="lighMode ? 'text-black':'text-white'" class="text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">P</p>
                <p :class="lighMode ? 'text-black':'text-white'" class="text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">R</p>
                <p :class="lighMode ? 'text-black':'text-white'" class="text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">O</p>
                <p :class="lighMode ? 'text-black':'text-white'" class="text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">J</p>
                <p :class="lighMode ? 'text-black':'text-white'" class="text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">E</p>
                <p :class="lighMode ? 'text-black':'text-white'" class="text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">C</p>
                <p :class="lighMode ? 'text-black':'text-white'" class="text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">T</p>
                <p :class="lighMode ? 'text-black':'text-white'" class="text-9xl font-extrabold z-1 hover:text-yellow-500 cursor-pointer hover:scale-130 transition-transform duration-300">S</p>

            </div>
            <div class=" md:hidden flex-col z-1 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-2 flex items-center w-full items-center justify-center">
                <p class="text-9xl font-bold text-[#0DB760]">My</p>
                <p :class="lighMode ? 'text-black':'text-white'" class="text-7xl font-bold">Projects</p>
            </div>


            <div class="md:top-30 top-80 md:right-20 right-8 absolute w-[100px] h-[100px] bg-[#F4C430] rounded-full blur-sm"></div>
            <div class="z-2 md:top-40 top-40 md:right-100 right-70 absolute w-[100px] h-[100px] bg-[#E63946] rounded-full blur-sm"></div>
            <div class="z-2 md:top-70 top-20 md:right-10 right-20 absolute w-[100px] h-[100px] bg-[#E63946] rounded-full blur-sm"></div>
            <div class="md:top-20 top-20 md:right-60 right-45 absolute w-[100px] h-[100px] bg-[#3A86FF] rounded-full blur-sm"></div>
            <div class="md:top-50 top-50 md:right-150 right-0 absolute w-[100px] h-[100px] bg-[#0DB760] rounded-full blur-sm"></div>
            <div class="md:top-35 top-35 md:right-22 right-10 absolute w-[300px] h-[300px] bg-[#F4C430] rounded-full blur-lg"></div>
            <div class="md:top-90 top-90 md:right-70 right-60 absolute w-[100px] h-[100px] bg-[#0DB760] rounded-full blur-sm"></div>
            <div class="md:top-85 top-90 md:left-20 right-8 absolute w-[100px] h-[100px] bg-[#E63946] rounded-full blur-sm"></div>
        </div>
        
        
    </div>
    <myProjects />
    
</template>
<script setup>
import myProjects from '../components/common/myProjects.vue';
import { useTheme } from '../composables/useTheme.js';
import companyProjects from '../components/common/companyProjects.vue'

const {lighMode} = useTheme();

const skills = [
  { name: "Html", icon: "html", position: "top-90 right-80", float: "float-1" },
  { name: "Flutter", icon: "flutter", position: "top-20 left-20", float: "float-2" },
  { name: "Nextjs", icon: "next", position: "top-40 right-20", float: "float-3" },
  { name: "Vue.js", icon: "vue", position: "top-50 left-80", float: "float-4" },
  { name: "Photoshop", icon: "photoshop", position: "top-85 left-60", float: "float-5" },
  { name: "React", icon: "react", position: "top-80 left-0", float: "float-6" },
  { name: "Angular", icon: "angular", position: "top-30 right-80", float: "float-7" },
  { name: "Illustrator", icon: "illustrator", position: "top-10 right-20", float: "float-8" },

  // icon-only ones
  { icon: "illustrator", position: "top-10 right-120", float: "float-1" },
  { icon: "react", position: "top-60 right-90", float: "float-1", z: "z-1" },
  { icon: "figma", position: "top-80 right-130", float: "float-1" },
  { icon: "illustrator", position: "top-80 right-60", float: "float-1" },
];
</script>