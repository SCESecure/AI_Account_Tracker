export default function Align({
  tyear,
  tmonth,
  tdate,
  order,
  isAscend,
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
    <div className="asset-list-control">
      <div className="asset-list-date">
        <button type="button" onClick={dateMinusHandler}>
          &lt;
        </button>

        <p>
          {tyear}년 {tmonth}월
        </p>

        <button
          type="button"
          onClick={datePlusHandler}
          disabled={
            tmonth >= tdate.getMonth() + 1 && tyear >= tdate.getFullYear()
          }
        >
          &gt;
        </button>
      </div>

      <div className="asset-list-sort-box">
        <button type="button" onClick={orderHandler}>
          {order === "recentOrder" ? "최신순" : "지출순"}
        </button>

        <button type="button" onClick={isAscendHandler}>
          {isAscend ? "↑" : "↓"}
        </button>
      </div>
    </div>
  );
}
