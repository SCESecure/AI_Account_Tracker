import { useState } from "react";
import CategoryInput from "./CategoryInput";
import ExpenseInput from "./ExpenseInput";
import IncomeInput from "./IncomeInput";

export default function InputList() {
  const [isIncome, setIsIncome] = useState<boolean>(true);

  const handleIsIncome = (): void => {
    if (!isIncome) {
      console.log("Income Mode");
      setIsIncome(true);
      return;
    }
    console.log("Expense Mode");
    setIsIncome(false);
    return;
  };

  return (
    <>
      <h3>Hello, InputList Component!</h3>

      <button onClick={handleIsIncome} disabled={isIncome}>
        수입
      </button>
      <button onClick={handleIsIncome} disabled={!isIncome}>
        지출
      </button>

      <CategoryInput />
      <IncomeInput />
      <ExpenseInput />
    </>
  );
}
