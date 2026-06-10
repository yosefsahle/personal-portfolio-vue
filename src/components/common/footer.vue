<template>
    <div :class="lighMode ? 'bg-white':'bg-black'">
    <div :class="lighMode ? 'border-gray-300':'border-gray-600'" class="mx-5 md:mx-20 flex flex-col-reverse md:flex-row gap-5 border-t-1  py-5 justify-between items-center">
        <P :class="lighMode ? 'text-black':'text-gray-400'">&copy; 2023. All rights reserved.</P>
        <p :class="lighMode ? 'text-black':'text-gray-400'">Designed by Yosef Sahle</p>
        <div class="flex gap-10 md:gap-3"> 
            <a href="https://www.linkedin.com/in/yosef-sahle/" target="_blank" class="w-10 h-10 md:w-6 md:h-6 bg-[#0DB760] items-center flex justify-center md:rounded-full"><i class="fa-brands fa-linkedin-in text-white text-xl md:text-xs"></i></a>
            <a href="https://github.com/yosefsahle" target="_blank" class="w-10 h-10 md:w-6 md:h-6 bg-[#0DB760] items-center flex justify-center md:rounded-full"><i class="fa-brands fa-github text-white text-xl md:text-xs"></i></a>
            <a href="https://www.behance.net/yosefsahle" target="_blank" class="w-10 h-10 md:w-6 md:h-6 bg-[#0DB760] items-center flex justify-center md:rounded-full"><i class="fa-brands fa-behance text-white text-xl md:text-xs"></i></a>
            <a href="https://www.upwork.com/freelancers/yosefsahle" target="_blank" class="w-10 h-10 md:w-6 md:h-6 bg-[#0DB760] items-center flex justify-center md:rounded-full"><i class="fa-brands fa-upwork text-white text-xl md:text-xs"></i></a>
            <a href="https://www.instagram.com/yosefsahle48?igsh=MXNmNzRuaTlhcHRrMw==" target="_blank" class="w-10 h-10 md:w-6 md:h-6 bg-[#0DB760] items-center flex justify-center md:rounded-full"><i class="fa-brands fa-instagram text-white text-xl md:text-xs"></i></a>
        </div>
    </div>
    </div>
</template>
<script setup>
import { useTheme } from '../../composables/useTheme';

const { lighMode } = useTheme();
</script>