import React, { useState } from 'react';
import './Calculadoras.css';

export const CalculadoraNovaSobMedida = () => {
    const [resultado, setResultado] = useState('');
    const [larguraDigitada, setLarguraDigita] = useState('');
    const [comprimentoDigitado, setComprimentoDigitado] = useState('');
    const [acessorio, setAcessorio] = useState('');

    // Função para formatar os valores enquanto o usuário digita
    const formatarMedida = (valor) => {
        let rawValue = valor.replace(/\D/g, ''); // Remove tudo que não for número
        if (rawValue === '') return '';

        let numericValue = (parseInt(rawValue, 10) / 100).toFixed(2); // Divide por 100 e mantém 2 casas decimais
        return numericValue.replace('.', ','); // Substitui ponto por vírgula
    };

    const calcular = (e) => {
        e.preventDefault();

        const largura = parseFloat(larguraDigitada.replace(',', '.')); // Converte para número
        const comprimento = parseFloat(comprimentoDigitado.replace(',', '.')); // Converte para número

        if (isNaN(largura) || isNaN(comprimento)) {
            setResultado('Erro: Digite medidas válidas.');
            return;
        }

        // Externo
        const larguraExterno = largura + 0.03;
        const comprimentoExterno = comprimento + 0.03;

        // Interno
        const larguraInterno = larguraExterno - 0.16;
        const comprimentoInterno = comprimentoExterno - 0.16;

        // Colchão
        const larguraColchao = larguraInterno - 0.04;
        const comprimentoColchao = comprimentoInterno - 0.02;

        // Acessorio
        const larguraLencol = larguraColchao + 0.48;
        const comprimentoLencol = comprimentoColchao + 0.46;

        const larguraVirol = largura + 0.4;
        const comprimentoVirol = comprimento + 0.7;

        // Resultado
        setResultado(
            <div className="resultadoCalculadoraCamaPhant">
                <h3>Resultado</h3>
                <div>
                    <label>Tamanho da cama:</label>
                    <p>
                        {largura.toFixed(2).replace('.', ',')} x{' '}
                        {comprimento.toFixed(2).replace('.', ',')}
                    </p>
                </div>
                <div>
                    <label>Externo: </label>
                    <p>
                        {larguraExterno.toFixed(2).replace('.', ',')} x{' '}
                        {comprimentoExterno.toFixed(2).replace('.', ',')}
                    </p>
                </div>
                <div>
                    <label>Interno: </label>
                    <p>
                        {larguraInterno.toFixed(2).replace('.', ',')} x{' '}
                        {comprimentoInterno.toFixed(2).replace('.', ',')}
                    </p>
                </div>
                <div>
                    <label>Colchão: </label>
                    <p>
                        {larguraColchao.toFixed(2).replace('.', ',')} x{' '}
                        {comprimentoColchao.toFixed(2).replace('.', ',')}
                    </p>
                </div>
                <div>
                    {acessorio === 'lençol' && (
                        <div className="resultadoLencol">
                            <label>Lençol: </label>
                            <p>
                                {larguraLencol.toFixed(2).replace('.', ',')} x{' '}
                                {comprimentoLencol.toFixed(2).replace('.', ',')}
                            </p>
                            <label> Quadrado: </label>
                            <p>Padrão</p>
                        </div>
                    )}
                    {acessorio === 'virol' && (
                        <div>
                            <label>Virol:</label>
                            <p>
                                {larguraVirol.toFixed(2).replace('.', ',')} x{' '}
                                {comprimentoVirol.toFixed(2).replace('.', ',')}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="contentCalculadoraCamaPhant">
            <div className="sombra">
                <h3>Sob Medida com medida da cama Phant:</h3>
                <div className="contentCalculadoraCamaPhantFormEResultado">
                    <form
                        onSubmit={calcular}
                        className="formularioCalculadoraCamaPhant"
                    >
                        <div>
                            <label>Cabeceira:</label>
                            <input
                                type="text"
                                step="0.01"
                                min="0.00"
                                id="largura"
                                value={larguraDigitada}
                                onChange={(e) =>
                                    setLarguraDigita(
                                        formatarMedida(e.target.value)
                                    )
                                }
                                placeholder="Digite a medida em metros"
                                required
                            />
                        </div>
                        <div>
                            <label>Lateral:</label>
                            <input
                                type="text"
                                step="0.01"
                                min="0.00"
                                id="comprimento"
                                value={comprimentoDigitado}
                                onChange={(e) =>
                                    setComprimentoDigitado(
                                        formatarMedida(e.target.value)
                                    )
                                }
                                placeholder="Digite a medida em metros"
                                required
                            />
                        </div>
                        <div>
                            <label>Acessorio:</label>
                            <select
                                id="acessorio"
                                onChange={(e) => setAcessorio(e.target.value)}
                            >
                                <option></option>
                                <option value="lençol">Lençol</option>
                                <option value="virol">Virol</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit">Calcular</button>
                        </div>
                    </form>

                    {resultado && <section>{resultado}</section>}
                </div>
            </div>
        </div>
    );
};
