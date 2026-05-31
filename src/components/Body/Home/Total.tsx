import plusCircleIcon from "../../../assets/icons/plus-circle.svg";

export default function Total() {
  const date = new Date();

  const totalAsset = 3140000;

  return (
    <section className="total-card">
      <div className="total-title">
        <p>총 자산</p>
        {/* 이 부분은 계좌 총 자산을 계산해서 여기까지 끌어와야 함 */}
        <p>(전체 자산)원</p>
        <p>
          {date.getMonth() + 1}월 {date.getDate()}일 기준
        </p>
      </div>
    </section>
  );
}
