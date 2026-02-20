import axios from 'axios';

export const apiClient = axios.create({
    baseURL: "https://db.gregoryspanenburg.com",
    headers: {
        'Content-Type': 'application/json',
    },
});
