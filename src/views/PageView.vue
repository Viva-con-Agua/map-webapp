<template>
    <div class="flex h-full">
        <LeftNavigation class="hidden md:block" />
        <div class="grow p-2">
            <router-view class="container mx-auto"></router-view>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import LeftNavigation from '@/components/layout/LeftNavigation.vue';
</script>
<style lang="scss" scoped>
    .vca-page {
        flex-basis: 100%;
        padding-bottom: 1em;
    }
</style>
<style lang="scss">
    .page-container {
        display: flex;
        height: calc(100% - 38px);
    }
</style>
