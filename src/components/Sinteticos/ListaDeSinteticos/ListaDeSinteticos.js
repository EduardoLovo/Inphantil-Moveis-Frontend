import React, { useEffect, useState } from 'react';
import { Loading } from '../../Loading/Loading';
import { CardSinteticos } from '../CardSinteticos/CardSinteticos';
import { Api } from '../../../services/Api';

export const ListaDeSinteticos = (props) => {
    const cor = props.cor;
    const [sinteticos, setSinteticos] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState('');

    const type = localStorage.getItem('user');

    const loadData = async () => {
        try {
            const response = await Api.get(Api.readAllUrl('sintetico'));
            setSinteticos(response.data);
            setIsLoading(false);
        } catch (error) {
            setError('Erro ao carregar sinetico. Tente novamente.');
            setIsLoading(false);
            console.error('Erro ao buscar sinteticos:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const sortedSinteticos = sinteticos.sort((a, b) =>
        a.codigo.localeCompare(b.codigo)
    );

    return (
        <div className="contentListaDeApliques">
            {isLoading && <Loading />}
            {sortedSinteticos.map((sintetico, index) => (
                <div key={index}>
                    {type !== 'adm' && sintetico.estoque === false ? (
                        ''
                    ) : (
                        <div>
                            {!cor ? (
                                <CardSinteticos sintetico={sintetico} />
                            ) : (
                                <div>
                                    {sintetico.cor === cor && (
                                        <CardSinteticos
                                            sintetico={sintetico}
                                            key={index}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
