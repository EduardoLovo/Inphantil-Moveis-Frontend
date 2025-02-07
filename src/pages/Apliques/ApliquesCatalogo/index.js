import React from 'react';
import { ListaDeApliques } from '../../../components/Apliques/ListaDeApliques/ListaDeApliques';
import '../../../styles/Inphantil.css';

export const ApliquesCatalogo = () => {
    return (
        <div>
            <h1 className="titulo">Catalogo de Apliques</h1>
            <div>
                <ListaDeApliques />
            </div>
        </div>
    );
};
