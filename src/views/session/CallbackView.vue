<template>
    <div class="m-auto text-center">
        <h1>{{ $t('messages.callback.redirect') }}</h1>
    </div>
</template>
<script lang="ts" setup>
    import { useSessionStore } from '@/stores/SessionStore';
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    const store = useSessionStore();
    const router = useRouter();

    interface Props {
        code?: string;
    }
    const props = defineProps<Props>();

    onMounted(() => {
        store.callback({ code: props.code }).finally(() => {
            router.push({ path: store.callbackRoute });
        });
    });
</script>
