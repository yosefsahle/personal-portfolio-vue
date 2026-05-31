<script setup>
import { ref, computed } from "vue";
import { useTheme } from "../../composables/useTheme";


const activeFilter = ref("all");
const {lighMode} = useTheme();

const Projects = ref([  
  
  { name: "eliora.com", img: "eliora.jpg", category: "web", desciption:"lorem ipusm deus to larget hteon vghepnsv jsnon srpeatele al voe oebo eoben balel nvosrfnvajlorem ipusm deus to larget hteon vghepnsv jsnon srpeatele  ojrb e" },
  { name: "NTRT.com", img: "hongkong.jpg", category: "web",desciption:"lorem ipusm deus to larget hteon vghepnsv jsnon srpeatele al voe oebo eoben balel nvosrfnvaj rlorem ipusm deus to larget hteon vghepnsv jsnon srpeatele  ojrb e" },
  { name: "Prime", img: "prime.jpg", category: "web", desciption:"lorem ipusm deus to larget hteon vghepnsv jsnon srpeatele al voe oebo eoben balel nvosrfnvaj lorem ipusm deus to larget hteon vghepnsv jsnon srpeatele r ojrb e"},
  { name: "Bunna.et", img: "buna.jpg", category: "mobile", desciption:"lorem ipusm deus to larget hteon vghepnsv jsnon srpeatele al voe oebo eoben balel nvosrfnvaj rlorem ipusm deus to larget hteon vghepnsv jsnon srpeatele  ojrb e" },
  { name: "Kulfinet this is the best to build a lone and deploy to any platfrom", img: "hongkong.jpg", category: "Mobile",desciption:"lorem ipusm deus to larget hteon vghepnsv jsnon srpeatele al voe oebo eoben balel nvosrfnvaj rlorem ipusm deus to larget hteon vghepnsv jsnon srpeatele  ojrb e" },
  { name: "Vue", img: "prime.jpg", category: "web",desciption:"lorem ipusm deus to larget hteon vghepnsv jsnon srpeatele al voe oebo eoben balel nvosrfnvaj rlorem ipusm deus to larget hteon vghepnsv jsnon srpeatele  ojrb e" },
  
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
      <div class="flex">
        <div :class="lighMode?'bg-white':'bg-black'" class="flex h-5 relative left-200 bottom-2 z-2 text-black border  rounded-full px-5 cursor-pointer"><i class="relative left-200 bottom-2 fa-brands fa-flutter"></i></div>
        <div class="flex-3 w-60 h-60 rounded-md border cursor-pointer border-red overflow-hidden items-center">
          <img class="w-60 h-60 hover:scale-110 transition-transform duration-300" :src="`/src/assets/projects/${item.img}`" alt="">
        </div>
        <div class="flex-9 border border-white rounded-md p-5 gap-2 flex flex-col">
          <p :class="lighMode?'text-black':'text-white'" >{{ item.name }}</p>
          <p :class="lighMode?'text-black':'text-white'" >{{ item.category }}</p>
          <p :class="lighMode?'text-black':'text-gray-400'" >{{ item.desciption }}</p>
        </div>
      </div>
  </div>
  </div>
</template>