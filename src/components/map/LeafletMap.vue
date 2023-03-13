<script setup lang="ts">
    import { defineComponent, onMounted, ref } from 'vue';
    import 'leaflet/dist/leaflet.css';
    import L, { Map } from 'leaflet';

    const emit = defineEmits(['created', 'removed']);

    const initMap = (element: HTMLElement) => {
        const map = L.map(element, {
            // options
        }).setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
        return map;
    };

    const mapElement = ref<HTMLElement>();
    let map: Map | undefined;
    function removeMap() {
        if (map) {
            map.remove();
            map = undefined;
            emit('removed');
        }
    }
    const observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting === true && mapElement.value) {
                // Element shown - insert map
                removeMap();
                map = initMap(mapElement.value);
                emit('created', map);
            } else {
                // Not shown - remove map
                removeMap();
            }
        },
        { threshold: [1] }
    );

    onMounted(() => {
        if (mapElement.value) {
            // Observe visibility of map container
            observer.observe(mapElement.value);
        } else {
            console.error('errrror');
        }
    });
</script>

<template>
    <div class="full-height" ref="mapElement" v-once>
        <!-- Using v-once to make sure Vue will not update -->
    </div>
</template>
