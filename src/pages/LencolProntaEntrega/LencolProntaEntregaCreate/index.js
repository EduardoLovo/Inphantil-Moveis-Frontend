import React, { useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../../components/Loading/Loading';
import styles from '../../../styles/Formulario.module.css';
import { toast } from 'react-toastify';

export const LencolProntaEntregaCreate = () => {
    const [codigo, setCodigo] = useState('');
    const [imagem, setImagem] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [cor, setCor] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Define como carregando ao mudar

        const payload = {
            codigo,
            imagem,
            quantidade,
            cor,
            tamanho,
        };

        try {
            const response = await Api.post(
                Api.addUrl('lencol-pronta-entrega'),
                payload,
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 201) {
                console.log('Enviado com sucesso');
                setCodigo('');
                setImagem('');
                setQuantidade('');
                setCor('');
                setTamanho('');
                setIsLoading(false); // Define como carregando ao mudar
                toast.success('Lençol adicionado com sucesso!');
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
                <h1>Adicionar novo Lençol pronta-entrega</h1>
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

                    <button type="submit">Salvar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};
