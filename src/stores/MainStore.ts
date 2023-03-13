import { defineStore } from 'pinia';
import api from '@/stores/api';

export interface Charater {
    id: number;
    name: string;
    species: string;
    status: string;
}

export const useMainStore = defineStore('MainStore', {
    state: () => {
        return {
            create: {},
            current: null,
            list: [] as Charater[],
        };
    },
    actions: {
        async fetchCharacters() {
            const res = await fetch('https://rickandmortyapi.com/api/character');
            const { results } = await res.json();
            this.list = results as Charater[];
        },
        getList() {
            return new Promise((resolve, reject) => {
                api.call
                    .get('/api/character')
                    .then((response) => {
                        this.list = response.data.payload;
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        get() {
            return new Promise((resolve, reject) => {
                api.call
                    .get('/v1/donations/form/' + this.current)
                    .then((response) => {
                        this.current = response.data.payload;
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
});
