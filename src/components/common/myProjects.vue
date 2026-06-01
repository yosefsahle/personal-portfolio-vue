<script setup>
import { ref, computed } from "vue";
import { useTheme } from "../../composables/useTheme";


const activeFilter = ref("all");
const {lighMode} = useTheme();

const Projects = ref([  
  
  { name: "Ekubers", img: "ekubers.jpg", category: "Mobile/web", desciption:"lrb e",frameworks:['flutter.png','talwind.png'] },
  { name: "Search ET", img: "searchet.jpg", category: "Telegram Bot",desciption:"lorem ipusm deus to larget lteon lteon vghepnsv jsnon srpeatele al voe oebo eo ojrb e vghepnsv jsnon srpeatele al voe oebo eo ojrb e",frameworks:['react.png'] },
  
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

    <div :key="index" v-for="(item, index) in Projects" class="">
      <div class="flex flex-col md:flex-row relative">
        <div :class="lighMode?'bg-white':'bg-black'" class="flex h-5 absolute left-200 -top-2 z-2 text-black border rounded-full p-3 cursor-pointer gap-3 items-center">
          <img v-for="(fw, i) in item.frameworks" :key="i" :src="`/src/assets/icons/${fw}`" class="w-5 h-5 object-contain hover:scale-110 transition"/>
        </div>
        <div class="md:flex-3 w-full h-auto md:w-60 h-60 rounded-md border cursor-pointer border-red overflow-hidden items-center">
          <img class="w-full h-auto md:w-60 md:h-60 hover:scale-110 transition-transform duration-300" :src="`/src/assets/projects/${item.img}`" alt="">
        </div>
        <div class="w-full md:flex-9 md:min-w-200 border border-white rounded-md p-5 gap-2 flex flex-col">
          <p :class="lighMode?'text-black':'text-white'" class="w-full text-xl font-bold" >{{ item.name }}</p>
          <p :class="lighMode?'text-black':'text-white'" >{{ item.category }}</p>
          <p :class="lighMode?'text-black':'text-gray-400'" >{{ item.desciption }}</p>
        </div>
      </div>
  </div>
  </div>
</template>