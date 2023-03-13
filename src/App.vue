<template>
    <div id="app" class="flex h-screen flex-col">
        <notifications position="top center" width="100%" />
        <TopNavigation class="hidden bg-white dark:bg-vca-dark-500 dark:text-white md:inline" />
        <MobilNavigation class="inline md:hidden" />
        <div
            id="app_content"
            class="mt-16 grow bg-white dark:bg-vca-dark-500 dark:text-white md:mt-20">
            <BreadCrumbs class="block" />
            <router-view></router-view>
        </div>
        <Footer id="app_footer" />
    </div>
</template>
<script setup lang="ts">
    import '@vivaconagua/vueca/dist/style.css';
    import TopNavigation from '@/components/layout/TopNavigation.vue';
    import Footer from '@/components/layout/PageFooter.vue';
    import BreadCrumbs from './components/layout/BreadCrumbs.vue';
    import MobilNavigation from './components/layout/MobilNavigation.vue';
</script>
