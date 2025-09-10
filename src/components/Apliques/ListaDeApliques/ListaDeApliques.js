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
    const [ordenado, setOrdenado] = useState(false); // Estado do checkbox

    const userRaw = localStorage.getItem('user');
    const user = userRaw ? JSON.parse(userRaw) : null;

    const tipo = user?.tipo || 'desconhecido';

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

    // Aplica a ordenação dinamicamente quando o checkbox for marcado
    const sortedApliques = ordenado
        ? [...apliques].sort((a, b) => a.codigo.localeCompare(b.codigo)) // Ordena pelo código
        : [...apliques].sort((a, b) => a.ordem - b.ordem); // Ordena pela ordem numérica

    const onChange = (e) => {
        setTexto(e.target.value);
    };

    const mudarOrdem = () => {
        setOrdenado((prev) => !prev); // Alterna a ordenação ao clicar no checkbox
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
            {tipo !== 'desconhecido' && (
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        checked={ordenado}
                        onChange={mudarOrdem}
                    />
                    <label>Ordem numérica</label>
                </div>
            )}
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
                                    ) : tipoDaLista === 'cabana' ? (
                                        <div>
                                            {aplique.estoque === true && (
                                                <CardApliques
                                                    aplique={aplique}
                                                />
                                            )}
                                        </div>
                                    ) : (
                                        <CardApliques
                                            aplique={aplique}
                                            tipo={tipo}
                                        />
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
