import { useState, type Dispatch, type SetStateAction } from "react";
import ValueInput from "./ValueInput";
import type { List } from "../Body";

export default function InputList({
  setListItem,
}: {
  setListItem: Dispatch<SetStateAction<List[]>>;
}) {
  // const [isCategoryOn, setIsCategoryOn] = useState<boolean>(false);
  const [isIncome, setIsIncome] = useState<boolean>(true);

  const handleIsIncome = (): void => {
    if (!isIncome) {
      console.log("Value_Income Mode");
      setIsIncome(true);
      return;
    }
    console.log("Value_Expense Mode");
    setIsIncome(false);
    return;
    // // 카테고리 화면일 때
    // if (!isIncome) {
    //   console.log("Category_Income Mode");
    //   setIsIncome(true);
    //   return;
    // }
    // console.log("Category_Expense Mode");
    // setIsIncome(false);
    // return;
  };

  return (
    <>
      {/* <button onClick={handleIsCategoryOn}>카테고리</button> */}
      <div className="input-form">
        {/* {isCategoryOn && <strong>카테고리 유형</strong>} */}
        <div className="input-type-tabs">
          <button
            className={`input-type-button ${isIncome ? "active" : ""}`}
            onClick={handleIsIncome}
            disabled={isIncome}
            type="button"
          >
            수입
          </button>
          <button
            className={`input-type-button ${!isIncome ? "active" : ""}`}
            onClick={handleIsIncome}
            disabled={!isIncome}
            type="button"
          >
            지출
          </button>
        </div>
      </div>

      <ValueInput isIncome={isIncome} setListItem={setListItem} />

      {/* {isCategoryOn && <CategoryInput />} */}
      {/* 카테고리는 시간 관계로 사용자가 직접 입력하는 방식으로 전환 */}
    </>
  );
}
