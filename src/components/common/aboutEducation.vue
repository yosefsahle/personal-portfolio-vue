<template>
  <div class="w-full bg-white flex flex-col items-center gap-10 mt-20">

    <!-- Title -->
    <p class="text-4xl font-bold">
                My  <span class="text-[#0DB760]">Education</span>
            </p>

    <!-- Timeline -->
    <div class="hidden md:block relative w-full max-w-6xl">

      <!-- Center Line -->
      <div class="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200"></div>

      <div class="flex justify-between items-center relative">

        <div
          v-for="(item, index) in education"
          :key="index"
          class="relative flex flex-col items-center w-1/4"
        >

          <!-- TOP CARD -->
          <div
            v-if="index % 2 === 0"
            class="cursor-pointer mb-10 bg-white shadow-xl rounded-2xl p-5 w-80 gap-5 flex text-center hover:scale-105 transition"
          >
            <div>
                <img :src="item.logo" :alt="item.school" class="w-15">
            </div>
            <div>
            <h3 class="text-sm font-semibold text-[#0DB760]">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-700 mt-1">
              {{ item.school }}
            </p>
            <p class="text-xs text-gray-400">
              {{ item.field }}
            </p>
            </div>
          </div>

          <!-- LINE TO DOT -->
          <div class="w-[2px] h-6 bg-gray-300"></div>

          <!-- DOT -->
          <div class="w-25 h-8 bg-[#0DB760] rounded-full shadow-lg border-4 border-white z-10 text-white text-xs items-center justify-center flex">{{ item.year }}</div>

          <!-- LINE DOWN -->
          <div class="w-[2px] h-6 bg-gray-300"></div>

          <!-- BOTTOM CARD -->
          <div
            v-if="index % 2 !== 0"
            class="cursor-pointer mt-10 bg-white shadow-xl rounded-2xl p-5 w-70 gap-5 text-center hover:scale-105 transition flex items-center"
          >
            <div>
                <img :src="item.logo" :alt="item.school" class="w-15">
            </div>
            <div>
            <h3 class="text-sm font-semibold text-[#0DB760]">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-700 mt-1">
              {{ item.school }}
            </p>
            <p class="text-xs text-gray-400">
              {{ item.field }}
            </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="md:hidden flex flex-col gap-6 w-full">
    <div v-for="(item, index) in education" :key="index" class=" flex flex-col items-center">
      <div class="w-full flex bg-white shadow-lg rounded-xl p-4 gap-3"> 
        <div>
          <img :src="item.logo" :alt="item.school" class="w-15">
        </div>
        <div>
          <h3 class="text-[#0DB760] font-semibold">{{ item.title }}</h3>
          <p class="text-sm">{{ item.school }}</p>
          <p class="text-xs text-gray-400">{{ item.field }}</p>
        </div>
        <p class="text-xs text-gray-400 text-center absolute right-0 bg-[#0DB760] right-10 text-white px-2 py-1 rounded-full">{{ item.year }}</p>
      </div>
      <div v-if="education.length - 1 !== index" class="w-[2px] h-3 bg-[#0DB760]"></div>
      <div v-if="education.length - 1 !== index" class="w-6 h-6 bg-[#0DB760] rounded-full shadow-lg border-4 border-white z-10 text-white text-xs items-center justify-center flex"></div>
      <div v-if="education.length - 1 !== index" class="w-[2px] h-3 bg-gray-300"></div>
    </div>
  </div>
  </div>
  


</template>
<script setup>
const education = [
  {
    title: "Preparatory",
    school: "Atlas School",
    field: "High School Education",
    logo:"https://atlasschool1994.com/wp-content/uploads/2024/04/atlasSchoolLogo-removebg-preview-300x271.png",
    year: "2010 - 2012"
  },
  {
    title: "First Degree",
    school: "Addis Ababa University",
    field: "Software Engineering",
    logo:"https://www.aau.edu.et/images/aauLogo.png",
    year: "July 2024"
  },
  {
    title: "Second Degree",
    school: "Hope University College",
    field: "Accounting",
    logo:"https://www.heuc.edu.et/_next/static/media/org-logo-removebg-preview%201.41743e7d.jpg",
    year: "2017 - 2020"
  },
  {
    title: "Masters Degree",
    school: "Holistic College",
    field: "Leadership",
    logo:"https://www.holisticbiblecollege.com/assets/logohbc.jpg",
    year: "2021 - 2023"
  },
];
</script>