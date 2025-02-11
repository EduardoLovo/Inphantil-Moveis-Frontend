import React from 'react';
import { ListaLencolProntaEntrega } from '../../../components/LencolProntaEntrega/ListaLencolProntaEntrega/ListaLencolProntaEntrega';

export const LencolProntaEntregaCatalogo = () => {
    return (
        <div>
            <h1 className="titulo">Catálogo de Lencois</h1>
            <div>
                <ListaLencolProntaEntrega />
            </div>
        </div>
    );
};
