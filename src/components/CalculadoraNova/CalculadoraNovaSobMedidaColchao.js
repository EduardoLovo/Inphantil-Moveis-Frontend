import React, { useState } from 'react';

export const CalculadoraNovaSobMedidaColchao = () => {
    const [resultado, setResultado] = useState('');
    const [larguraDigitada, setLarguraDigita] = useState('');
    const [comprimentoDigitado, setComprimentoDigitado] = useState('');
    const [alturaDigitada, setAlturaDigitada] = useState('');
    const [acessorio, setAcessorio] = useState('');

    // Função para formatar os valores enquanto o usuário digita
    const formatarMedida = (valor) => {
        let rawValue = valor.replace(/\D/g, ''); // Remove tudo que não for número
        if (rawValue === '') return '';

        let numericValue = (parseInt(rawValue, 10) / 100).toFixed(2); // Divide por 100 e mantém 2 casas decimais
        return numericValue.replace('.', ','); // Substitui ponto por vírgula
    };

    const calcular = (evento) => {
        evento.preventDefault();
        const largura = parseFloat(larguraDigitada.replace(',', '.')); // Converte para número
        const comprimento = parseFloat(comprimentoDigitado.replace(',', '.')); // Converte para número
        const altura = parseFloat(alturaDigitada.replace(',', '.')); // Converte para número

        if (isNaN(largura) || isNaN(comprimento)) {
            setResultado('Erro: Digite medidas válidas.');
            return;
        }

        // Interno
        const larguraInterno = largura + 0.04;
        const comprimentoInterno = comprimento + 0.02;

        // Externo
        const larguraExterno = larguraInterno + 0.16;
        const comprimentoExterno = comprimentoInterno + 0.16;

        // Altura
        const diferenca = altura - 0.1;
        const alturaExterno = diferenca + 0.23;
        const alturaInterno = diferenca + 0.21;

        // Acessorio lençol
        const larguraLencol = largura + (altura + 0.13) * 2;
        const comprimentoLencol = comprimento + (altura + 0.13) * 2;

        // Acessorio virol
        const larguraVirol = largura + 0.4;
        const comprimentoVirol = comprimento + 0.7;

        setResultado(
            <section className="resultadoCalculadoraCamaPhant">
                <h3>Resultado</h3>
                <div>
                    <label>Tamanho do colchão:</label>
                    <p>
                        {largura.toFixed(2).replace('.', ',')} x{' '}
                        {comprimento.toFixed(2).replace('.', ',')} x{' '}
                        {altura.toFixed(2).replace('.', ',')}
                    </p>
                </div>
                <div>
                    <label>Externo: </label>
                    <p>
                        {larguraExterno.toFixed(2).replace('.', ',')} x{' '}
                        {comprimentoExterno.toFixed(2).replace('.', ',')} x{' '}
                        {alturaExterno.toFixed(2).replace('.', ',')}
                    </p>
                </div>
                <div>
                    <label>Interno: </label>
                    <p>
                        {larguraInterno.toFixed(2).replace('.', ',')} x{' '}
                        {comprimentoInterno.toFixed(2).replace('.', ',')} x{' '}
                        {alturaInterno.toFixed(2).replace('.', ',')}
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
                            <p>
                                {(altura + 0.12).toFixed(2).replace('.', ',')} x{' '}
                                {(altura + 0.12).toFixed(2).replace('.', ',')}
                            </p>
                        </div>
                    )}
                    {acessorio === 'virol' && (
                        <div>
                            <label>Virol:</label>
                            <div>
                                {larguraVirol.toFixed(2).replace('.', ',')} x{' '}
                                {comprimentoVirol.toFixed(2).replace('.', ',')}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    };

    return (
        <div className="contentCalculadoraCamaPhant">
            <div className="sombra">
                <h3>Sob Medida com medida do colchão do cliente:</h3>
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
                            <label>Altura:</label>
                            <input
                                type="text"
                                step="0.01"
                                min="0.00"
                                id="altura"
                                value={alturaDigitada}
                                onChange={(e) =>
                                    setAlturaDigitada(
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
