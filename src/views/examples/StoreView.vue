<template>
    <StoreExample />
</template>
<script setup lang="ts">
    import { useMainStore } from '@/stores/MainStore.js';
    import StoreExample from '@/components/examples/StoreExample.vue';
    import { onBeforeMount } from 'vue';

    const store = useMainStore();

    onBeforeMount(() => {
        store.fetchCharacters();
    });
</script>
