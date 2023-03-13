<template>
    <div></div>
</template>
<script lang="ts" setup>
    import { useSessionStore } from '@/stores/SessionStore';
    import { onMounted } from 'vue';

    const store = useSessionStore();
    onMounted(() => {
        store.logout().finally(() => {
            window.location.href = '/';
        });
    });
</script>
