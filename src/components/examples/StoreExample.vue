<template>
    <div class="prose-sm">
        <Headline type="h4">{{ $t('example.store-example') }}</Headline>
        <ul>
            <li v-for="char in store.list" :key="char.id">
                {{ char.name }} ({{ char.species }}, {{ char.status }})
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
    import { Headline } from '@vivaconagua/vueca';
    import { useMainStore } from '@/stores/MainStore';

    const store = useMainStore();
</script>
