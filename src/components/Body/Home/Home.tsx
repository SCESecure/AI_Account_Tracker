import type { List } from "../Body";
import Expense from "./Expense";
import FiveList from "./FiveList";
import Income from "./Income";
import Total from "./Total";

export default function Home({ top5list }: { top5list: List[] }) {
  return (
    <>
      <h2>Hello, Home Component!</h2>

      <Total />
      <Income />
      <Expense />
      <FiveList top5list={top5list} />
    </>
  );
}
