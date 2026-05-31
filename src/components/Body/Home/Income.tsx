import type { List } from "../Body";

export default function Income({ descList }: { descList: List[] }) {
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

  for (let i = 0; i < descList.length; i++) {
    if (!descList[i].isExpense) {
      if (descList[i].month === todayDate.getMonth() + 1) {
        thisMonthTotal += descList[i].price;
      }
      if (descList[i].month === todayDate.getMonth()) {
        lastMonthTotal += descList[i].price;
      }
    }
  }

  const incomePercent = (thisMonthTotal / lastMonthTotal - 1) * 100;

  return (
    <>
      <div>
        <p>총 수입</p>
        {/* 여기는 리스트에서 가져와야 함 */}
        <p>{thisMonthTotal}원</p>
        <p>{incomePercent}%</p>
        <p>지난달 대비</p>
      </div>
    </>
  );
}
