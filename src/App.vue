<template>
  <div class="px-30">
    <Navbar />

    <main class="min-h-screen">
      <router-view />
    </main>

  </div>
</template>
<script setup>
import Navbar from "./components/common/navBar.vue";
</script>
