import React, { useEffect, useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';
import { CardApliques } from '../CardApliques/CardApliques';
import './ListaDeApliques.css';

export const ListaDeApliques = () => {
    const [apliques, setApliques] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState('');

    const type = localStorage.getItem('user');

    const loadData = async () => {
        try {
            const response = await Api.get(Api.readAllApliquesUrl());
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
        <div className="contentListaDeApliques">
            {isLoading && <Loading />}
            {sortedApliques.map((aplique, index) => (
                <div key={index}>
                    {type !== 'adm' && aplique.estoque === false ? (
                        ''
                    ) : (
                        <CardApliques aplique={aplique} />
                    )}
                </div>
            ))}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
