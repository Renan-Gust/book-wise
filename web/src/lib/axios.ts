import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost/projetos/book-wise/server/public'
});