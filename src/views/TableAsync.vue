<template>
    <TableAsync />
</template>
<script setup lang="ts">
    import TableAsync from '@/components/table/TableAsync.vue';
    import { onBeforeMount } from 'vue';
    import { useMainStore } from '@/stores/MainStore';

    const store = useMainStore();

    onBeforeMount(() => {
        store.fetchCharacters();
    });
</script>
