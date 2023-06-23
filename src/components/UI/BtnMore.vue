<template>
    <router-link to="/" class="more">
        <img src="@/assets/images/more.svg" alt="">
        <span class="more__text">Подробнее</span>
    </router-link>
</template>

<script setup>

</script>

<style lang="scss">
.more {
    background: #149A03;
    color: #fff;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    width: max-content;
    border-radius: 10px;

    &__text {
        font-size: 20px;
        font-weight: 400;
    }
}
</style>