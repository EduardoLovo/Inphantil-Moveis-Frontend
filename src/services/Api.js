import axios from 'axios';
import { JwtHandler } from './jwt_handler/jwt_handler';
export const Api = {
    baseUrl: 'https://inphantil-moveis-backend.vercel.app',
    // baseUrl: 'http://localhost:3000',

    // Rota Login
    loginUrl: () => `${Api.baseUrl}/login/`,

    // Rotas Apliques
    readAllUrl: (rota) => Api.baseUrl + `/${rota}`,
    addUrl: (rota) => Api.baseUrl + `/${rota}/create`,
    readByIdUrl: (rota, id) => Api.baseUrl + `/${rota}/getById/` + id,
    updateUrl: (rota, id) => Api.baseUrl + `/${rota}/updateOne/` + id,
    deleteUrl: (rota, id) => Api.baseUrl + `/${rota}/deleteOne/` + id,

    // Instância do Axios com configuração padrão
    instance: axios.create({
        // baseURL: 'http://localhost:3000',
        baseURL: 'https://inphantil-moveis-backend.vercel.app',

        headers: {
            'Content-Type': 'application/json',
        },
    }),

    // Configuração do token para requisições autenticadas
    authConfig: (isMultipart = false) => {
        const token = JwtHandler.getJwt();
        if (!token) {
            throw new Error('Token JWT não encontrado');
        }

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        if (isMultipart) {
            headers['Content-Type'] = 'multipart/form-data';
        } else {
            headers['Content-Type'] = 'application/json';
        }
        return { headers };
    },

    // Métodos da API usando Axios
    get: (url, auth = false) =>
        Api.instance.get(url, auth ? Api.authConfig() : {}),

    post: (url, body, auth = false, isMultipart = false) => {
        const config = auth ? Api.authConfig(isMultipart) : {};
        return Api.instance.post(url, body, config);
    },

    patch: (url, body, auth = false) =>
        Api.instance.patch(url, body, auth ? Api.authConfig() : {}),

    delete: (url, auth = false) =>
        Api.instance.delete(url, auth ? Api.authConfig() : {}),
};
