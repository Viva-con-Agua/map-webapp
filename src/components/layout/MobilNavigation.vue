<template>
    <header class="fixed inset-x-0 z-10 h-16 w-screen bg-white py-4 shadow-md">
        <div class="container mx-auto flex items-center justify-between">
            <div class="px-4">
                <a href="/">
                    <img class="h-8" src="@/assets/img/vca_logo.png" />
                </a>
            </div>
            <div
                class="relative order-2 block flex-grow-0 cursor-pointer py-0 px-4"
                @click="toggleMenu()"
                v-if="getNavigation.length > 0">
                <div
                    :class="{ 'opacity-0': showMenu, 'opacity-100': !showMenu }"
                    class="mx-0 my-1 h-1 w-5 rounded-sm bg-vca-dark-500 transition-all duration-200"></div>
                <div
                    :class="{ 'absolute bottom-1 rotate-45': showMenu }"
                    class="mx-0 my-1 block h-1 w-5 rounded-sm bg-vca-dark-500 transition-all duration-200"></div>
                <div
                    :class="{
                        'absolute bottom-1 block -rotate-45': showMenu,
                        hidden: !showMenu,
                    }"
                    class="mx-0 my-1 h-1 w-5 rounded-sm bg-vca-dark-500 transition-all duration-200"></div>
                <div
                    :class="{ 'opacity-0': showMenu, 'opacity-100': !showMenu }"
                    class="mx-0 my-1 h-1 w-5 rounded-sm bg-vca-dark-500 transition-all duration-200"></div>
            </div>
        </div>
        <div id="navContainer" class="fixed z-200 w-full">
            <div class="mobile-nav-bar">
                <ul
                    :class="{
                        'visible absolute opacity-100 shadow-bottom': showMenu,
                        'invisible opacity-0': !showMenu,
                    }"
                    class="absolute top-0 right-0 z-100 mt-4 block w-full list-none justify-center border-t-2 border-b-2 border-b-vca-dark-500 p-0 transition-all duration-200">
                    <li
                        class="flex-auto"
                        v-for="route in getNavigation"
                        @click="navigate(route)"
                        :key="route.name">
                        <router-link
                            active-class="border-b-2 border-b-vca-dark-500 bg-vca-base-500 hover:text-white"
                            :title="$t('' + route?.meta?.title)"
                            :to="route.path"
                            class="block cursor-pointer bg-white p-3 text-center text-vca-dark-500 no-underline transition-all duration-200 hover:text-opacity-75"
                            :class="{
                                'bg-vca-dark-500 text-white hover:font-bold hover:text-white':
                                    route.path == definedRoute.fullPath,
                            }">
                            {{ $t('' + route?.meta?.title) }}
                        </router-link>
                        <div
                            class="relative z-50 flex w-full flex-col flex-wrap border-b-2 border-b-vca-dark-500 text-center"
                            v-if="route.children && currentRoute?.name == route.name">
                            <router-link
                                active-class="border-b-0 bg-vca-dark-500 font-bold !text-white"
                                class="bg-white p-2 text-vca-dark-500 hover:text-opacity-75"
                                @click="toggleMenu()"
                                v-for="subTab in getSubNavigation(route.children)"
                                :key="subTab.name"
                                :title="$t('' + subTab?.meta?.title)"
                                :to="subTab.path">
                                {{ $t('' + subTab?.meta?.title) }}
                            </router-link>
                        </div>
                    </li>
                    <li
                        class="border-t-2 border-white bg-vca-dark-500 text-white"
                        @click="toggleMenu()">
                        <a
                            class="block cursor-pointer p-3 text-center text-white no-underline transition-all duration-200 hover:font-bold hover:text-white">
                            X
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { useRouter, RouteRecordRaw, useRoute } from 'vue-router';
    import { navigationList } from '@/composables/navigation';

    const router = useRouter();
    const definedRoute = useRoute();
    const currentRoute = ref<RouteRecordRaw>({} as RouteRecordRaw);

    const showMenu = ref(false);

    const navigate = (route: RouteRecordRaw) => {
        if (currentRoute.value?.name !== route.name) {
            currentRoute.value = route;
        }
        if (!currentRoute.value?.children) {
            toggleMenu();
        }
    };

    const getNavigation = computed(() => {
        return navigationList(router.options.routes);
    });
    const getSubNavigation = (route: RouteRecordRaw[]) => {
        return navigationList(route);
    };

    const toggleMenu = () => {
        showMenu.value = !showMenu.value;
    };
</script>
