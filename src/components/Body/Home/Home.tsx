import type { List } from "../Body";
import Expense from "./Expense";
import FiveList from "./FiveList";
import Income from "./Income";
import Total from "./Total";

export default function Home({ defaultList }: { defaultList: List[] }) {
  const top5list = defaultList.sort(
    (a, b) => Math.abs(b.price) - Math.abs(a.price),
  );

  return (
    <section className="home-page">
      <Total />

      <div className="summary-grid">
        <Income defaultList={defaultList} />
        <Expense defaultList={defaultList} />
      </div>

      <FiveList top5list={top5list} />
    </section>
  );
}
