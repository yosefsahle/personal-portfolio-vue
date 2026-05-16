<template>
    <div class="flex flex-col md:flex-row mt-5 items-center ">
        <div class="z-2 w-full flex flex-col justify-between gap-5 items-center md:items-start animate-container">
            <p class="text-4xl md:text-5xl font-semibold animate-item delay-1">
             A Little About <span class="font-bold text-[#0DB760]">ME</span>
            </p>
            <p class="text-sm text-[#0DB760] animate-item delay-2">💻 Software Engineer | 🎨 Graphic Designer | 🎓 AAU Alum</p>
            <p class="text-sm md:text-md animate-item delay-3">I am a Software Engineer and Graphic Designer dedicated to the intersection of logic and aesthetics. A proud graduate of Addis Ababa University, I combine the structural discipline of engineering with a deep-seated passion for visual storytelling. Whether I’m writing clean, scalable code or crafting a brand identity from scratch, my goal is always to create seamless digital experiences</p>
            
        </div>
        <div class="z-1 w-full  flex justify-center items-center animate-item-side delay-4">
             
               <img src="../assets/yosefanimation-white.png" alt="" class="md:w-108 md:h-108">
        </div>
        
        <div class="z-0 overflow-hidden absolute w-full md:w-5/6 h-full">
            <div class="top-30 left-20 absolute w-[30px] h-[30px] bg-[#3A86FF] rounded-[100%] blur-sm float-1"></div>
            <div class="top-50 left-20 absolute w-[30px] h-[30px] bg-[#F4C430] rounded-[100%] blur-sm float-2"></div>
            <div class="top-20 left-30 absolute w-[30px] h-[30px] bg-[#E63946] rounded-[100%] blur-sm float-4"></div>
            <!-- <div class="top-10 left-50 absolute w-[30px] h-[30px] bg-[#3A86FF] rounded-[100%] blur-sm"></div> -->
            <div class="top-80 left-40 absolute w-[30px] h-[30px] bg-[#0DB760] rounded-[100%] blur-sm float-4"></div>
            <div class="top-30 left-60 absolute w-[30px] h-[30px] bg-[#0DB760] rounded-[100%] blur-sm float-1"></div>
            
            <!-- <div class="top-5 left-90 absolute w-[30px] h-[30px] bg-[#0DB760] rounded-[100%] blur-sm"></div> -->
            <div class="top-60 left-50 absolute w-[30px] h-[30px] bg-[#F4C430] rounded-[100%] blur-sm float-2"></div>
            <div class="top-40 left-10 absolute w-[30px] h-[30px] bg-[#E63946] rounded-[100%] blur-sm float-3"></div>
            <div class="top-20 left-90 absolute w-[30px] h-[30px] bg-[#3A86FF] rounded-[100%] blur-sm float-4"></div>
            <!-- <div class="top-10 left-10 absolute w-[30px] h-[30px] bg-[#0DB760] rounded-[100%] blur-sm"></div> -->
            <div class="top-90 left-80 absolute w-[30px] h-[30px] bg-[#0DB760] rounded-[100%] blur-sm float-1"></div>


            <div class="md:top-30 top-80 md:right-20 right-8 absolute w-[100px] h-[100px] bg-[#F4C430] rounded-full blur-sm float-1"></div>
            <div class="md:top-40 top-90 md:right-80 right-70 absolute w-[100px] h-[100px] bg-[#E63946] rounded-full blur-sm float-2"></div>
            <div class="md:top-20 top-70 md:right-60 right-45 absolute w-[100px] h-[100px] bg-[#3A86FF] rounded-full blur-sm float-3"></div>
            <div class="md:top-50 top-100 md:right-10 right-0 absolute w-[100px] h-[100px] bg-[#0DB760] rounded-full blur-sm float-4"></div>
            <div class="md:top-35 top-85 md:right-22 right-10 absolute w-[300px] h-[300px] bg-[#F4C430] rounded-full blur-lg float-1"></div>
            <div class="md:top-90 top-140 md:right-70 right-60 absolute w-[100px] h-[100px] bg-[#0DB760] rounded-full blur-sm float-2"></div>
            <div class="md:top-85 top-140 md:right-20 right-8 absolute w-[100px] h-[100px] bg-[#E63946] rounded-full blur-sm float-3"></div>
        </div>
        
    </div>
    <AboutEducation/>
    <AboutSkills/>

    <!-- <div>
            <div class="flex flex-wrap gap-5 mt-5">
                <CircularProgress percentage="90" skill="JavaScript"/>
                <CircularProgress percentage="85" skill="Vue.js"/>
                <CircularProgress percentage="80" skill="HTML & CSS"/>
                <CircularProgress percentage="75" skill="Node.js"/>
                <CircularProgress percentage="70" skill="Python"/>
                <CircularProgress percentage="65" skill="Graphic Design"/>
            </div>
        </div> -->
    
</template>
<script setup>
import CircularProgress from '../components/reusables/CircularProgress.vue';
import AboutSkills from '../components/common/about-skills.vue';
import AboutEducation from '../components/common/aboutEducation.vue';
</script>