import React, { useEffect, useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';
import { CardTecidoParaLencol } from '../CardTecidoParaLencol/CardTecidoParaLencol';

export const ListaTecidoParaLencol = () => {
    const [tecidoParaLencol, setTecidoParaLencol] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Estado de carregamento
    const [error, setError] = useState('');

    const type = localStorage.getItem('user');

    const loadData = async () => {
        try {
            const response = await Api.get(
                Api.readAllUrl('tecido-para-lencol')
            );
            setTecidoParaLencol(response.data);
            setIsLoading(false);
        } catch (error) {
            setError('Erro ao carregar lençois. Tente novamente.');
            setIsLoading(false);
            console.error('Erro ao buscar lençol:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const sortedTecidoParaLencol = tecidoParaLencol.sort((a, b) =>
        a.cor.localeCompare(b.cor)
    );

    console.log(sortedTecidoParaLencol);

    return (
        <div className="contentListaDeApliques">
            {isLoading && <Loading />}
            {sortedTecidoParaLencol.map((tecido, index) => (
                <div key={index}>
                    {type !== 'adm' && tecido.estoque === false ? (
                        ''
                    ) : (
                        <CardTecidoParaLencol tecidoParaLencol={tecido} />
                    )}
                </div>
            ))}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
