<template>
    <div
        class="prose-2xl w-11/12 pb-4 text-center prose-a:text-blue-900 hover:prose-a:opacity-75 prose-code:rounded prose-code:bg-slate-200 prose-code:px-2 prose-code:py-1">
        <article class="text-center">
            <h3>LEAFLET</h3>
            <LeafletMap class="h-80 w-full" />
        </article>
    </div>
</template>
<script setup lang="ts">
    import links from '@/data/links.json';
    import vueLinks from '@/data/vue.json';
    import { ref } from 'vue';
    import LeafletMap from './map/LeafletMap.vue';

    defineProps<{ msg: string }>();
    const getImgURL = (src: string) => {
        return new URL(`../assets/svg/${src}.svg`, import.meta.url).href;
    };

    const docs = ref([
        { href: 'https://vitejs.dev/guide/features.html', name: ' Vite' },
        { href: 'https://v3.vuejs.org/', name: 'Vue ' },
        {
            href: 'https://storybook.js.org/docs/vue/get-started/introduction',
            name: '    Storybook',
        },
        { href: 'https://www.typescriptlang.org/docs/', name: ' Typescript' },
        { href: 'https://eslint.org/docs/user-guide/', name: ' ESLint' },
        { href: 'https://prettier.io/docs/en/index.html', name: ' Prettier' },
        { href: 'https://router.vuejs.org/', name: ' Vue Router' },
        { href: 'https://vue-i18n.intlify.dev/', name: ' Vue i18n Store' },
        { href: 'https://pinia.vuejs.org/', name: ' Vue Pinia Store' },
    ]);
</script>
