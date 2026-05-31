import type { List } from "../Body";

export default function Expense({ descList }: { descList: List[] }) {
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

  for (let i = 0; i < descList.length; i++) {
    if (descList[i].isExpense) {
      if (descList[i].month === todayDate.getMonth() + 1) {
        thisMonthTotal += descList[i].price;
      }
      if (descList[i].month === todayDate.getMonth()) {
        lastMonthTotal += descList[i].price;
      }
    }
  }

  const expensePercent = (1 - thisMonthTotal / lastMonthTotal) * 100;

  return (
    <>
      <div>
        <p>총 지출</p>
        {/* 여기는 리스트에서 가져와야 함 */}
        <p>-{thisMonthTotal - lastMonthTotal}원</p>
        <p>-{Math.round(expensePercent * 100) / 100}%</p>
        <p>지난달 대비</p>
      </div>
    </>
  );
}
