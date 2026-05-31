import type { List } from "../Body";

export default function Expense({ descList }: { descList: List[] }) {
  /*
    지출 백분율 = (이번달 전체 지출 - 지난달 전체 지출) / 100
  */
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
  );
}
