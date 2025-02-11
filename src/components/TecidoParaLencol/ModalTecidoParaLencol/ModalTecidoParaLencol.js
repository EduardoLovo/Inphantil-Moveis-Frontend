import React, { useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';
import { JwtHandler } from '../../../services/jwt_handler/jwt_handler';

const ModalTecidoParaLencois = ({ tecidoParaLencol, onClose }) => {
    const isLogged = JwtHandler.isJwtValid();
    const [codigo, setCodigo] = useState(tecidoParaLencol.codigo);
    const [quantidade, setQuantidade] = useState(tecidoParaLencol.quantidade);
    const [estoque, setEstoque] = useState(tecidoParaLencol.estoque);
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
        };

        try {
            const response = await Api.patch(
                Api.updateUrl('tecidoParaLencol', tecidoParaLencol._id),
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
                Api.deleteUrl('tecidoParaLencol', tecidoParaLencol._id),
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
                    <img
                        src={tecidoParaLencol.imagem}
                        alt="Imagem do aplique"
                    />
                    <p>{tecidoParaLencol.cor}</p>
                </div>
            ) : (
                <div className="modal-content" onClick={handleModalClick}>
                    <p onClick={onClose} className="botaoFechar"></p>
                    <button className="botaoDeletar" onClick={deletarAplique}>
                        Deletar
                    </button>
                    <h2>Detalhes do Tecido</h2>
                    <div className="aplique-content-modal">
                        <div>
                            <img
                                src={tecidoParaLencol.imagem}
                                alt="imagem do aplique"
                            />
                            <p>{tecidoParaLencol.codigo}</p>
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

export default ModalTecidoParaLencois;
