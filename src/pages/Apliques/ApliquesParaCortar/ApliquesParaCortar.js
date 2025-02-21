import React from 'react';
import { ListaDeApliques } from '../../../components/Apliques/ListaDeApliques/ListaDeApliques';
import '../../../styles/Inphantil.css';

export const ApliquesParaCortar = () => {
    return (
        <div>
            <h1 className="titulo">Apliques para cortar</h1>
            <div>
                <ListaDeApliques tipoDaLista="corte" />
            </div>
        </div>
    );
};
