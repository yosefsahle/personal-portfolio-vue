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
  { name: "Kulfinet this is the best to build a lone and deploy to any platfrom", img: "hongkong.jpg", category: "Mobile", },
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
  <div class="mt-10">

    <p :class="lighMode ? 'text-black' : 'text-white'"
       class="text-4xl font-bold text-center ">
      Company <span class="text-[#0DB760]">Projects</span>
    </p>

    <!-- Masonry Layout -->
    <div class="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

      <div
        v-for="(item, index) in Projects"
        :key="index"
        class="break-inside-avoid group rounded-2xl overflow-hidden cursor-pointer"
      >
        <!-- Image -->
        <div class="relative overflow-hidden rounded-2xl">
          <img
            :src="`/src/assets/projects/${item.img}`"
            class="w-full object-cover group-hover:scale-110 transition duration-500"
          />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
            <p class="text-white text-lg font-semibold">{{ item.name }}</p>
            <p class="text-gray-300 text-sm">{{ item.category }}</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>