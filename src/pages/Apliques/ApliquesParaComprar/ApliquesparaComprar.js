import React, { useEffect, useState } from 'react';
import '../../../styles/Inphantil.css';
import { Api } from '../../../services/Api';
import { CardApliques } from '../../../components/Apliques/CardApliques/CardApliques';
import { Loading } from '../../../components/Loading/Loading';

export const ApliquesParaComprar = () => {
    const [apliques, setApliques] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState('');
    const loadData = async () => {
        try {
            const response = await Api.get(Api.readAllUrl('apliques'));
            setApliques(response.data);
            setIsLoading(false);
        } catch (error) {
            setError('Erro ao carregar apliques. Tente novamente.');
            setIsLoading(false);
            console.error('Erro ao buscar apliques:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const sortedApliques = apliques.sort((a, b) => a.ordem - b.ordem);

    return (
        <div>
            {isLoading && <Loading />}

            <h1 className="titulo">Apliques para comprar</h1>
            <div className="contentListaDeApliques">
                {sortedApliques.map((aplique, index) => (
                    <div key={index}>
                        {aplique.quantidade <= 5 &&
                            aplique.estoque === false && (
                                <CardApliques aplique={aplique} />
                            )}
                    </div>
                ))}
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
