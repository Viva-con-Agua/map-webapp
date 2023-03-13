import { defineStore } from 'pinia';
import api from '@/stores/api';

interface CallbackData {
    code: string | undefined;
}

export const useSessionStore = defineStore('SessionStore', {
    state: () => {
        return {
            session: false,
            callbackRoute: '/',
            routerCallback: '/',
            callback: {
                code: undefined,
            } as CallbackData,
            login_url: import.meta.env.VCA_PUBLIC_LOGIN_URL,
            login_uri: {
                url: import.meta.env.VCA_PUBLIC_HYDRA_URL,
                params: {
                    audience: '',
                    client_id: import.meta.env.VCA_PUBLIC_HYDRA_CLIENT_ID,
                    max_age: '3600',
                    nonce: ' xekvmuthjobjmiizejbutcqh',
                    prompt: '',
                    redirect_uri: import.meta.env.VCA_PUBLIC_HYDRA_REDIRECT_URI,
                    response_type: 'code',
                    scope: import.meta.env.VCA_PUBLIC_HYDRA_SCOPE,
                    state: 'bmnlhrhbloactuulqwdcmdzg',
                },
            },
            /**
            Usually we use hydra for login, so we dont actially need this
            credentials: {
                email: '',
                password: '',
            }, */
        };
    },
    persist: {
        paths: ['session'],
    },
    getters: {
        getLoginURL() {
            let query: string = this.login_uri.url + '?';
            for (const [key, value] of Object.entries(this.login_uri.params)) {
                if (value !== undefined) {
                    query += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
                }
            }
            return query;
        },
        getRegisterURL(): string {
            return this.login_url + '/register';
        },
        getLogoutURL(): string {
            return this.login_url + '/logout';
        },
    },
    actions: {
        callback(data: CallbackData) {
            return new Promise((resolve, reject) => {
                api.call
                    .post('/auth/callback', data)
                    .then((response) => {
                        this.session = true;
                        resolve(response.data.payload);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        /**
        Usually we use hydra for login, so we dont actially need this
        login() {
            return new Promise((resolve, reject) => {
                api.call
                    .post('/auth/login', this.credentials)
                    .then((response) => {
                        this.session = true;
                        resolve(response.data.payload);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        */
        refresh() {
            return new Promise((resolve, reject) => {
                api.call
                    .get('/auth/refresh')
                    .then((response) => {
                        this.session = true;
                        resolve(response.data.payload);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        logout() {
            return new Promise((resolve, reject) => {
                api.call
                    .get('/auth/logout')
                    .then((response) => {
                        resolve(response.data.payload);
                    })
                    .catch((error) => {
                        reject(error);
                    })
                    .finally(() => {
                        this.session = false;
                    });
            });
        },
    },
});
