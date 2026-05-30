import { useState } from "react";

export default function Align() {
  const date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth() + 1);

  const dateMinusHandler = (): void => {
    if (month <= 1) {
      setMonth(12);
      setYear(year - 1);
      return;
    }
    setMonth(month - 1);
    return;
  };
  const datePlusHandler = (): void => {
    if (month >= 12) {
      setMonth(1);
      setYear(year + 1);
      return;
    }
    setMonth(month + 1);
    return;
  };

  return (
    <>
      {/* 날짜 부분 */}
      <button type="button" onClick={dateMinusHandler}>
        (왼쪽 화살표)
      </button>
      <p>
        {year}년 {month}월
      </p>
      <button
        onClick={datePlusHandler}
        disabled={month >= date.getMonth() + 1 && year >= date.getFullYear()}
      >
        (오른쪽 화살표)
      </button>

      <button>최신순</button>
      <button>(오름차순)</button>
    </>
  );
}
