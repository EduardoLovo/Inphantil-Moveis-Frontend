import React, { useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../../components/Loading/Loading';
import styles from '../../../styles/Formulario.module.css';
import { toast } from 'react-toastify';

export const SinteticoCreate = () => {
    const [codigo, setCodigo] = useState('');
    const [imagem, setImagem] = useState('');
    const [estoque, setEstoque] = useState('');
    const [cor, setCor] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); //  Define como carregando ao mudar

        const payload = {
            codigo,
            imagem,
            estoque,
            cor,
        };

        try {
            const response = await Api.post(
                Api.addUrl('sintetico'),
                payload,
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 201) {
                console.log('Enviado com sucesso');
                setCodigo('');
                setEstoque('');
                setImagem('');
                setCor('');
                setIsLoading(false); // Define como carregando ao mudar
                toast.success('Sintetico adicionado com sucesso!');
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
                <h1>Adicionar novo Sintetico</h1>
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

                    <label>Estoque:</label>
                    <select
                        value={estoque}
                        onChange={(e) => setEstoque(e.target.value === 'true')}
                        required
                    >
                        <option></option>
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label>Cor:</label>
                    <select
                        value={cor}
                        onChange={(e) => setCor(e.target.value)}
                        required
                    >
                        <option></option>
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

                    <button type="submit">Salvar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};
