import { money, transactions } from "./homeData";

export default function FiveList() {
  return (
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
              {money(transaction.amount)}
            </strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
