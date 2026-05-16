<script setup>
import { ref, computed } from "vue";

const activeFilter = ref("all");

const skills = ref([  
  
  { name: "Flutter", icon: "flutter", category: "mobile", type: "Framework" },
  { name: "React", icon: "react", category: "web", type: "Framework" },
  { name: "Vue", icon: "vue", category: "web", type: "Framework" },
  { name: "Angular", icon: "angular", category: "web", type: "Framework" },
  { name: "Kotlin", icon: "kotlin", category: "mobile", type: "Language" },
  { name: "Next.js", icon: "nextjs", category: "web", type: "Framework" },
  { name: "Django", icon: "django", category: "backend", type: "Framework" },
  { name: "Tailwind", icon: "tailwind", category: "web", type: "Framework" },
  { name: "Bootstrap", icon: "bootstrap", category: "web", type: "Framework" },
  { name: "HTML", icon: "html", category: "web", type: "Markup" },
  { name: "CSS", icon: "css", category: "web", type: "Style" },

  { name: "Dart", icon: "dart", category: "mobile", type: "Language" },
  { name: "Python", icon: "py", category: "backend", type: "Language" },
  { name: "JavaScript", icon: "js", category: "web", type: "Language" },
  { name: "TypeScript", icon: "ts", category: "web", type: "Language" },
  { name: "Java", icon: "java", category: "backend", type: "Language" },
  { name: "PHP", icon: "php", category: "backend", type: "Language" },

  
  { name: "Firebase", icon: "firebase", category: "backend", type: "BaaS" },
  { name: "MySQL", icon: "mysql", category: "backend", type: "Database" },
  { name: "Postgres", icon: "postgres", category: "backend", type: "Database" },

  { name: "Figma", icon: "figma", category: "design", type: "UI/UX" },
  { name: "Photoshop", icon: "photoshop", category: "design", type: "Design" },
  { name: "Illustrator", icon: "illustrator", category: "design", type: "Design" },
  { name: "XD", icon: "xd", category: "design", type: "UI/UX" },

  { name: "Postman", icon: "postman", category: "backend", type: "Tool" },
  
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
    <div class="flex items-center justify-center mt-20 flex-col gap-10">
      <div class="w-full flex flex-col md:flex-row justify-between items-center gap-5">
        <p class="text-4xl font-bold">My  <span class="text-[#0DB760]">Tools</span></p>
        <div class="z-2 flex md:gap-5 bg-[#0db760] w-full md:w-1/2 px-4 py-3 items-center justify-around rounded-full">
  <button
    @click="setFilter('all')"
    :class="activeFilter === 'all' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    All
  </button>

  <button
    @click="setFilter('web')"
    :class="activeFilter === 'web' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Web
  </button>

  <button
    @click="setFilter('mobile')"
    :class="activeFilter === 'mobile' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Mobile
  </button>

  <button
    @click="setFilter('backend')"
    :class="activeFilter === 'backend' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Backend
  </button>
  <button
    @click="setFilter('design')"
    :class="activeFilter === 'design' ? 'bg-white text-[#0DB760] px-5' : 'text-white hover:bg-gray-100/10 text-sm'"
    class="md:w-1/4 py-2 rounded-full transition cursor-pointer"
  >
    Design
  </button>
</div>
</div>
<div v-if="activeFilter === 'all'" class="mb-20 flex w-full flex-col md:flex-row gap-5">
   <div class="flex flex-col justify-between w-full">
      <div ref="scrollContainer" class="flex overflow-x-auto no-scrollbar scroll-smooth gap-5 py-5">
        <div v-for="(skill, index) in filteredSkills" :key="index" class="w-100 min-w-[150px] md:min-w-[150px] h-40 rounded-lg shadow-lg shadow-gray-300 hover:shadow-gray-400 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div class="h-2/3 bg-gray-100 rounded-t-lg flex items-center justify-center">
            <img :src="`https://skillicons.dev/icons?i=${skill.icon}`" />
          </div>
          <div class="p-3 bg-white rounded-b-lg">
            <p class="text-sm">{{ skill.name }}</p>
            <p class="text-xs text-gray-400">{{ skill.type }}</p>
          </div>
        </div>  
      </div>
      <div class="w-full flex flex-row gap-5  justify-between">
          <i class="fa-solid fa-arrow-left-long cursor-pointer text-2xl" @click="scrollLeft"></i>
          <i class="fa-solid fa-arrow-right-long cursor-pointer text-2xl" @click="scrollRight"></i>
        </div>
    </div>
</div>
<div v-if="activeFilter !== 'all'" class="mb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 w-5/6">
  <div v-for="(skill, index) in filteredSkills" :key="index" class="h-40 rounded-lg shadow-lg shadow-gray-300 hover:shadow-gray-400 hover:scale-105 transition-transform duration-300 cursor-pointer">
    <div class="h-2/3 bg-gray-100 rounded-t-lg flex items-center justify-center">
      <img :src="`https://skillicons.dev/icons?i=${skill.icon}`" />
    </div>

    <div class="p-3 bg-white rounded-b-lg">
      <p class="text-sm">{{ skill.name }}</p>
      <p class="text-xs text-gray-400">{{ skill.type }}</p>
    </div>
  </div>
</div>
    </div>
</template>