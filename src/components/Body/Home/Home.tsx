import Expense from "./Expense";
import FiveList from "./FiveList";
import Income from "./Income";
import Total from "./Total";

export default function Home() {
  return (
    <section className="home-page">
      <Total />

      <div className="summary-grid">
        <Income />
        <Expense />
      </div>

      <FiveList />
    </section>
  );
}
