<template>
    <div class="border-b-2 p-1 text-xs text-gray-400 md:p-2 md:text-base">
        <ul class="flex items-center justify-start gap-1">
            <li :key="route.name" v-for="(route, index) in navigationPositionList">
                <router-link :title="route.meta.title" :to="route.path">
                    {{ $t('' + route.meta.title) }}
                </router-link>
                <span v-if="index != navigationPositionList.length - 1"> / </span>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const currentRoute = useRoute();
    const navigationPositionList = computed(() => {
        return currentRoute.matched;
    });
</script>
