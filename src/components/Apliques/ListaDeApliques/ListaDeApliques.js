import React, { useEffect, useState } from 'react';
import { Api } from '../../../services/Api';
import { Loading } from '../../Loading/Loading';
import { CardApliques } from '../CardApliques/CardApliques';
import './ListaDeApliques.css';
import { Filtro } from '../../Filtro';

export const ListaDeApliques = (props) => {
    const tipoDaLista = props.tipoDaLista;
    const [apliques, setApliques] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState('');
    const [texto, setTexto] = useState('');

    const userRaw = localStorage.getItem('user');
    const user = userRaw ? JSON.parse(userRaw) : null;

    const tipo = user?.tipo || 'desconhecido';

    const loadData = async () => {
        try {
            const response = await Api.get(Api.readAllUrl('aplique'));
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

    const onChange = (e) => {
        setTexto(e.target.value);
    };

    return (
        <div>
            {isLoading && <Loading />}
            <div className="inputPesquisa">
                <input
                    type="text"
                    className=""
                    onChange={onChange}
                    value={texto}
                    placeholder="Pesquisar por código"
                />
            </div>
            {!texto ? (
                <div className="contentListaDeApliques">
                    {sortedApliques.map((aplique, index) => (
                        <div key={index}>
                            {tipo !== 'adm' &&
                            aplique.estoque === false &&
                            aplique.quantidade === 0 ? (
                                ''
                            ) : (
                                <div>
                                    {tipoDaLista === 'corte' ? (
                                        <div>
                                            {aplique.quantidade < 3 &&
                                                aplique.estoque === true && (
                                                    <CardApliques
                                                        aplique={aplique}
                                                    />
                                                )}
                                        </div>
                                    ) : tipoDaLista === 'compra' ? (
                                        <div>
                                            {aplique.quantidade <= 5 &&
                                                aplique.estoque === false && (
                                                    <CardApliques
                                                        aplique={aplique}
                                                    />
                                                )}
                                        </div>
                                    ) : tipoDaLista === 'cabana' ? (
                                        <div>
                                            {aplique.estoque === true && (
                                                <CardApliques
                                                    aplique={aplique}
                                                />
                                            )}
                                        </div>
                                    ) : (
                                        <CardApliques aplique={aplique} />
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            ) : (
                <Filtro texto={texto} apliques={sortedApliques} />
            )}
        </div>
    );
};
