import { useState } from "react";

export default function Align() {
  const date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth() + 1);
  const [order, setOrder] = useState<string>("recentOrder");
  const [isAscend, setIsAscend] = useState<boolean>(false);

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
  const orderHandler = (): void => {
    if (order === "recentOrder") {
      setOrder("oldOrder");
      return;
    }
    setOrder("recentOrder");
  };

  const isAscendHandler = (): void => {
    if (isAscend) {
      setIsAscend(false);
      return;
    }
    setIsAscend(true);
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

      <button onClick={orderHandler}>
        {order === "recentOrder" ? "최신순" : "오래된순"}
      </button>
      <button onClick={isAscendHandler}>
        {isAscend ? "(오름차순)" : "(내림차순)"}
      </button>
    </>
  );
}
