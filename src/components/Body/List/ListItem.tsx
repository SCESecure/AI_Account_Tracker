import type { List } from "../Body";

interface ListItemTypes extends List {
  key: string;
}

export default function ListItem({
  month,
  day,
  category,
  isExpense,
  price,
  memo,
}: ListItemTypes) {
  return (
    <div className="asset-list-item">
      <div className="asset-list-item-left">
        <p className="asset-list-date-text">
          {month}월 {day}일
        </p>

        <p className="asset-list-category">{category}</p>
        <p>{memo}</p>
      </div>

      <p className={`asset-list-price ${isExpense ? "expense" : "income"}`}>
        {isExpense ? "-" : "+"}
        {Math.abs(price).toLocaleString("ko-KR")}원
      </p>
    </div>
  );
}
