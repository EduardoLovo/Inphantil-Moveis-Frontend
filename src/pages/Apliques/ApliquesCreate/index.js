import React, { useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../../components/Loading/Loading';
import styles from '../../../styles/Formulario.module.css';
import { toast } from 'react-toastify';

export const ApliquesCreate = () => {
    const [codigo, setCodigo] = useState('');
    const [imagem, setImagem] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [estoque, setEstoque] = useState(false);
    const [ordem, setOrdem] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Define como carregando ao mudar

        const payload = {
            codigo,
            imagem,
            quantidade: parseInt(quantidade, 10),
            estoque,
            ordem: parseInt(ordem, 10),
        };

        console.log('Payload enviado:', payload, typeof payload.estoque);

        try {
            const response = await Api.post(
                Api.addUrl('apliques'),
                payload,
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 201) {
                console.log('Enviado com sucesso');
                setCodigo('');
                setImagem('');
                setQuantidade('');
                setEstoque('');
                setOrdem('');
                setIsLoading(false); // Define como carregando ao mudar
                toast.success('Aplique adicionado com sucesso!');
            } else {
                setError(error.response.data.message);
                setIsLoading(false); // Define como carregando ao mudar
            }
        } catch (error) {
            // Em caso de erro durante a requisição
            console.error('Erro na requisição:', error);
            setError(
                error.response
                    ? error.response.data.message
                    : 'Erro na requisição'
            );
            setIsLoading(false); // Define como carregando ao mudar
        }
    };
    return (
        <div className={styles.containerFormulario}>
            {isLoading && <Loading />}
            <div>
                <h1>Adicionar novo Aplique</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit} className=".containerFormulario">
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
                        onChange={(e) => setEstoque(e.target.value === 'true')}
                        required
                    >
                        <option value=""></option>
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

                    <button type="submit">Salvar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>{' '}
        </div>
    );
};
