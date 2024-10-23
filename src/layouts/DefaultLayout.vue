<!-- src/layouts/DefaultLayout.vue -->
<template>
    <div>
        <Header />
        <main>
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from "../layouts/Header.vue";
import Footer from "../layouts/Footer.vue";
</script>

<style scoped lang="scss"></style>
