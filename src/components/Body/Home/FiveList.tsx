import type { List } from "../Body";

export default function FiveList({ top5list }: { top5list: List[] }) {
  const result = [];

  for (let i = 0; i < 5; i++) {
    result.push(
      <li key={top5list[i].id}>
        <li>{top5list[i].category}</li>
        <ul typeof="circle">
          <li>{top5list[i].month + "월 " + top5list[i].day + "일"}</li>
          <li>{top5list[i].price + "원"}</li>
        </ul>
      </li>,
    );
  }

  return (
    <>
      <h3>Hello, FiveList Component!</h3>
      <ul>{result}</ul>
    </>
  );
}
