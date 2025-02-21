import React, { useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../../components/Loading/Loading';
import styles from '../../../styles/Formulario.module.css';
import { toast } from 'react-toastify';

export const PantoneCreate = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [codigo, setCodigo] = useState('');
    const [estoque, setEstoque] = useState('');
    const [cor, setCor] = useState('');
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
            setIsLoading(false); // Define como carregando ao mudar
            return;
        }

        // Criando FormData
        const formData = new FormData();
        formData.append('codigo', codigo);
        formData.append('imagem', selectedImage); // O backend espera req.file
        formData.append('estoque', estoque); // Booleano
        formData.append('cor', cor);

        try {
            const response = await Api.post(
                Api.addUrl('pantone'),
                formData,
                true,
                true
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 201) {
                console.log('Enviado com sucesso');
                setCodigo('');
                setEstoque('');
                setCor('');
                setIsLoading(false); // Define como carregando ao mudar
                toast.success('Pantone adicionado com sucesso!');
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
        <div className={styles.displayflex}>
            <div className={styles.containerFormulario}>
                {isLoading && <Loading />}
                <div>
                    <h1>Adicionar novo Pantone</h1>
                </div>
                <div>
                    <form
                        onSubmit={handleSubmit}
                        className=".containerFormulario"
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
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />

                        <label>Estoque:</label>
                        <select
                            value={estoque}
                            onChange={(e) =>
                                setEstoque(e.target.value === 'true')
                            }
                            required
                        >
                            <option value=""></option>
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

                        <button type="submit">Salvar</button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </div>
    );
};
