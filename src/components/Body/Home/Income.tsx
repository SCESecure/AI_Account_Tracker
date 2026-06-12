import type { List } from "../Body";

export default function Income({ defaultList }: { defaultList: List[] }) {
  /*
  
  기존 a원에서 x% 증가했더니 b가 된거임

  a + a * x/100 = b
  a * (1 + x/100) = b
  1 + x/100 = b / a
  x/100 = b / a - 1
  x = (b / a - 1) * 100

  여기서 a를 lastMonthTotal으로, b를 thisMonthTotal으로 치환

  x = (thisMonthTotal / lastMonthTotal - 1) * 100

  */

  const todayDate = new Date();

  let thisMonthTotal = 0; // 이번달 전체 수입
  let lastMonthTotal = 0; // 지난달 전체 수입

  for (let i = 0; i < defaultList.length; i++) {
    if (!defaultList[i].isExpense) {
      if (defaultList[i].month === todayDate.getMonth() + 1) {
        thisMonthTotal += defaultList[i].price;
      }
      if (defaultList[i].month === todayDate.getMonth()) {
        lastMonthTotal += defaultList[i].price;
      }
    }
  }

  const incomePercent =
    lastMonthTotal === 0
      ? thisMonthTotal === 0
        ? 0
        : 100
      : (thisMonthTotal / lastMonthTotal - 1) * 100;

  const isPositiveIncomeBox = thisMonthTotal === 0 || incomePercent >= 0;

  const incomeCardClassName = `summary-card ${
    isPositiveIncomeBox ? "income-card" : "expense-card"
  }`;

  const incomeRateClassName = `summary-rate ${
    isPositiveIncomeBox ? "up" : "down"
  }`;

  return (
    <article className={incomeCardClassName}>
      <p className="summary-title">월 수입</p>

      {/* 여기는 리스트에서 가져와야 함 */}
      <strong>{thisMonthTotal.toLocaleString("ko-KR")}원</strong>

      <p className={incomeRateClassName}>
        {incomePercent >= 0 ? "▲" : "▼"}{" "}
        {Math.abs(Math.round(incomePercent * 100) / 100)}%
      </p>

      <p className="summary-caption">지난달 대비</p>
    </article>
  );
}
