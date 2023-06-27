<template>
    <section class="main__video">
        <router-link :to="`${props.type}/`" class="main__video-title">
            <span>
                {{ props.type == 'movie' ? "Фильмы" : "Сериалы" }}
            </span>
            <img src="@/assets/images/arrow.png" alt="">
        </router-link>
        <Swiper :modules="modules" :space-between="25" :navigation="true" :breakpoints="swiperOptions.breakpoints">
            <SwiperSlide class="main__video-item" v-for="(item, idx) in content">
                <img v-lazy="imgUrlFull + item.backdrop_path" class="main__video-item-img" alt="">
                <router-link :to="`${props.type}/` " class="main__video-item-link" />
                <h2 class="main__video-item-title">{{ item.title || item.name }}</h2>
            </SwiperSlide>

        </Swiper>
    </section>
</template>


<script setup>
import { onMounted, ref, computed } from 'vue';
import { usePopular } from '@/stores/popular'
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import { imgUrlFull } from '@/static'
const props = defineProps(['type'])
const popular = usePopular()

let modules = ref([Navigation])

const content = computed(() => props.type == 'movie' ? popular.popularMovies : popular.popularTvs)

let swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1420: {
            slidesPerView: 5,
        },
    }
})

onMounted(() => {
    popular.getPopular({ type: props.type })
})
</script>

