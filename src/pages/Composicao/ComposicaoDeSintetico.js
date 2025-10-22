import React, { useEffect, useState } from 'react';
import { Api } from '../../services/Api';
import './ComposicaoTecidoComAplique.css';
import { Loading } from '../../components/Loading/Loading';

export const ComposicaoDeSintetico = () => {
    const [sinteticos, setSinteticos] = useState([]);
    const [imagemDoExterno, setImagemDoExterno] = useState('');
    const [imagemDoInterno, setImagemDoInterno] = useState('');
    const [codigoExterno, setCodigoExterno] = useState('');
    const [codigoInterno, setCodigoInterno] = useState('');
    const [resultado, setResultado] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState('');
    const [escolha, setEscolha] = useState('');

    // Sinteticos
    const loadDataTecido = async () => {
        try {
            const response = await Api.get(Api.readAllUrl('sintetico'));
            setSinteticos(
                response.data.sort((a, b) => a.cor.localeCompare(b.cor))
            );
            setIsLoading(false);
        } catch (error) {
            setError('Erro ao carregar lençois. Tente novamente.');
            setIsLoading(false);
            console.error('Erro ao buscar lençol:', error);
        }
    };
    useEffect(() => {
        loadDataTecido();
    }, []);

    const externoEscolhido = (e) => {
        e.preventDefault();
        setCodigoExterno(e.target.dataset.codigo);
        setEscolha('interno');
        setImagemDoExterno(e.target.src);
        window.scrollTo({
            top: 0, // Quantidade de pixels para descer
            behavior: 'smooth', // Suaviza o movimento
        });
    };

    const internoEscolhido = (e) => {
        e.preventDefault();
        setCodigoInterno(e.target.dataset.codigo);
        setImagemDoInterno(e.target.src);
        setResultado(true);
        window.scrollTo({
            top: 0, // Quantidade de pixels para descer
            behavior: 'smooth', // Suaviza o movimento
        });
    };

    return (
        <div className="contentComposicoes">
            {isLoading && <Loading />}

            <h1 className="titulo">Composições </h1>

            <div className="texto-composicoes">
                <p>
                    Clique no material externo depois no interno para montar a
                    composição.
                </p>
                <h5>
                    <p>
                        Muito importante! O tom da cor do material, pode mudar
                        de acordo com a tela do seu dispositivo.
                    </p>
                </h5>
            </div>

            {resultado && (
                <div className="contentResultado">
                    <button
                        onClick={() => setEscolha('')}
                        className="novo-tecido"
                    >
                        Escolher outro externo
                    </button>
                    <div className="resultadoComposicoes">
                        <img src={imagemDoExterno} alt="Imagem do tecido" />
                        <img src={imagemDoInterno} alt="Imagem do aplique" />
                    </div>
                    <div className="codigo-resultado">
                        <p>{String(codigoExterno).split('-')[0]} </p>
                        <p>{String(codigoInterno)}</p>
                    </div>
                </div>
            )}
            {escolha === '' && (
                <div>
                    <h2>Externos</h2>
                    <div className="lista-de-tecidos">
                        {sinteticos.map((sintetico, index) => (
                            <div key={index}>
                                {(sintetico.estoque === true &&
                                    sintetico.cor === 'Externo') ||
                                sintetico.tapete === false ? (
                                    <div className="contentCard">
                                        <img
                                            src={sintetico.imagem}
                                            alt="imagem do tecido"
                                            onClick={externoEscolhido}
                                            data-codigo={sintetico.codigo}
                                        />
                                        <p>{sintetico.codigo}</p>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        ))}
                    </div>{' '}
                </div>
            )}
            {escolha === 'interno' && (
                <div>
                    <h2>Internos</h2>
                    <div className="lista-de-apliques">
                        {sinteticos.map((sintetico, index) => (
                            <div key={index}>
                                {(sintetico.estoque === false &&
                                    sintetico.cor === 'externo') ||
                                sintetico.tapete === true ? (
                                    ''
                                ) : (
                                    <div className="contentCardTecido">
                                        <img
                                            src={sintetico.imagem}
                                            alt="Imagem do aplique"
                                            onClick={internoEscolhido}
                                            data-codigo={sintetico.codigo}
                                        />
                                        <p>{sintetico.codigo}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
