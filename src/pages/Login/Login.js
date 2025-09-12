import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JwtHandler } from '../../services/jwt_handler/jwt_handler';
import { Api } from '../../services/Api';
import styles from '../../styles/Formulario.module.css';
import { Loading } from '../../components/Loading/Loading';

const Login = () => {
    const isLogged = JwtHandler.isJwtValid();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
    const navigate = useNavigate();

    if (isLogged) {
        navigate('/');
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Faz a requisição de login
            const response = await Api.post(Api.loginUrl(), { usuario, senha });

            // Armazena o token JWT no localStorage
            JwtHandler.setJwt(response.data.token);

            localStorage.setItem('user', JSON.stringify(response.data.user));

            // Redireciona para a página protegida
            navigate('/');
            window.location.reload();
            setIsLoading(false);
        } catch (error) {
            setError('Credenciais inválidas. Tente novamente.');
            console.error('Erro no login:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.containerFormulario}>
            {isLoading && <Loading />}
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <form onSubmit={handleLogin}>
                    <label>Usuário:</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />

                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
