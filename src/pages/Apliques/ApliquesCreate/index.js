import React, { useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../../components/Loading/Loading';
import styles from '../../../styles/Formulario.module.css';

export const ApliquesCreate = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [codigo, setCodigo] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [estoque, setEstoque] = useState('');
    const [ordem, setOrdem] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento

    const handleFileChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Define como carregando ao mudar

        // Verifica se uma imagem foi selecionada
        if (!selectedImage) {
            alert('Por favor, selecione uma imagem.');
            return;
        }

        // Criando FormData
        const formData = new FormData();
        formData.append('codigo', codigo);
        formData.append('imagem', selectedImage); // O backend espera req.file
        formData.append('quantidade', parseInt(quantidade));
        formData.append('estoque', estoque === 'true'); // Booleano
        formData.append('ordem', parseInt(ordem));

        console.log(formData);
        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }

        try {
            const response = await Api.post(
                Api.addApliquesUrl(),
                formData,
                true,
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 201) {
                console.log('Enviado com sucesso');
                setIsLoading(false); // Define como carregando ao mudar
            } else {
                setError(error.response.data.message);
                setIsLoading(false); // Define como carregando ao mudar
            }
        } catch (error) {
            // Em caso de erro durante a requisição
            console.error('Erro na requisição:', error);
            setError(error.response.data.message);
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
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
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

                    <button type="submit">Salvar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};
