<template>
    <section class="service_section layout_padding">
        <div class="service_container">
            <div class="container">
                <div class="heading_container heading_center">
                    <h2>
                        Our <span>Services</span>
                    </h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration.
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-4" v-for="(service, index) in services" :key="index">
                        <div class="box">
                            <div class="img-box">
                                <img :src="service.image" alt="" />
                            </div>
                            <div class="detail-box">
                                <h5>{{ service.title }}</h5>
                                <p>{{ service.description }}</p>
                                <a :href="service.link">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-box">
                    <a :href="viewAllLink">View All</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// Define service type for better type-checking
interface Service {
    title: string;
    description: string;
    image: string;
    link: string;
}

// Define props with types
const props = defineProps<{
    services: Service[];
    viewAllLink?: string;
}>();

// Destructure props for ease of use
const { services, viewAllLink = '#' } = props;
</script>

<style scoped lang="scss">

</style>
