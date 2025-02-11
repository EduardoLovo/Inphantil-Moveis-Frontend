import React, { useState } from 'react';

export const Calculadora6040 = () => {
    const [resultado, setResultado] = useState('');
    const [valorEntrada, setValorEntrada] = useState('');
    const [valorTotal, setValorTotal] = useState('');

    // Função para formatar os valores enquanto o usuário digita
    const formatarMedida = (valor) => {
        let rawValue = valor.replace(/\D/g, ''); // Remove tudo que não for número
        if (rawValue === '') return '';

        let numericValue = (parseInt(rawValue, 10) / 100).toFixed(2); // Divide por 100 e mantém 2 casas decimais
        return numericValue.replace('.', ','); // Substitui ponto por vírgula
    };

    const calcular = (event) => {
        event.preventDefault();

        const ve = parseFloat(valorEntrada.replace(',', '.'));
        const vt = parseFloat(valorTotal.replace(',', '.'));

        const ve6 = ve * (6 / 100);
        const result = vt - ve - ve6;

        setResultado();

        setResultado(
            <div className="resultadoCalculadoraCamaPhant">
                <h3>Resultado</h3>
                <div>
                    <label>Valor da entrada: </label>
                    <p>R$ {ve.toFixed(2).replace('.', ',')}</p>
                </div>
                <div>
                    <label>Valor total: </label>
                    <p>R$ {vt.toFixed(2).replace('.', ',')}</p>
                </div>
                <div>
                    <label>
                        Valor que ficará para o cliente pagar a prazo:
                    </label>
                    <p>R$ {result.toFixed(2).replace('.', ',')}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="contentCalculadoraCamaPhant">
            <div className="sombra">
                <h1>Calculadora Á Vista / Prazo</h1>

                <div className="contentCalculadoraCamaPhantFormEResultado">
                    <form
                        onSubmit={calcular}
                        className="formularioCalculadoraCamaPhant"
                    >
                        <div className="mb-3">
                            <label>Valor da entrada</label>
                            <input
                                type="text"
                                id="ve"
                                step="0.01"
                                min="0.00"
                                value={`R$ ${valorEntrada}`}
                                onChange={(e) =>
                                    setValorEntrada(
                                        formatarMedida(e.target.value)
                                    )
                                }
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label>Valor total (sem o valor do frete)</label>
                            <input
                                type="text"
                                id="vt"
                                step="0.01"
                                min="0.00"
                                value={`R$ ${valorTotal}`}
                                onChange={(e) =>
                                    setValorTotal(
                                        formatarMedida(e.target.value)
                                    )
                                }
                                required
                            />
                        </div>

                        <button type="submit">Calcular</button>
                    </form>
                    {resultado && <section>{resultado}</section>}
                </div>
            </div>
        </div>
    );
};
