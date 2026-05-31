export default function Expense() {
  /*
    지출 백분율 = (이번달 전체 지출 - 지난달 전체 지출) / 100
  */

  const monthlyExpense = 750000;
  const expenseRate = 8.3;

  return (
    <article className="summary-card expense-card">
      <p className="summary-title">월 지출</p>

      {/* 여기는 리스트에서 가져와야 함 */}
      <strong>{monthlyExpense.toLocaleString("ko-KR")}원</strong>

      <p className="summary-rate down">▲ {expenseRate}%</p>

      <p className="summary-caption">지난달 대비</p>
    </article>
  );
}
