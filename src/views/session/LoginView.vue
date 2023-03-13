<template>
    <div class="m-auto text-center">
        <h1>{{ $t('messages.login.redirect') }}</h1>
    </div>
</template>
<script lang="ts">
    import { defineComponent, ComponentPublicInstance } from 'vue';

    interface IInstance extends ComponentPublicInstance {
        setCallbackRoute(from: string): void;
    }

    export default defineComponent({
        beforeRouteEnter(to, from, next) {
            next((vm) => {
                const instance = vm as IInstance;
                instance.setCallbackRoute(from.path);
            });
        },
    });
</script>
<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useSessionStore } from '@/stores/SessionStore';
    const callbackRoute = ref('/');

    interface Props {
        code?: string;
    }
    const props = defineProps<Props>();

    const setCallbackRoute = (from: string) => {
        callbackRoute.value = from;
    };
    defineExpose({ setCallbackRoute });

    const router = useRouter();

    const store = useSessionStore();
    onMounted(() => {
        if (!store.session) {
            store.callbackRoute = store.routerCallback ? store.routerCallback : callbackRoute.value;
            window.location.href = store.getLoginURL;
        } else {
            router.push({ path: '/' });
        }
    });
</script>
