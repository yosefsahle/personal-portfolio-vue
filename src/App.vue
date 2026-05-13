<template>

    <Navbar />

    <main class="min-h-screen px-5 md:px-20 overflow-hidden">
      <router-view />
    </main>

    <Footer />

</template>
<script setup>
import Navbar from "./components/common/navBar.vue";
import Footer from "./components/common/footer.vue";
</script>
