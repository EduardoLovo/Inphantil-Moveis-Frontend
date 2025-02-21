import React, { useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';
import './ModalSinteticos.css';
import { JwtHandler } from '../../../services/jwt_handler/jwt_handler';
import { toast } from 'react-toastify';

export const ModalSinteticos = ({ sintetico, onClose }) => {
    const isLogged = JwtHandler.isJwtValid();

    const [codigo, setCodigo] = useState(sintetico.codigo);
    const [estoque, setEstoque] = useState(sintetico.estoque);
    const [cor, setCor] = useState(sintetico.ordem);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado de carregament

    const userRaw = localStorage.getItem('user');
    const user = userRaw ? JSON.parse(userRaw) : null;

    const tipo = user?.tipo || 'desconhecido';

    const handleOverlayClick = () => {
        onClose(); // Fecha o modal ao clicar no fundo
    };

    const handleModalClick = (e) => {
        e.stopPropagation(); // Evita que o clique no modal feche ele
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            codigo,
            estoque,
            cor,
        };

        try {
            const response = await Api.patch(
                Api.updateUrl('sintetico', sintetico._id),
                payload,
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 200) {
                console.log('Enviado com sucesso');
                setIsLoading(false); // Define como carregando ao mudar
                window.location.reload();
                toast.success('Sintetico atualizado com sucesso!');
            } else {
                setError(error.response.data.message);
                setIsLoading(false); // Define como carregando ao mudar
            }
        } catch (error) {
            // Em caso de erro durante a requisição
            console.error('Erro na requisição:', error);
            setError(error.response.data.message);
            setIsLoading(false); // Define como carregando ao mudar
            console.log(error.response.data.message);
        }
    };

    const deletarSintetico = async (e) => {
        e.preventDefault();

        try {
            const response = await Api.delete(
                Api.deleteUrl('sintetico', sintetico._id),
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 200) {
                console.log('Deletado com sucesso');
                setIsLoading(false); // Define como carregando ao mudar
                window.location.reload();
                toast.success('Sintetico deletado com sucesso!');
            } else {
                setError(error.response.data.message);
                setIsLoading(false); // Define como carregando ao mudar
            }
        } catch (error) {
            // Em caso de erro durante a requisição
            console.error('Erro na requisição:', error);
            setError(error.response.data.message);
            setIsLoading(false); // Define como carregando ao mudar
            console.log(error.response.data.message);
        }
    };

    return (
        <div className="modal-overlay " onClick={handleOverlayClick}>
            {tipo === 'vendas' || !isLogged ? (
                <div className="modal-cliente">
                    <p onClick={onClose} className="botaoFechar"></p>
                    <img src={sintetico.imagem} alt="Imagem do sintetico" />
                    <p>{sintetico.codigo}</p>
                </div>
            ) : (
                <div
                    className="modal-content modalsintetico"
                    onClick={handleModalClick}
                >
                    <p onClick={onClose} className="botaoFechar"></p>
                    <button className="botaoDeletar" onClick={deletarSintetico}>
                        Deletar
                    </button>
                    <h2>Detalhes do Sintetico</h2>
                    <div className="aplique-content-modal">
                        <div>
                            <img
                                src={sintetico.imagem}
                                alt="imagem do sintetico"
                            />
                            <p>{sintetico.codigo}</p>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="containerFormulario"
                        >
                            <label>Código:</label>
                            <input
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                type="text"
                                required
                            />

                            <label>Estoque:</label>
                            <select
                                value={estoque}
                                onChange={(e) =>
                                    setEstoque(e.target.value === 'true')
                                }
                            >
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>

                            <label>Cor:</label>
                            <select
                                value={cor}
                                onChange={(e) => setCor(e.target.value)}
                            >
                                <option value="Amarelo">Amarelo</option>
                                <option value="Azul">Azul</option>
                                <option value="Bege">Bege</option>
                                <option value="Branco">Branco</option>
                                <option value="Cinza">Cinza</option>
                                <option value="Laranja">Laranja</option>
                                <option value="Lilas">Lilas</option>
                                <option value="Mostarda">Mostarda</option>
                                <option value="Rosa">Rosa</option>
                                <option value="Tiffany">Tiffany</option>
                                <option value="Verde">Verde</option>
                                <option value="Vermelho">Vermelho</option>
                                <option value="Externo">Externo</option>
                            </select>

                            <button type="submit">Atualizar</button>
                        </form>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            )}
            {isLoading && <Loading />}
        </div>
    );
};
