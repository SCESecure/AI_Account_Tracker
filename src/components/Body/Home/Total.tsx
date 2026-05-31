import plusCircleIcon from "../../../assets/icons/plus-circle.svg";

export default function Total() {
  const date = new Date();

  const totalAsset = 3140000;

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
