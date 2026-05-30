import type { List } from "./List";

interface ListItemTypes extends List {
  key: string;
}

export default function ListItem({
  month,
  day,
  category,
  isExpense,
  price,
}: ListItemTypes) {
  return (
    <>
      <p>
        {month}월 {day}일
      </p>
      <p>{category}</p>
      <p>{isExpense ? "(지출)" + price : "(수입)" + price}</p>
    </>
  );
}
