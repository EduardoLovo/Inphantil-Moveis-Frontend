import React, { useState } from 'react';
import './ModalAplique.css';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';

const Modal = ({ aplique, onClose }) => {
    const [codigo, setCodigo] = useState(aplique.codigo);
    const [quantidade, setQuantidade] = useState(aplique.quantidade);
    const [estoque, setEstoque] = useState(aplique.estoque);
    const [ordem, setOrdem] = useState(aplique.ordem);
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
            estoque,
            ordem,
        };

        try {
            const response = await Api.patch(
                Api.updateUrl(aplique._id),
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
                Api.deleteAplicUrl(aplique._id),
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
            {type === 'adm' ? (
                <div className="modal-content" onClick={handleModalClick}>
                    <p onClick={onClose} className="botaoFechar"></p>
                    <button className="botaoDeletar" onClick={deletarAplique}>
                        Deletar
                    </button>
                    <h2>Detalhes do Aplique</h2>
                    <div className="aplique-content-modal">
                        <div>
                            <img src={aplique.imagem} alt="imagem do aplique" />
                            <p>{aplique.codigo}</p>
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

                            <label>Ordem:</label>
                            <input
                                value={ordem}
                                onChange={(e) => setOrdem(e.target.value)}
                                type="number"
                                required
                            />

                            <button type="submit">Atualizar</button>
                        </form>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            ) : (
                <div className="modal-cliente">
                    <p onClick={onClose} className="botaoFechar"></p>
                    <img src={aplique.imagem} alt="Imagem do aplique" />
                    <p>{aplique.codigo}</p>
                </div>
            )}
            {isLoading && <Loading />}
        </div>
    );
};

export default Modal;
