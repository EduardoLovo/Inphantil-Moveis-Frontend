import React from 'react';
import { ListaDeSinteticos } from '../../../components/Sinteticos/ListaDeSinteticos/ListaDeSinteticos';

export const SinteticoCatalogo = () => {
    return (
        <div>
            <h1 className="titulo">Catalogo de Sintetico</h1>
            <div>
                <ListaDeSinteticos />
            </div>
        </div>
    );
};
