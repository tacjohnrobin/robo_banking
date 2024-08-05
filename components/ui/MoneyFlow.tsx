import React from "react";
import { Expenditure } from "./LineChart";

const MoneyFlow = () => {
  return (
    <section className="total-balance">
      <div className="w-full">
        <Expenditure />
      </div>
    </section>
  );
};

export default MoneyFlow;
