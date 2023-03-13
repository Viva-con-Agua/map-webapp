import axios from 'axios';

const call = axios.create({
    baseURL: import.meta.env.VCA_PUBLIC_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});
call.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return new Promise((_, reject) => {
            reject(error);
        });
    }
);

export default class api {
    static get call() {
        return call;
    }
}
