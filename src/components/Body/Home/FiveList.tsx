import type { List } from "../Body";

import downIcon from "../../../assets/icons/arrow-down.svg";
import forkIcon from "../../../assets/icons/fork.svg";
import busIcon from "../../../assets/icons/bus.svg";
import giftIcon from "../../../assets/icons/gift.svg";

export default function FiveList({ top5list }: { top5list: List[] }) {
  const recentList = top5list.slice(0, 5);

  //리스트외 항목들 아이콘 추가
  const getIcon = (category: string, isExpense: boolean) => {
    if (!isExpense) {
      return downIcon;
    }

    if (category.includes("식비")) {
      return forkIcon;
    }

    if (category.includes("교통비")) {
      return busIcon;
    }

    return giftIcon;
  };

  return (
    <section className="recent-section">
      <div className="section-header">
        <h2>최근 거래 내역</h2>

        <button type="button">더보기 &gt;</button>
      </div>

      <ul className="transaction-list">
        {recentList.map((item) => (
          <li key={item.id} className="transaction-item">
            <div
              className={`transaction-icon ${
                item.isExpense ? "expense" : "income"
              }`}
            >
              <img
                src={getIcon(item.category, item.isExpense)}
                alt={item.category}
              />
            </div>

            <div className="transaction-info">
              <strong>{item.category}</strong>
              <span>
                {item.month}월 {item.day}일
              </span>
            </div>

            <strong
              className={`transaction-price ${
                item.isExpense ? "expense" : "income"
              }`}
            >
              {item.isExpense ? "-" : "+"}
              {Math.abs(item.price).toLocaleString("ko-KR")}원
            </strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

