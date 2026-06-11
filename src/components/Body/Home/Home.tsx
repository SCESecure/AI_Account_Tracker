import type { AccountType, List } from "../Body";
import Expense from "./Expense";
import FiveList from "./FiveList";
import Income from "./Income";
import Total from "./Total";

export default function Home({
  account,
  defaultList,
  screenHandler,
}: {
  account: AccountType[];
  defaultList: List[];
  screenHandler: (targetScreen: string) => void;
}) {
  const top5list = defaultList.sort(
    (a, b) => Math.abs(b.price) - Math.abs(a.price),
  );

  return (
    <section className="home-page">
      <Total account={account} defaultList={defaultList} />

      <div className="summary-grid">
        <Income defaultList={defaultList} />
        <Expense defaultList={defaultList} />
      </div>

      <FiveList top5list={top5list} screenHandler={screenHandler} />
    </section>
  );
}
