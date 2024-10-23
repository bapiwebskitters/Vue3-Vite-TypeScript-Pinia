<!-- src/components/Header.vue -->
<template>
    <header>
        <nav>
            <router-link to="/" exact-active-class="active-link">Home</router-link>
            <router-link to="/about" exact-active-class="active-link">About Us</router-link>
            <router-link to="/contact" exact-active-class="active-link">Contact Us</router-link>
            <router-link to="/login" exact-active-class="active-link">Login</router-link>
            <router-link to="/register" exact-active-class="active-link">Register</router-link>
        </nav>
    </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
