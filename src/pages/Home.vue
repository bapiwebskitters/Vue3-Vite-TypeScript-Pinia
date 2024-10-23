<!-- src/pages/Home.vue -->
<template>
    <section class="home">
        <div>
            <button type="button" class="btn btn-primary" @click="showToast">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>

            <button type="button" class="btn btn-link">Link</button>
        </div>
        <ServiceSection :services="services" viewAllLink="/services" />
    </section>
</template>

<script lang="ts" setup>
import { useToast } from 'vue-toast-notification';
import ServiceSection from '@/views/Home/ServiceSection.vue';
import { ref } from 'vue';

const $toast = useToast();

const showToast = () => {
    $toast.success("Button clicked!", {
        position: 'top-right',
    });
};

const services = ref([
    {
        title: 'Currency Wallet',
        description: 'Fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image: 'images/s1.png',
        link: '#',
    },
    {
        title: 'Security Storage',
        description: 'Fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image: 'images/s2.png',
        link: '#',
    },
    {
        title: 'Expert Support',
        description: 'Fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image: 'images/s3.png',
        link: '#',
    },
]);
</script>

<style scoped lang="scss"></style>
