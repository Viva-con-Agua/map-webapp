<template>
    <aside class="w-64">
        <div class="h-full overflow-y-auto bg-white py-4 shadow-right">
            <ul class="space-y-2">
                <li :key="route.name" v-for="route in getNavigation" class="m-0 p-0">
                    <router-link
                        :title="$t('' + route?.meta?.title)"
                        :to="route.path"
                        class="block w-full p-2 transition-all duration-200"
                        active-class="bg-vca-dark-500 text-white hover:text-white hover:font-bold"
                        >{{ $t('' + route?.meta?.title) }}</router-link
                    >
                </li>
            </ul>
        </div>
    </aside>
</template>
<script lang="ts" setup>
    import { navigationList } from '@/composables/navigation';
    import { computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const router = useRouter();
    const route = useRoute();

    const routeChildren = () => {
        const current = router.options.routes.find((el) => el.name == route.matched[0].name);
        if (!current || !current.children) {
            return [];
        }
        return current.children;
    };
    const getNavigation = computed(() => {
        return navigationList(routeChildren());
    });
</script>
<!-- <style lang="scss" scoped>
    .left-nav {
        -webkit-box-shadow: 10px 0px 10px -5px rgba(0, 0, 0, 0.15);
        box-shadow: 10px 0px 10px -5px rgba(0, 0, 0, 0.15);
        border-right: solid thin #008fc3;
        padding: 0.5em 0;
        @include media(small) {
            display: none;
        }
    }
    .left-nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 250px;
        height: 100%;
    }
    .left-nav li {
        float: none;
        text-transform: uppercase;
    }
    .left-nav li a {
        display: block;
        color: #000;
        padding: 8px 16px;
        text-decoration: none;
    }

    .left-nav li a.router-link-exact-active {
        background-color: #002e6d;
        color: white;
    }

    .left-nav li a:hover:not(.router-link-exact-active) {
        background-color: #008fc3;
        color: white;
    }
</style> -->
