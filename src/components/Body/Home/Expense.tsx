import { homeSummary, money } from "./homeData";

export default function Expense() {
  return (
    <article className="summary-card expense-card">
      <p className="summary-title">월 지출</p>

      <strong>{money(homeSummary.totalExpense)}</strong>

      <p className="summary-rate down">▲ {homeSummary.expenseRate}%</p>

      <p className="summary-caption">지난달 대비</p>
    </article>
  );
}
