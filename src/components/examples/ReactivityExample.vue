<template>
    <div class="prose-sm">
        <Headline type="h4">{{ $t('example.check-reactivity') }}</Headline>

        <Button @click="addCount" data-testid="action-button">
            {{ $t('example.count', { count }) }}
        </Button>
        <p>
            {{ $t('example.hmr.edit') }}
            <code>components/examples/ReavtivityExample.vue</code>
            {{ $t('example.hmr.test') }}
        </p>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { Button, Headline } from '@vivaconagua/vueca';
    import { notify } from '@kyvg/vue3-notification';
    const { t } = useI18n();

    const count = ref(0);
    const addCount = () => {
        count.value++;
        notify({
            type: 'success',
            title: t('messages.title.success'),
            text: t('example.success'),
            duration: 6000,
        });
    };
</script>
