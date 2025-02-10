import React from "react";
import "../../Style/style.css";
import { CalculadoraSobMedida } from "../../components/CalculadoraSobMedida";
import CalculadoraSobMedidaColchao from "../../components/CalculadoraSobMedidaColchao";

export const CalculadoraParaLencois = () => {
  return (
    <div>
      <CalculadoraSobMedida />
      <hr className="hr" />
      <CalculadoraSobMedidaColchao />
    </div>
  );
};
