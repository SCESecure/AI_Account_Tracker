import type { List } from "./List";

interface ListItemTypes extends List {
  key: string;
}

export default function ListItem({
  id,
  date,
  category,
  isExpense,
  price,
}: ListItemTypes) {
  return (
    <>
      <p>{date}</p>
      <p>{category}</p>
      <p>{isExpense ? "(지출)" + price : "(수입)" + price}</p>
    </>
  );
}
