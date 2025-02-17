import React from 'react';
// import '../../Style/style.css';
import { CalculadoraNovaSobMedidaColchao } from '../../components/CalculadoraNova/CalculadoraNovaSobMedidaColchao';
import { CalculadoraNovaSobMedida } from '../../components/CalculadoraNova/CalculadoraNovaSobMedida';
import './Calculadoras.css';

export const CalculadoraNova = () => {
    return (
        <div className="padding-top">
            <CalculadoraNovaSobMedida />
            <hr className="hr" />
            <CalculadoraNovaSobMedidaColchao />
        </div>
    );
};
