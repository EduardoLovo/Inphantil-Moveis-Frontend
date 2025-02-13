import React, { useEffect, useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';
import { CardLencolProntaEntrega } from '../CardLencolProntaEntrega/CardLencolProntaEntrega';

export const ListaLencolProntaEntrega = (props) => {
    const tamanho = props.tamanho;
    const [lencoisProntaEntrega, setLencoisProntaEntrega] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState('');

    // const type = localStorage.getItem('user');

    const loadData = async () => {
        try {
            const response = await Api.get(
                Api.readAllUrl('lencol-pronta-entrega')
            );
            setLencoisProntaEntrega(response.data);
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

    const sortedLencoisProntaEntrega = lencoisProntaEntrega.sort((a, b) =>
        a.codigo.localeCompare(b.codigo)
    );

    return (
        <div className="contentListaDeApliques">
            {isLoading && <Loading />}
            {sortedLencoisProntaEntrega.map((lencol, index) => (
                <div key={index}>
                    {tamanho === lencol.tamanho && (
                        <CardLencolProntaEntrega lencol={lencol} />
                    )}
                </div>
            ))}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
