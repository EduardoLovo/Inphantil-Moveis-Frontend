import React from 'react';
import { ListaTecidoParaLencol } from '../../../components/TecidoParaLencol/ListaTecidoParaLencol/ListaTecidoParaLencol';

export const TecidosParaLencolCatalogo = () => {
    return (
        <div>
            <h1 className="titulo">Catálogo de tecidos para lençol</h1>
            <div>
                <ListaTecidoParaLencol />
            </div>
        </div>
    );
};
