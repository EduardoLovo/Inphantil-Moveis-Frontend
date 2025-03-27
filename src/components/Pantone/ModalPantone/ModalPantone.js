import React, { useState } from 'react';
// import './ModalAplique.css';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';
import { JwtHandler } from '../../../services/jwt_handler/jwt_handler';
import { toast } from 'react-toastify';

const ModalPantone = ({ pantone, onClose }) => {
    const isLogged = JwtHandler.isJwtValid();
    const [codigo, setCodigo] = useState(pantone.codigo);
    const [imagem, setImagem] = useState(pantone.imagem);
    const [estoque, setEstoque] = useState(pantone.estoque);
    const [cor, setCor] = useState(pantone.cor);
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
            imagem,
            estoque,
            cor,
        };

        try {
            const response = await Api.patch(
                Api.updateUrl('pantone', pantone._id),
                payload,
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 200) {
                console.log('Enviado com sucesso');
                setIsLoading(false); // Define como carregando ao mudar
                window.location.reload();
                toast.success('Pantone deletado com sucesso!');
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

    const deletarPantone = async (e) => {
        e.preventDefault();

        try {
            const response = await Api.delete(
                Api.deleteUrl('pantone', pantone._id),
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 200) {
                console.log('Deletado com sucesso');
                setIsLoading(false); // Define como carregando ao mudar
                window.location.reload();
                toast.success('Pantone deletado com sucesso!');
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
                    <img src={pantone.imagem} alt="Imagem do pantone" />
                    <p>{pantone.codigo}</p>
                </div>
            ) : (
                <div
                    className="modal-content modal-tecido"
                    onClick={handleModalClick}
                >
                    <p onClick={onClose} className="botaoFechar"></p>
                    <button className="botaoDeletar" onClick={deletarPantone}>
                        Deletar
                    </button>
                    <h2>Detalhes do Pantone</h2>
                    <div className="aplique-content-modal">
                        <div>
                            <img src={pantone.imagem} alt="imagem do pantone" />
                            <p>{pantone.codigo}</p>
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
                            <label>Imagem:</label>
                            <input
                                value={imagem}
                                onChange={(e) => setImagem(e.target.value)}
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
                            <input
                                value={cor}
                                onChange={(e) => setCor(e.target.value)}
                                type="text"
                                required
                            />

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

export default ModalPantone;
