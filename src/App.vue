<template>

    <Navbar />

    <main class="min-h-screen px-5 md:px-30">
      <router-view />
    </main>

</template>
<script setup>
import Navbar from "./components/common/navBar.vue";
</script>
