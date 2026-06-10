import { useState } from "react";
import CategoryInput from "./CategoryInput";
import ValueInput from "./ValueInput";
import type { List } from "../Body";

export default function InputList({ defaultList }: { defaultList: List[] }) {
  const [isCategoryOn, setIsCategoryOn] = useState<boolean>(false);
  const [isIncome, setIsIncome] = useState<boolean>(true);

  const handleIsIncome = (): void => {
    if (!isCategoryOn) {
      // 값을 입력할 때
      if (!isIncome) {
        console.log("Value_Income Mode");
        setIsIncome(true);
        return;
      }
      console.log("Value_Expense Mode");
      setIsIncome(false);
      return;
    }
    // 카테고리 화면일 때
    if (!isIncome) {
      console.log("Category_Income Mode");
      setIsIncome(true);
      return;
    }
    console.log("Category_Expense Mode");
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
      <div>
        {isCategoryOn && <strong>카테고리 유형</strong>}
        <div>
          <button onClick={handleIsIncome} disabled={isIncome}>
            수입
          </button>
          <button onClick={handleIsIncome} disabled={!isIncome}>
            지출
          </button>
        </div>
      </div>

      {isCategoryOn && <CategoryInput />}
      {!isCategoryOn && <ValueInput defaultList={defaultList} />}
    </>
  );
}
