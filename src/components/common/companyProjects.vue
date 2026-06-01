<script setup>
import { ref, computed } from "vue";
import { useTheme } from "../../composables/useTheme";
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (link) => {
  if (!link) return;

  // ensure it has https
  const url = link.startsWith("http") ? link : `https://${link}`;

  window.open(url, "_blank");
};


const activeFilter = ref("all");
const {lighMode} = useTheme();

const Projects = ref([  
  { name: "Kulfinet", img: "kulfinet.jpg", category: "Mobile/Web", link:"kulfinet.com", active:true,date: "2025-06-01" },  
  { name: "Hong Kong Recilence Times Technology Co. Ltd", img: "hongkong.jpg", category: "web", link:"",active:false,date: "2024-08-22"},
  { name: "Eliora Visuals", img: "eliora.jpg", category: "web", link:"elioravisuals.com",active:true,date: "2026-04-4" },
  { name: "Sparaz Shop", img: "sparaz.jpg", category: "Web",link:"",active:false,date: "2025-03-23" },
  { name: "Prime Trading PLC", img: "prime.jpg", category: "web",link:"primetradinget.com",active:true,date: "2025-05-30" },
  { name: "Bunna.et", img: "buna.jpg", category: "Web",link:"",active:false,date: "2024-08-28" },
  
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

const sortedProjects = computed(() => {
  return [...Projects.value].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
});
</script>

<template>
  <div class="mt-10">

    <p :class="lighMode ? 'text-black' : 'text-white'"
       class="text-4xl font-bold text-center ">
      Company <span class="text-[#0DB760]">Projects</span>
    </p>

    <!-- Masonry Layout -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  <div
  v-for="(item, index) in sortedProjects"
  :key="index"
  @click="goTo(item.link)"
  class="group rounded-2xl overflow-hidden cursor-pointer"
>
    <div class="relative overflow-hidden rounded-2xl">
      <img
        :src="`/src/assets/projects/${item.img}`"
        class="w-full object-cover group-hover:scale-110 transition duration-500"
      />

      <div class="absolute inset-0 z-2 transition duration-300 flex flex-col justify-start items-end p-4">
        <p :class="item.active ? 'text-green-600':'text-red-600'" class="text-lg font-semibold">{{ item.active ? '🟢 Active':'🔴 Deactive' }}</p>
      </div>
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
        <p class="text-white text-lg font-semibold">{{ item.name }}</p>
        <p class="text-gray-300 text-sm">{{ item.category }}</p>
      </div>
      
    </div>
  </div>

</div>
  </div>
</template>