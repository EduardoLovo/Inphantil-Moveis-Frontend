import React from 'react';
import '../../../styles/Inphantil.css';
import { ListaDePantone } from '../../../components/Pantone/ListaDePantone/ListaDePantone';

export const PantoneCatalogo = () => {
    return (
        <div>
            <h1 className="titulo">Catálogo de Pantone</h1>
            <div>
                <ListaDePantone />
            </div>
        </div>
    );
};
