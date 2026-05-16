<script setup>
import { ref,computed } from 'vue'
const activeFilter = ref("all");

const scrollContainer = ref(null)

// 👉 Scroll functions
const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
}

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

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
}

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
  <div class="w-full mt-30 flex flex-col justify-between items-center gap-5">

    <!-- LEFT TEXT -->
    <div class="z-2 w-full flex flex-col md:flex-row gap-5 items-start md:items-end">
      <div class="flex flex-col md:w-1/3 items-center md:items-start gap-3">
        <p class="text-[#0DB760] border rounded-[50%_/_50%] w-22 font-bold text-center">
        Tools
      </p>

      <p class="text-3xl font-bold">
        Tools I Use to  
        <span class="text-[#0DB760]">Build</span>
      </p>
      </div>
      <div class="w-full md:w-2/3 flex flex-row gap-5 items-end justify-between md:justify-end md:pr-20">
        <i class="fa-solid fa-arrow-left-long cursor-pointer text-xl" @click="scrollLeft"></i>
        <i class="fa-solid fa-arrow-right-long cursor-pointer text-xl" @click="scrollRight"></i>
      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="flex w-full flex-col md:flex-row gap-5">


      <!-- RIGHT COLUMN -->
       <div class="flex flex-col justify-between w-full">
        <!-- 🟢 TOP: NEXT IMAGES -->
         
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

</div>

    </div>

  </div>
</template>

<style>
/* Hide scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  scrollbar-width: none;
}
</style>