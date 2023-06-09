<template>
    <div>
        <router-link to="/" class="more">
            <img src="@/assets/images/more.svg" alt="">
            <span class="more__text">Подробнее</span>
        </router-link>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.more {
    background: #149a03;
    color: white;
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