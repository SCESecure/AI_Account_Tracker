export default function Income() {
  /*
    수입 백분율 = (이번달 전체 수입 - 지난달 전체 수입) / 100
  */
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3960fb0ef582aa56f9b4411619f94abcdb690131

  const monthlyIncome = 2050000;
  const incomeRate = 12.5;

  return (
    <article className="summary-card income-card">
      <p className="summary-title">월 수입</p>

      {/* 여기는 리스트에서 가져와야 함 */}
      <strong>{monthlyIncome.toLocaleString("ko-KR")}원</strong>

      <p className="summary-rate up">▲ {incomeRate}%</p>

      <p className="summary-caption">지난달 대비</p>
    </article>
<<<<<<< HEAD
=======
  return (
    <>
      <div>
        <p>총 수입</p>
        {/* 여기는 리스트에서 가져와야 함 */}
        <p>(전체 수입)원</p>
        <p>(수입 백분율)%</p>
        <p>지난달 대비</p>
      </div>
    </>
>>>>>>> 416c18c328f931915f3a7924781587a1bae2c165
=======
>>>>>>> 3960fb0ef582aa56f9b4411619f94abcdb690131
  );
}
