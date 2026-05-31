<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3960fb0ef582aa56f9b4411619f94abcdb690131
import downIcon from "../../../assets/icons/arrow-down.svg";
import dollarIcon from "../../../assets/icons/dollar.svg";
import forkIcon from "../../../assets/icons/fork.svg";
import busIcon from "../../../assets/icons/bus.svg";
import giftIcon from "../../../assets/icons/gift.svg";

type TransactionType = "income" | "expense";

interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: number;
  type: TransactionType;
  icon: string;
}

<<<<<<< HEAD
=======
>>>>>>> 416c18c328f931915f3a7924781587a1bae2c165
=======
>>>>>>> 3960fb0ef582aa56f9b4411619f94abcdb690131
export default function FiveList() {
  const transactions: Transaction[] = [
    {
      id: 1,
      title: "급여",
      date: "5월 17일 (금)",
      amount: 2000000,
      type: "income",
      icon: downIcon,
    },
    {
      id: 2,
      title: "용돈",
      date: "5월 16일 (목)",
      amount: 30000,
      type: "income",
      icon: dollarIcon,
    },
    {
      id: 3,
      title: "식비",
      date: "5월 16일 (목)",
      amount: -15000,
      type: "expense",
      icon: forkIcon,
    },
    {
      id: 4,
      title: "교통비",
      date: "5월 15일 (수)",
      amount: -3000,
      type: "expense",
      icon: busIcon,
    },
    {
      id: 5,
      title: "문화생활",
      date: "5월 14일 (화)",
      amount: -20000,
      type: "expense",
      icon: giftIcon,
    },
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3960fb0ef582aa56f9b4411619f94abcdb690131
    <section className="recent-section">
      <div className="section-header">
        <h2>최근 거래 내역</h2>

        <button type="button">더보기 &gt;</button>
      </div>

      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            <div className={`transaction-icon ${transaction.type}`}>
              <img src={transaction.icon} alt={transaction.title} />
            </div>

            <div className="transaction-info">
              <strong>{transaction.title}</strong>
              <span>{transaction.date}</span>
            </div>

            <strong className={`transaction-price ${transaction.type}`}>
              {transaction.amount > 0 ? "+" : ""}
              {transaction.amount.toLocaleString("ko-KR")}원
            </strong>
          </li>
        ))}
      </ul>
    </section>
<<<<<<< HEAD
=======
    <>
      <h3>Hello, FiveList Component!</h3>
      <div>
        <p>(리스트 1)</p>
        <p>(날짜 1)</p>
        <p>(값 1)</p>
      </div>
      <div>
        <p>(리스트 2)</p>
        <p>(날짜 2)</p>
        <p>(값 2)</p>
      </div>
      <div>
        <p>(리스트 3)</p>
        <p>(날짜 3)</p>
        <p>(값 3)</p>
      </div>
      <div>
        <p>(리스트 4)</p>
        <p>(날짜 4)</p>
        <p>(값 4)</p>
      </div>
    </>
>>>>>>> 416c18c328f931915f3a7924781587a1bae2c165
=======
>>>>>>> 3960fb0ef582aa56f9b4411619f94abcdb690131
  );
}
