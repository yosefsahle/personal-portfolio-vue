<template>
  <header
  :class="[
    'w-full sticky top-0 transition-all duration-300 px-5 md:px-20',
    isScrolled 
      ? 'bg-white shadow-md py-3 z-50' 
      : 'bg-white py-5'
  ]"
>
    <div class="container mx-auto flex items-center justify-between">

      <!-- Logo -->
      <p class="text-2xl font-bold text-[#0DB760] tracking-wide">
        Y.O.S.E.F
      </p>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <router-link
          v-for="item in links"
          :key="item.name"
          :to="item.path"
          class=" font-medium hover:text-[#0DB760] transition"
          :class="isActive(item.path) ? 'text-[#0DB760] font-semibold' : 'text-gray-600'"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <!-- CTA (Desktop) -->
      <button
        class="hidden md:block px-5 py-2 rounded-lg border-2 border-[#0DB760] text-[#0DB760] font-semibold hover:bg-[#0DB760] hover:text-white transition"
      >
        Download CV
      </button>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden flex flex-col gap-1"
        @click="toggleMenu"
      >
        <span class="w-6 h-0.5 bg-black"></span>
        <span class="w-6 h-0.5 bg-black"></span>
        <span class="w-6 h-0.5 bg-black"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="open"
      class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all"
    >
      <div class="flex flex-col gap-4 p-5">

        <router-link
          v-for="item in links"
          :key="item.name"
          :to="item.path"
          @click="closeMenu"
          class="text-sm hover:text-[#0DB760] transition"
          :class="isActive(item.path) ? 'text-[#0DB760] font-bold' : 'font-light text-gray-700'"
        >
          {{  item.name}}
        </router-link>

        <button
          class="mt-4 px-5 py-3 rounded-lg border-2 bg-[#0DB760] text-white font-semibold hover:bg-[#0DB760] hover:text-white transition"
        >
          Download CV
        </button>

      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const route = useRoute();

const open = ref(false);

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Me", path: "/me" },
];

const isActive = (path) => route.path === path;

const toggleMenu = () => {
  open.value = !open.value;
};

const closeMenu = () => {
  open.value = false;
};

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>