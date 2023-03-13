<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    import HomeMain from '@/components/HomeMain.vue';

    const { t } = useI18n();
</script>

<template>
    <HomeMain :msg="$t('home.welcome')" class="m-auto columns-1" />
</template>
