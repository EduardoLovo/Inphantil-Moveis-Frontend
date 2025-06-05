import React from 'react';
import { ListaDeApliques } from '../../../components/Apliques/ListaDeApliques/ListaDeApliques';
import '../../../styles/Inphantil.css';
import './ApliquesCatalogo.css';

export const ApliquesCatalogo = () => {
    console.log('teste de deploy');

    return (
        <div>
            <h1 className="titulo">Catálogo de Apliques</h1>
            <div>
                <ListaDeApliques />
            </div>
        </div>
    );
};
