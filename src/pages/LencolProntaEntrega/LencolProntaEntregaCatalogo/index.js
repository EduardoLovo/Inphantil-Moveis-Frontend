import React, { useState } from 'react';
import { ListaLencolProntaEntrega } from '../../../components/LencolProntaEntrega/ListaLencolProntaEntrega/ListaLencolProntaEntrega';
import './LencolProntaEntregaCatalogo.css'; // Importe seu arquivo CSS aqui
export const LencolProntaEntregaCatalogo = () => {
    const [tamanho, setTamanho] = useState('');

    return (
        <div>
            <h1 className="titulo">Catálogo de Lencois Pronta-Entrega</h1>
            <div className="menuDoCatalogoSintetico">
                <button
                    className={tamanho === 'Berco' ? 'botao-ativo' : ''}
                    onClick={() => setTamanho('Berco')}
                >
                    Berço
                </button>
                <button
                    className={tamanho === 'Junior' ? 'botao-ativo' : ''}
                    onClick={() => setTamanho('Junior')}
                >
                    Junior
                </button>
                <button
                    className={tamanho === 'Solteiro' ? 'botao-ativo' : ''}
                    onClick={() => setTamanho('Solteiro')}
                >
                    Solteiro
                </button>
                <button
                    className={tamanho === 'Solteirao' ? 'botao-ativo' : ''}
                    onClick={() => setTamanho('Solteirao')}
                >
                    Solteirão
                </button>
                <button
                    className={tamanho === 'Viuva' ? 'botao-ativo' : ''}
                    onClick={() => setTamanho('Viuva')}
                >
                    Viuva
                </button>
                <button
                    className={tamanho === 'Casal' ? 'botao-ativo' : ''}
                    onClick={() => setTamanho('Casal')}
                >
                    Casal
                </button>
                <button
                    className={tamanho === 'Queen' ? 'botao-ativo' : ''}
                    onClick={() => setTamanho('Queen')}
                >
                    Queen
                </button>
                <button
                    className={tamanho === 'King' ? 'botao-ativo' : ''}
                    onClick={() => setTamanho('King')}
                >
                    King
                </button>
            </div>
            <div>
                <ListaLencolProntaEntrega tamanho={tamanho} />
            </div>
        </div>
    );
};
