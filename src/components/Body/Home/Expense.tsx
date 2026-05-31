export default function Expense() {
  /*
    지출 백분율 = (이번달 전체 지출 - 지난달 전체 지출) / 100
  */
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3960fb0ef582aa56f9b4411619f94abcdb690131

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
<<<<<<< HEAD
=======
  return (
    <>
      <div>
        <p>총 지출</p>
        {/* 여기는 리스트에서 가져와야 함 */}
        <p>(전체 지출)원</p>
        <p>(지출 백분율)%</p>
        <p>지난달 대비</p>
      </div>
    </>
>>>>>>> 416c18c328f931915f3a7924781587a1bae2c165
=======
>>>>>>> 3960fb0ef582aa56f9b4411619f94abcdb690131
  );
}
