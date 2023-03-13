<template>
    <div>
        <Headline type="h4">{{ $t('table.header.title') }}</Headline>
        <CustomTable :list="store.list" :labels="tableLabels" :pagination="pagination" colspan="5">
            <template v-slot:colspan>
                <col width="1%" />
                <col width="24%" />
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
            </template>
            <template v-slot:desktop-filter>
                <Row>
                    <Column>
                        <h3>{{ $t('table.header.species') }}</h3>
                        <Checkbox
                            v-for="species in getSpecies"
                            :label="species"
                            :key="species"
                            :id="species"
                            v-model="pagination.state.filter.species" />
                    </Column>
                    <Column>
                        <h3>{{ $t('table.header.state') }}</h3>
                        <Checkbox
                            v-for="status in getStates"
                            :label="status"
                            :key="status"
                            :id="status"
                            v-model="pagination.state.filter.status" />
                    </Column>
                </Row>
            </template>
            <template v-slot:desktop-header>
                <th class="CustomTable__cell sortable" @click="doSort('index')">
                    <label> {{ $t('table.header.index') }} &varr;</label>
                </th>
                <th class="CustomTable__cell">
                    <label> {{ $t('table.header.avatar') }} </label>
                </th>
                <th class="CustomTable__cell sortable" @click="doSort('name')">
                    <label> {{ $t('table.header.name') }} &varr;</label>
                </th>
                <th class="CustomTable__cell sortable" @click="doSort('species')">
                    <label> {{ $t('table.header.species') }} &varr;</label>
                </th>
                <th class="CustomTable__cell sortable" @click="doSort('status')">
                    <label> {{ $t('table.header.state') }} &varr;</label>
                </th>
            </template>
            <template v-slot:desktop-content>
                <tr
                    class="CustomTable__row"
                    @click="setCurrent(res)"
                    :class="{ last: index + 1 == pagination.pageSize }"
                    v-for="(res, index) in pagination.getFilteredList()"
                    :key="index">
                    <td class="CustomTable__cell">
                        <label> {{ res.index }} </label>
                    </td>
                    <td class="CustomTable__cell">
                        <label> <img :src="res.image" class="w-20" :title="res.name" /> </label>
                    </td>
                    <td class="CustomTable__cell">
                        <label> {{ res.name }} </label>
                    </td>
                    <td class="CustomTable__cell">
                        <label> {{ res.species }} </label>
                    </td>
                    <td class="CustomTable__cell">
                        <label> {{ res.status }} </label>
                    </td>
                </tr>
            </template>
            <template v-slot:mobile-filter> <div class=""></div> </template>
            <template v-slot:mobile-header>
                <div class="sortable text-left" @click="pagination.sort('name')">
                    {{ $t('table.header.name') }} &varr;
                </div>
            </template>
            <template v-slot:mobile-content>
                <tr
                    class="CustomTable__row"
                    v-for="(res, index) in pagination.getFilteredList()"
                    :key="index">
                    <td class="vca-table-cell">
                        {{ res.name }}
                    </td>
                </tr>
            </template>
        </CustomTable>
    </div>
</template>
<script setup lang="ts">
    import {
        Headline,
        Row,
        Column,
        Checkbox,
        CustomTable,
        usePagination,
    } from '@vivaconagua/vueca';
    import { computed, ref, watch } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useMainStore } from '@/stores/MainStore';

    const store = useMainStore();
    const { t } = useI18n();
    const pagination = ref(usePagination());

    const tableLabels = {
        search: t('table.search'),
        page_no_results: t('table.page.no_results'),
        page_label: t('table.page.label'),
        page_size: t('table.page.size'),
        page_first: t('table.page.first'),
        page_prev: t('table.page.back'),
        page_next: t('table.page.next'),
        page_last: t('table.page.last'),
    };

    pagination.value.setList(store.list);
    pagination.value.pageSize(store.list.length);
    pagination.value.filter({ species: [], status: [] });

    watch(
        () => store.list,
        () => {
            pagination.value.setList(store.list);
            pagination.value.pageSize(store.list.length);
        },
        { deep: true }
    );

    const doSort = (value: string) => {
        pagination.value.sort(value);
    };

    pagination.value.state.filterCallback = (value: any, index: number) => {
        // If the filter is empty, everything is fine
        value.index = index + 1;
        if (emptyFilter.value) {
            return true;
        }

        // Apply filter, make sure to just return false values here
        if (
            pagination.value.state.filter.species.length > 0 &&
            !pagination.value.state.filter.species.includes(value.species)
        ) {
            return false;
        }

        if (
            pagination.value.state.filter.status.length > 0 &&
            !pagination.value.state.filter.status.includes(value.status)
        ) {
            return false;
        }

        // Filter for the current value of row.full_name etc.
        return value.name?.toLowerCase().indexOf(pagination.value.state.search.toLowerCase()) > -1;
    };

    const setCurrent = (res: any) => {
        console.log('set current in store here!');
        console.log(res);
    };

    const getSpecies = computed(() => {
        return [...new Set(store.list.map((el) => el.species))];
    });
    const getStates = computed(() => {
        return [...new Set(store.list.map((el) => el.status))];
    });

    const emptyFilter = computed(() => {
        return (
            pagination.value.state.search == '' &&
            pagination.value.state.filter.species.length == 0 &&
            pagination.value.state.filter.status.length == 0
        );
    });
</script>
