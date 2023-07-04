<template>
    <div class="infoblock" :class="{ active: open }">
        <img src="@/assets/images/close.svg" class="infoblock__close" @click="$emit('close')" alt="">
        <div class="infoblock__block">
            <img src="@/assets/images/block.jpg" class="infoblock__block-img" alt="">
            <div class="infoblock__block-content">
                <div class="infoblock__block-info">
                    <h2 class="infoblock__block-title">
                        шан-чи
                    </h2>
                    <p class="infoblock__block-info_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas eum veritatis excepturi ipsa
                        eligendi sit. Magnam animi nisi est libero deleniti praesentium molestiae iusto quia, hic officiis
                        qui provident?
                    </p>
                    <p class="infoblock__block-info-desc">
                        <span>2021, боевик , приключение , фентези</span>
                        <span> 2h 12m</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    current: Object,
    open: Boolean,
    type: String,
})
</script>

