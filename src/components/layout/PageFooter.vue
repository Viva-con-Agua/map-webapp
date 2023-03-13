<template>
    <footer class="text-l inset-x-0 bg-vca-base-500 p-4 font-serif text-white md:px-0">
        <div
            class="container mx-auto flex flex-grow flex-wrap items-start justify-between md:flex-nowrap">
            <a
                class="basis-full font-bold hover:text-vca-dark-500"
                :href="$t('footer.legal.copyright.url')"
                :title="$t('footer.legal.copyright.header')"
                target="_blank">
                {{ $t('footer.legal.copyright.header') }}
            </a>
            <div class="flex basis-auto flex-col">
                <a
                    class="whitespace-nowrap p-1 hover:text-vca-dark-500"
                    :href="$t('footer.legal.emission.url')"
                    :title="$t('footer.legal.emission.header')"
                    target="_blank">
                    {{ $t('footer.legal.emission.header') }}
                </a>
                <a
                    class="whitespace-nowrap p-1 hover:text-vca-dark-500"
                    :href="$t('footer.legal.security.url')"
                    :title="$t('footer.legal.security.header')"
                    target="_blank">
                    {{ $t('footer.legal.security.header') }}
                </a>
                <a
                    class="whitespace-nowrap p-1 hover:text-vca-dark-500"
                    :href="$t('footer.legal.imprint.url')"
                    :title="$t('footer.legal.imprint.header')"
                    target="_blank">
                    {{ $t('footer.legal.imprint.header') }}
                </a>
            </div>

            <LanguageSelection
                class="mr-0 ml-auto mb-0 mt-auto justify-self-end sm:block md:hidden"
                v-model="locale"
                :options="$i18n.availableLocales" />
        </div>
    </footer>
</template>

<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    import { LanguageSelection } from '@vivaconagua/vueca';

    const { locale } = useI18n({ useScope: 'global' });
</script>
