<template>
    <div class="main">
        <Upcoming />
        <Movies />
        <Tvs />
    </div>
</template>

<script setup>
import Movies from '@/components/MOT/Movies.vue';
import Tvs from '@/components/MOT/Tvs.vue';
import Upcoming from '@/components/Upcoming/Upcoming.vue';
</script>

<style lang="scss" scoped></style>