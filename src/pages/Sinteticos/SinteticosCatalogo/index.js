import React, { useState } from 'react';
import { ListaDeSinteticos } from '../../../components/Sinteticos/ListaDeSinteticos/ListaDeSinteticos';
import './SinteticoCatalogo.css';

export const SinteticoCatalogo = () => {
    const [cor, setCor] = useState('');
    return (
        <div>
            <h1 className="titulo">Catálogo de Cores</h1>

            <div className="menuDoCatalogoSintetico">
                <button onClick={() => setCor('Amarelo')}>Amarelo</button>
                <button onClick={() => setCor('Azul')}>Azul</button>
                <button onClick={() => setCor('Bege')}>Bege</button>
                <button onClick={() => setCor('Branco')}>Branco</button>
                <button onClick={() => setCor('Cinza')}>Cinza</button>
                <button onClick={() => setCor('Laranja')}>Laranja</button>
                <button onClick={() => setCor('Lilas')}>Lilas</button>
                <button onClick={() => setCor('Mostarda')}>Mostarda</button>
                <button onClick={() => setCor('Rosa')}>Rosa</button>
                <button onClick={() => setCor('Tiffany')}>Tiffany</button>
                <button onClick={() => setCor('Verde')}>Verde</button>
                <button onClick={() => setCor('Vermelho')}>Vermelho</button>
                <button onClick={() => setCor('Externo')}>Externo</button>
            </div>
            <div className="avisoCatalogoSintetico">
                <h3>***MUITO IMPORTANTE***</h3>
                <p className="">
                    O tom das cores pode alterar de aparelho para aparelho.
                </p>
                <p className="">
                    Utilize o brilho da tela no máximo para visualizar o tom
                    mais próximo possível do real.
                </p>
            </div>
            <div>
                <ListaDeSinteticos cor={cor} />
            </div>
        </div>
    );
};
