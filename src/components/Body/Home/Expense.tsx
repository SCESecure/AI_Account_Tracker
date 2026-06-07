import type { List } from "../Body";

export default function Expense({ defaultList }: { defaultList: List[] }) {
  /*

  [방식은 income.tsx와 비슷하게 가면 됨]
  기존 a원에서 x% 감소했더니 b가 된거임

  a - a * x/100 = b
  a * (1 - x/100) = b
  1 - x/100 = b / a
  - x/100 = b / a - 1
  x/100 = 1 - b / a
  x = (1 - b / a) * 100

  여기서 a를 lastMonthTotal으로, b를 thisMonthTotal으로 치환

  x = (1 - thisMonthTotal / lastMonthTotal) * 100

  */

  const todayDate = new Date();

  let thisMonthTotal = 0; // 이번달 전체 지출
  let lastMonthTotal = 0; // 지난달 전체 지출

  for (let i = 0; i < defaultList.length; i++) {
    if (defaultList[i].isExpense) {
      if (defaultList[i].month === todayDate.getMonth() + 1) {
        thisMonthTotal += Math.abs(defaultList[i].price);
      }

      if (defaultList[i].month === todayDate.getMonth()) {
        lastMonthTotal += Math.abs(defaultList[i].price);
      }
    }
  }

  const expensePercent =
    lastMonthTotal === 0
      ? thisMonthTotal === 0
        ? 0
        : 100
      : (thisMonthTotal / lastMonthTotal - 1) * 100;

  const isGoodExpenseBox =
    thisMonthTotal === 0 || thisMonthTotal <= lastMonthTotal;

  const expenseCardClassName = `summary-card ${
    isGoodExpenseBox ? "income-card" : "expense-card"
  }`;

  const expenseRateClassName = `summary-rate ${
    isGoodExpenseBox ? "up" : "down"
  }`;

  return (
    <article className={expenseCardClassName}>
      <p className="summary-title">월 지출</p>

      {/* 여기는 리스트에서 가져와야 함 */}
      <strong>{thisMonthTotal.toLocaleString("ko-KR")}원</strong>

      <p className={expenseRateClassName}>
        {expensePercent > 0 ? "▲" : "▼"}{" "}
        {Math.abs(Math.round(expensePercent * 100) / 100)}%
      </p>

      <p className="summary-caption">지난달 대비</p>
    </article>
  );
}
