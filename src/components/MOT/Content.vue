<template>
    <div>
        https://api.themoviedb.org/3/movie/popular
        https://api.themoviedb.org/3/tv/popular
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePopular } from '@/stores/popular'

const props = defineProps(['type'])
const popular = usePopular()



onMounted(() => {
    popular.getPopular({ type: props.type })
})
</script>

