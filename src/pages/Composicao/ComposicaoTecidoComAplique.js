import React, { useEffect, useState } from 'react';
import { Api } from '../../services/Api';
import './ComposicaoTecidoComAplique.css';

export const ComposicaoTecidoComAplique = () => {
    const [apliques, setApliques] = useState([]);
    const [tecidoParaLencol, setTecidoParaLencol] = useState([]);
    const [imagemDoTecido, setImagemDoTecido] = useState('');
    const [imagemDoAplique, setImagemDoAplique] = useState('');
    const [resultado, setResultado] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState('');
    const [escolha, setEscolha] = useState('');

    // Tecidos
    const loadDataTecido = async () => {
        try {
            const response = await Api.get(
                Api.readAllUrl('tecido-para-lencol')
            );
            setTecidoParaLencol(
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

    // Apliques
    const loadDataAplique = async () => {
        try {
            const response = await Api.get(Api.readAllUrl('aplique'));
            setApliques(response.data.sort((a, b) => a.ordem - b.ordem));
            setIsLoading(false);
        } catch (error) {
            setError('Erro ao carregar apliques. Tente novamente.');
            setIsLoading(false);
            console.error('Erro ao buscar apliques:', error);
        }
    };
    useEffect(() => {
        loadDataAplique();
    }, []);

    const tecidoEscolhido = (e) => {
        e.preventDefault();
        setEscolha('aplique');
        setImagemDoTecido(e.target.src);
        console.log(imagemDoTecido);
        window.scrollTo({
            top: 0, // Quantidade de pixels para descer
            behavior: 'smooth', // Suaviza o movimento
        });
    };

    const apliqueEscolhido = (e) => {
        e.preventDefault();
        setImagemDoAplique(e.target.src);
        setResultado(true);
        window.scrollTo({
            top: 0, // Quantidade de pixels para descer
            behavior: 'smooth', // Suaviza o movimento
        });
    };

    // const sortedTecidoParaLencol = tecidoParaLencol.sort((a, b) =>
    //     a.cor.localeCompare(b.cor)
    // );
    // const sortedApliques = apliques.sort((a, b) => a.ordem - b.ordem);

    return (
        <div className="contentComposicoes">
            <h1 className="titulo">Composições </h1>

            <div className="texto-composicoes">
                <p>
                    Clique no tecido depois no aplique para montar a composição.
                </p>
                <h5>
                    <p>
                        Muito importante! O tom da cor do tecido, pode mudar de
                        acordo com a tela do seu dispositivo.
                    </p>{' '}
                </h5>
            </div>

            {resultado && (
                <div className="contentResultado">
                    <button
                        onClick={() => setEscolha('')}
                        className="novo-tecido"
                    >
                        Escolher outro tecido
                    </button>
                    <div className="resultadoComposicoes">
                        <img src={imagemDoTecido} alt="Imagem do tecido" />
                        <img src={imagemDoAplique} alt="Imagem do aplique" />
                        <img src={imagemDoTecido} alt="Imagem do tecido" />
                    </div>
                </div>
            )}
            {escolha === '' && (
                <div className="lista-de-tecidos">
                    {tecidoParaLencol.map((tecido, index) => (
                        <div key={index} className="contentCard">
                            <img
                                src={tecido.imagem}
                                alt="imagem do tecido"
                                onClick={tecidoEscolhido}
                            />
                            <p>{tecido.cor}</p>
                        </div>
                    ))}
                </div>
            )}
            {escolha === 'aplique' && (
                <div className="lista-de-apliques">
                    {apliques.map((aplique, index) => (
                        <div key={index}>
                            {aplique.estoque === false &&
                            aplique.quantidade === 0 ? (
                                ''
                            ) : (
                                <div className="contentCardTecido">
                                    <img
                                        src={aplique.imagem}
                                        alt="Imagem do aplique"
                                        onClick={apliqueEscolhido}
                                    />
                                    <p>{aplique.codigo}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
