import React from 'react';
// import '../../Style/style.css';
import { CalculadoraNovaSobMedidaColchao } from '../../components/CalculadoraNova/CalculadoraNovaSobMedidaColchao';
import { CalculadoraNovaSobMedida } from '../../components/CalculadoraNova/CalculadoraNovaSobMedida';

export const CalculadoraNova = () => {
    return (
        <div>
            <CalculadoraNovaSobMedida />
            <hr className="hr" />
            <CalculadoraNovaSobMedidaColchao />
        </div>
    );
};
