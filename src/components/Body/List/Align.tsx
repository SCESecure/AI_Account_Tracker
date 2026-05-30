export default function Align({
  tyear,
  tmonth,
  order,
  isAscend,
  tdate,
  orderHandler,
  isAscendHandler,
  dateMinusHandler,
  datePlusHandler,
}: {
  tyear: number;
  tmonth: number;
  tdate: Date;
  order: string;
  isAscend: boolean;
  orderHandler: () => void;
  isAscendHandler: () => void;
  dateMinusHandler: () => void;
  datePlusHandler: () => void;
}) {
  return (
    <>
      {/* 날짜 부분 */}
      <button type="button" onClick={dateMinusHandler}>
        (왼쪽 화살표)
      </button>
      <p>
        {tyear}년 {tmonth}월
      </p>
      <button
        onClick={datePlusHandler}
        disabled={
          tmonth >= tdate.getMonth() + 1 && tyear >= tdate.getFullYear()
        }
      >
        (오른쪽 화살표)
      </button>

      <button onClick={orderHandler}>
        {order === "recentOrder" ? "최신순" : "가격순"}
      </button>
      <button onClick={isAscendHandler}>
        {isAscend ? "(오름차순)" : "(내림차순)"}
      </button>
    </>
  );
}
