import React from 'react';
import { ListaDeApliques } from '../../../components/Apliques/ListaDeApliques/ListaDeApliques';
import '../../../styles/Inphantil.css';

export const ApliquesParaCabana = () => {
    return (
        <div>
            <h1 className="titulo">Catálogo de Apliques</h1>
            <div>
                <ListaDeApliques tipoDaLista="cabana" />
            </div>
        </div>
    );
};
