import React, { useState } from 'react';
import { ListaLencolProntaEntrega } from '../../../components/LencolProntaEntrega/ListaLencolProntaEntrega/ListaLencolProntaEntrega';

export const LencolProntaEntregaCatalogo = () => {
    const [tamanho, setTamanho] = useState('');


    return (
        <div>
            <h1 className="titulo">Catálogo de Lencois Pronta-Entrega</h1>
            <div className="menuDoCatalogoSintetico">
                <button onClick={() => setTamanho('Berco')}>Berço</button>
                <button onClick={() => setTamanho('Junior')}>Junior</button>
                <button onClick={() => setTamanho('Solteiro')}>Solteiro</button>
                <button onClick={() => setTamanho('Solteirao')}>
                    Solteirão
                </button>
                <button onClick={() => setTamanho('Viuva')}>Viuva</button>
                <button onClick={() => setTamanho('Casal')}>Casal</button>
                <button onClick={() => setTamanho('Queen')}>Queen</button>
                <button onClick={() => setTamanho('King')}>King</button>
            </div>
            <div>
                <ListaLencolProntaEntrega tamanho={tamanho} />
            </div>
        </div>
    );
};
