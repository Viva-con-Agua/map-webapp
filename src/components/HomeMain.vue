<template>
    <div
        class="prose-2xl w-11/12 pb-4 text-center prose-a:text-blue-900 hover:prose-a:opacity-75 prose-code:rounded prose-code:bg-slate-200 prose-code:px-2 prose-code:py-1">
        <section id="tech-logo-header" class="flex h-32 justify-center gap-8">
            <a
                target="_blank"
                v-for="{ alt, src, href } in links"
                :key="alt"
                class="h-14"
                :href="href">
                <img class="my-2 h-12" :alt="alt" :src="getImgURL(src)" />
            </a>
        </section>
        <h2>{{ msg }}</h2>
        <section id="tech-plugin-logo-header" class="flex h-32 justify-center gap-8">
            <a
                target="_blank"
                v-for="{ alt, src, href } in vueLinks"
                :key="alt"
                class="h-14"
                :href="href">
                <img class="h-14" :alt="alt" :src="getImgURL(src)" />
            </a>
        </section>

        <article class="text-center">
            <h3>{{ $t('home.vue') }}</h3>
            <p>
                {{ $t('home.setup') }}
                <a target="_blank" href="https://code.visualstudio.com/">VSCode</a>
                +
                <a target="_blank" href="https://github.com/johnsoncodehk/volar">Volar</a>
                +
                <a target="_blank" href="https://github.com/lokalise/i18n-ally">i18n-ally</a>
                +
                <a target="_blank" href="https://github.com/tailwindlabs/tailwindcss-intellisense"
                    >Tailwind Intellisense</a
                >
            </p>

            <p>
                {{ $t('home.see-readme.see') }} <code>README.md</code>
                {{ $t('home.see-readme.more-info') }}
            </p>

            <h2>{{ $t('home.docs') }}</h2>
            <div class="flex flex-col justify-between lg:flex-row">
                <a
                    v-for="link in docs"
                    :key="link.name"
                    :href="link.href"
                    target="_blank"
                    rel="noopener noreferrer">
                    {{ link.name }}
                </a>
            </div>
        </article>
    </div>
</template>
<script setup lang="ts">
    import links from '@/data/links.json';
    import vueLinks from '@/data/vue.json';
    import { ref } from 'vue';

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
