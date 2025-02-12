import React, { useEffect, useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';
import { CardPantone } from '../CardPantone/CardPantone';
// import './ListaDeApliques.css';

export const ListaDePantone = () => {
    const [pantones, setPantones] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState('');

    const type = localStorage.getItem('user');

    const loadData = async () => {
        try {
            const response = await Api.get(Api.readAllUrl('pantone'));
            setPantones(response.data);
            setIsLoading(false);
        } catch (error) {
            setError('Erro ao carregar pantone. Tente novamente.');
            setIsLoading(false);
            console.error('Erro ao buscar pantone:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const sortedPantone = pantones.sort((a, b) =>
        a.codigo.localeCompare(b.codigo)
    );
    return (
        <div className="contentListaDeApliques">
            {isLoading && <Loading />}
            {sortedPantone.map((pantone, index) => (
                <div key={index}>
                    {type !== 'adm' && pantone.estoque === false ? (
                        ''
                    ) : (
                        <CardPantone pantone={pantone} />
                    )}
                </div>
            ))}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
