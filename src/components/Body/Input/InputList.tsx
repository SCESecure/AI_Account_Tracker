import { useState } from "react";
import CategoryInput from "./CategoryInput";
import ExpenseInput from "./ExpenseInput";
import IncomeInput from "./IncomeInput";

export default function InputList() {
  const [isCategoryOn, setIsCategoryOn] = useState<boolean>(false);
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

  const handleIsCategoryOn = (): void => {
    if (!isCategoryOn) {
      console.log("Category Screen : On");
      setIsCategoryOn(true);
      return;
    }
    console.log("Category Screen : Off");
    setIsCategoryOn(false);
    return;
  };

  return (
    <>
      <h3>Hello, InputList Component!</h3>

      <button onClick={handleIsCategoryOn}>카테고리</button>
      {!isCategoryOn && (
        <div>
          <button onClick={handleIsIncome} disabled={isIncome}>
            수입
          </button>
          <button onClick={handleIsIncome} disabled={!isIncome}>
            지출
          </button>
        </div>
      )}

      {isCategoryOn && <CategoryInput />}
      {!isCategoryOn && <IncomeInput />}
      {!isCategoryOn && <ExpenseInput />}
    </>
  );
}
