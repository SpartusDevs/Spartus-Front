import React from "react";
import "./Finances.css";

const financialData = {
  income: 500000,
  expenses: 350000, 
  netProfit: 150000, 
  cashFlow: 20000, 
  assets: 700000, 
  liabilities: 300000, 
};

function Finances() {
  return (
    <div className="finances-container">
      <h1 className="finances-title">Área de Finanzas</h1>
      <div className="finances-summary">
        <h2>Resumen Financiero</h2>
        <div className="finance-item">
          <strong>Ingresos:</strong> ${financialData.income.toLocaleString()}
        </div>
        <div className="finance-item">
          <strong>Gastos:</strong> ${financialData.expenses.toLocaleString()}
        </div>
        <div className="finance-item">
          <strong>Beneficio Neto:</strong> ${financialData.netProfit.toLocaleString()}
        </div>
          </div>
    </div>
  );
}

export default Finances;
