import plusCircleIcon from "../../../assets/icons/plus-circle.svg";
import type { AccountType, List } from "../Body";

export default function Total({
  account,
  defaultList,
}: {
  account: AccountType[];
  defaultList: List[];
}) {
  const date = new Date();

  let totalAsset = 0;

  // 여기서 전체 계좌의 예산을 끌어옴
  for (let i = 0; i < account.length; i++) {
    totalAsset += account[i].budget;
  }

  // 그 후 여기서 계산
  for (let i = 0; i < defaultList.length; i++) {
    totalAsset += defaultList[i].price;
  }

  return (
    <section className="total-card">
      <div className="total-title">
        <p>총 자산</p>
        <img src={plusCircleIcon} alt="총 자산 추가" />
      </div>

      {/* 이 부분은 계좌 총 자산을 계산해서 여기까지 끌어와야 함 */}
      <strong>{totalAsset.toLocaleString("ko-KR")}원</strong>

      <p>
        {date.getMonth() + 1}월 {date.getDate()}일 기준
      </p>
    </section>
  );
}
