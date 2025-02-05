import axios from 'axios';
import { JwtHandler } from './jwt_handler/jwt_handler';
export const Api = {
    baseUrl: 'http://localhost:3000',

    // Rota Login
    loginUrl: () => `${Api.baseUrl}/login/`,

    // Rotas Apliques
    readAllApliquesUrl: () => Api.baseUrl + '/apliques',
    addApliquesUrl: () => Api.baseUrl + '/apliques/create',
    readByIdUrl: (id) => Api.baseUrl + '/apliques/getById/' + id,
    updateUrl: (id) => Api.baseUrl + '/apliques/updateOne/' + id,
    deleteAplicUrl: (id) => Api.baseUrl + '/apliques/deleteOne/' + id,

    // Instância do Axios com configuração padrão
    instance: axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            'Content-Type': 'application/json',
        },
    }),

    // Configuração do token para requisições autenticadas
    authConfig: (isMultipart = false) => {
        const headers = {
            Authorization: `Bearer ${JwtHandler.getJwt()}`,
        };

        if (isMultipart) {
            headers['Content-Type'] = 'multipart/form-data';
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
