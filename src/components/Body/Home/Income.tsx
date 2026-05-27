import { homeSummary, money } from "./homeData";

export default function Income() {
  return (
    <article className="summary-card income-card">
      <p className="summary-title">월 수입</p>

      <strong>{money(homeSummary.totalIncome)}</strong>

      <p className="summary-rate up">▲ {homeSummary.incomeRate}%</p>

      <p className="summary-caption">지난달 대비</p>
    </article>
  );
}
