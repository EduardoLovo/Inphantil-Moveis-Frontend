import React, { useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';
import { JwtHandler } from '../../../services/jwt_handler/jwt_handler';
import './ModalTecidoParaLencol.css';
import { toast } from 'react-toastify';

const ModalTecidoParaLencois = ({ tecidoParaLencol, onClose }) => {
    const isLogged = JwtHandler.isJwtValid();
    const [cor, setCor] = useState(tecidoParaLencol.cor);
    const [quantidade, setQuantidade] = useState(tecidoParaLencol.quantidade);
    const [estoque, setEstoque] = useState(tecidoParaLencol.estoque);
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
            cor,
            quantidade,
            estoque,
        };
        console.log(payload);

        try {
            const response = await Api.patch(
                Api.updateUrl('tecido-para-lencol', tecidoParaLencol._id),
                payload,
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 200) {
                console.log('Enviado com sucesso');
                setCor('');
                setQuantidade('');
                setEstoque('');
                setIsLoading(false); // Define como carregando ao mudar
                window.location.reload();
                toast.success('Tecido atualizado com sucesso!');
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
                Api.deleteUrl('tecido-para-lencol', tecidoParaLencol._id),
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 200) {
                console.log('Deletado com sucesso');
                setIsLoading(false); // Define como carregando ao mudar
                window.location.reload();
                toast.success('Tecido deletado com sucesso!');
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
                <div className="modal-cliente tecido-cliente">
                    <p onClick={onClose} className="botaoFechar"></p>
                    <img
                        src={tecidoParaLencol.imagem}
                        alt="Imagem do aplique"
                    />
                    <p>{tecidoParaLencol.cor}</p>
                </div>
            ) : (
                <div
                    className="modal-content modal-tecido"
                    onClick={handleModalClick}
                >
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
                            <label>Cor:</label>
                            <input
                                value={cor}
                                onChange={(e) => setCor(e.target.value)}
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
