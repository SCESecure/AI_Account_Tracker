import plusCircleIcon from "../../../assets/icons/plus-circle.svg";

import { homeSummary, money } from "./homeData";

export default function Total() {
  return (

    <section className="total-card">
      <div className="total-title">
        <span>총 자산</span>
        <img src={plusCircleIcon} alt="총 자산 추가" />
      </div>

      <strong>{money(homeSummary.totalAsset)}</strong>

      <p>{homeSummary.standardDate}</p>
    </section>
  );
}
