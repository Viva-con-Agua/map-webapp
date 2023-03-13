<template>
    <header class="fixed inset-x-0 z-10 h-20 w-screen shadow-md">
        <div class="container mx-auto flex items-center justify-between py-4">
            <a href="/"><img class="h-12" src="@/assets/img/vca_logo.png" /></a>

            <ul
                class="flex items-center justify-around gap-8 font-header text-3xl text-vca-dark-500">
                <li :key="route.name" v-for="route in getNavigation" class="hover:opacity-75">
                    <router-link
                        :title="$t('' + route?.meta?.title)"
                        :to="route.path"
                        class="px-4"
                        active-class="text-vca-base-500">
                        {{ $t('' + route?.meta?.title) }}
                    </router-link>
                </li>
            </ul>
            <LanguageSelection v-model="locale" :options="$i18n.availableLocales" />
        </div>
    </header>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useI18n } from 'vue-i18n';
    import { LanguageSelection } from '@vivaconagua/vueca';
    import { navigationList } from '@/composables/navigation';

    const { locale } = useI18n({ useScope: 'global' });
    const router = useRouter();

    const getNavigation = computed(() => {
        return navigationList(router.options.routes);
    });
</script>
