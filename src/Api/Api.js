import axios from 'axios';
import { JwtHandler } from './jwt_handler/jwt_handler';
export const Api = {
    baseUrl: 'http://localhost:3000',

    // Rota Login
    loginUrl: () => `${Api.baseUrl}/login/`,

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

        // Se for multipart, não definimos o Content-Type
        if (isMultipart) {
            delete headers['Content-Type'];
        }

        return { headers };
    },

    // Métodos da API usando Axios
    get: (url, auth = false) =>
        Api.instance.get(url, auth ? Api.authConfig() : {}),

    post: (url, body, auth = false) =>
        Api.instance.post(url, body, auth ? Api.authConfig() : {}),

    patch: (url, body, auth = false) =>
        Api.instance.patch(url, body, auth ? Api.authConfig() : {}),

    delete: (url, auth = false) =>
        Api.instance.delete(url, auth ? Api.authConfig() : {}),
};
