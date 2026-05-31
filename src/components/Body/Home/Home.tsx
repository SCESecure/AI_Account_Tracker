import type { List } from "../Body";
import Expense from "./Expense";
import FiveList from "./FiveList";
import Income from "./Income";
import Total from "./Total";

export default function Home({ defaultList }: { defaultList: List[] }) {
  const top5list = defaultList.sort((a, b) => b.price - a.price);

  return (
    <>
      <h2>Hello, Home Component!</h2>

      <Total />
      <Income defaultList={defaultList} />
      <Expense defaultList={defaultList} />
      <FiveList top5list={top5list} />
    </>
  );
}
