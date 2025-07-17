import React, { useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../../components/Loading/Loading';
import styles from '../../../styles/Formulario.module.css';
import { toast } from 'react-toastify';

export const ApliquesCreate = () => {
    const [codigo, setCodigo] = useState('');
    const [imagem, setImagem] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [estoque, setEstoque] = useState('');
    const [ordem, setOrdem] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento

    const resetForm = () => {
        setCodigo('');
        setImagem('');
        setQuantidade('');
        setEstoque(null);
        setOrdem('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Validação simples no front
        if (!codigo.trim()) {
            setError('Código é obrigatório.');
            setIsLoading(false);
            return;
        }
        if (!imagem.trim()) {
            setError('Imagem é obrigatória.');
            setIsLoading(false);
            return;
        }
        if (quantidade === '' || isNaN(Number(quantidade))) {
            setError('Quantidade inválida.');
            setIsLoading(false);
            return;
        }
        if (ordem === '' || isNaN(Number(ordem))) {
            setError('Ordem inválida.');
            setIsLoading(false);
            return;
        }
        if (estoque === null) {
            setError('Selecione se está em estoque.');
            setIsLoading(false);
            return;
        }

        // Converte para tipos esperados pelo backend
        const payload = {
            codigo: codigo.trim(),
            imagem: imagem.trim(),
            quantidade: Number(quantidade),
            estoque: Boolean(estoque), // já é bool, mas garantimos
            ordem: Number(ordem),
        };

        console.log('Payload enviado:', payload);

        try {
            const response = await Api.post(
                Api.addUrl('aplique'),
                payload,
                true
            );

            if (response.status === 201 || response.status === 200) {
                toast.success('Aplique adicionado com sucesso!');
                resetForm();
            } else {
                const msg =
                    response.data?.message ??
                    'Erro inesperado ao criar aplique.';
                setError(msg);
                toast.error(msg);
            }
        } catch (err) {
            console.error('Erro na requisição:', err);
            const msg =
                err?.response?.data?.message ??
                err?.response?.data?.error ??
                err?.message ??
                'Erro na requisição.';
            setError(msg);
            toast.error(msg);
        } finally {
            setIsLoading(false);
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
                        onChange={(e) => setQuantidade(+e.target.value)}
                        type="number"
                        required
                    />

                    <label>Estoque:</label>
                    <select
                        value={
                            estoque === null
                                ? ''
                                : estoque === true
                                ? 'true'
                                : 'false'
                        }
                        onChange={(e) => {
                            const v = e.target.value;
                            if (v === '') return setEstoque(null);
                            setEstoque(v === 'true');
                        }}
                        required
                    >
                        <option value=""></option>
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label>Ordem:</label>
                    <input
                        value={ordem}
                        onChange={(e) => setOrdem(+e.target.value)}
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
