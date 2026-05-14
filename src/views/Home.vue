<template>
    
    <div class="flex flex-col md:flex-row mt-5 items-center ">
        <div class="z-2 w-full flex flex-col justify-between gap-5 items-center md:items-start">
            <p class="text-[#0DB760] border  rounded-[50%_/_50%] w-22 font-bold center text-center animate-item delay-1">Welcome</p>
            <p class="text-4xl md:text-5xl font-semibold animate-item delay-2">
                I have <span class="font-bold text-[#0DB760]">Creative Design</span> Experience
            </p>
            <p class="text-sm md:text-md animate-item delay-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempora porro expedita, fugiat alias vel vero?</p>
            <div class="flex gap-5 animate-item delay-4">
                <button class="bg-[#0DB760] px-4 py-2 rounded-md text-white font-semibold text-xs md:text-md cursor-pointer">Contact Me</button>
                <button class="text-xs md:text-md gap-2 flex items-center cursor-pointer">
                    View Portfolio
                    <i class="fa-solid fa-arrow-right-long text-[#0DB760] rotate-325"></i>
                </button>
            </div>
        </div>
        <div class="w-full  flex justify-center items-center animate-item-side delay-3">
             
               <img src="../assets/portmainsharp.png" alt="" class="w-100 h-100">
        </div>
        <div class="flex flex-row md:flex-col justify-between items-center w-full md:w-0 md:h-80 animate-item delay-4">
            <p class="hidden md:block h-[120px] text-md font-thin text-[#0DB760] md:[writing-mode:vertical-rl] [text-orientation:mixed] ">Follow Me On</p>
            <div class="hidden md:block md:w-[1px] md:h-20 bg-[#0DB760]"></div>
            <a href="https://www.linkedin.com/in/yosef-sahle/" target="_blank" class="w-20 h-15 md:w-7 md:h-7 bg-[#0DB760] items-center flex justify-center"><i class="fa-brands fa-linkedin-in text-white"></i></a>
            <a href="https://github.com/yosefsahle" target="_blank" class="w-20 h-15 md:w-7 md:h-7 bg-[#0DB760] items-center flex justify-center"><i class="fa-brands fa-github text-white"></i></a>
            <a href="https://www.behance.net/yosefsahle" target="_blank" class="w-20 h-15 md:w-7 md:h-7 bg-[#0DB760] items-center flex justify-center"><i class="fa-brands fa-behance text-white"></i></a>
        </div>
        <div class="z-0 overflow-hidden absolute w-full md:w-5/6 h-full">
            <div class="top-20 left-50 absolute w-[10px] h-[10px] bg-[#0DB760] rounded-[100%]"></div>
            <div class="top-50 left-20 absolute w-[10px] h-[10px] bg-[#F4C430] rounded-[100%]"></div>
            <div class="top-90 left-10 absolute w-[10px] h-[10px] bg-[#E63946] rounded-[100%]"></div>
            <div class="top-50 left-90 absolute w-[10px] h-[10px] bg-[#3A86FF] rounded-[100%]"></div>
            <div class="top-80 left-70 absolute w-[10px] h-[10px] bg-[#0DB760] rounded-[100%]"></div>
            <div class="top-20 left-80 absolute w-[10px] h-[10px] bg-[#0DB760] rounded-[100%]"></div>
            
            <div class="top-10 left-90 absolute w-[10px] h-[10px] bg-[#0DB760] rounded-[100%]"></div>
            <div class="top-60 left-50 absolute w-[10px] h-[10px] bg-[#F4C430] rounded-[100%]"></div>
            <div class="top-40 left-10 absolute w-[10px] h-[10px] bg-[#E63946] rounded-[100%]"></div>
            <div class="top-20 left-90 absolute w-[10px] h-[10px] bg-[#3A86FF] rounded-[100%]"></div>
            <div class="top-30 left-70 absolute w-[10px] h-[10px] bg-[#0DB760] rounded-[100%]"></div>
            <div class="top-90 left-80 absolute w-[10px] h-[10px] bg-[#0DB760] rounded-[100%]"></div>
        </div>

    </div>

    
    

    <homeCounter />
        <homeSkill />
        <homeProjects />
        <testimonials />
        <homeFooter />  

    <div class="mt-15"></div>
</template>

<script setup>
import homeProjects from '../components/common/homeProjects.vue';
import testimonials from '../components/common/testimonials.vue';
import homeSkill from '../components/common/homeSkill.vue';
import homeCounter from '../components/common/homeCounter.vue';
import homeFooter from '../components/common/homeFooter.vue';
</script>