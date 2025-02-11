import React, { useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';
import { JwtHandler } from '../../../services/jwt_handler/jwt_handler';

export const ModalLencolProntaEntrega = ({ lencol, onClose }) => {
    const isLogged = JwtHandler.isJwtValid();
    const [codigo, setCodigo] = useState(lencol.codigo);
    const [quantidade, setQuantidade] = useState(lencol.quantidade);
    const [cor, setCor] = useState(lencol.cor);
    const [tamanho, setTamanho] = useState(lencol.tamanho);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado de carregament

    const handleOverlayClick = () => {
        onClose(); // Fecha o modal ao clicar no fundo
    };

    const handleModalClick = (e) => {
        e.stopPropagation(); // Evita que o clique no modal feche ele
    };

    const type = localStorage.getItem('user');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            codigo,
            quantidade,
            cor,
            tamanho,
        };

        try {
            const response = await Api.patch(
                Api.updateUrl('lencol-pronta-entrega', lencol._id),
                payload,
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 200) {
                console.log('Enviado com sucesso');
                setIsLoading(false); // Define como carregando ao mudar
                window.location.reload();
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

    const deletarAplique = async (e) => {
        e.preventDefault();

        try {
            const response = await Api.delete(
                Api.deleteUrl('lencol-pronta-entrega', lencol._id),
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 200) {
                console.log('Deletado com sucesso');
                setIsLoading(false); // Define como carregando ao mudar
                window.location.reload();
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
            {type !== 'adm' || !isLogged ? (
                <div className="modal-cliente">
                    <p onClick={onClose} className="botaoFechar"></p>
                    <img src={lencol.imagem} alt="Imagem do aplique" />
                    <p>{lencol.codigo}</p>
                </div>
            ) : (
                <div className="modal-content" onClick={handleModalClick}>
                    <p onClick={onClose} className="botaoFechar"></p>
                    <button className="botaoDeletar" onClick={deletarAplique}>
                        Deletar
                    </button>
                    <h2>Detalhes do Aplique</h2>
                    <div className="aplique-content-modal">
                        <div>
                            <img src={lencol.imagem} alt="imagem do aplique" />
                            <p>{lencol.codigo}</p>
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

                            <label>Quantidade:</label>
                            <input
                                value={quantidade}
                                onChange={(e) => setQuantidade(e.target.value)}
                                type="number"
                                required
                            />

                            <label>Cor:</label>
                            <select
                                value={cor}
                                onChange={(e) => setCor(e.target.value)}
                                required
                            >
                                <option></option>
                                <option value="Azul AZ3">Azul AZ3</option>
                                <option value="Azul Claro">Azul Claro</option>
                                <option value="Bege">Bege</option>
                                <option value="Branco">Branco</option>
                                <option value="Cinza">Cinza</option>
                                <option value="Palha">Palha</option>
                                <option value="Prata">Prata</option>
                                <option value="Rosa">Rosa</option>
                                <option value="Rosa Bebe">Rosa Bebe</option>
                                <option value="Verde">Verde</option>
                            </select>

                            <label>Tamanho:</label>
                            <select
                                value={tamanho}
                                onChange={(e) => setTamanho(e.target.value)}
                                required
                            >
                                <option value=""></option>
                                <option value="Berco">Berço</option>
                                <option value="Junior">Junior</option>
                                <option value="Solteiro">Solteiro</option>
                                <option value="Solteirao">Solteirão</option>
                                <option value="Viuva">Viuva</option>
                                <option value="Casal">Casal</option>
                                <option value="Queen">Queen</option>
                                <option value="King">King</option>
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
