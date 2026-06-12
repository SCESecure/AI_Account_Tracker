import { useState, type Dispatch, type SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import type { AccountType } from "../Body";

export default function AddAccount({
  setAccount,
}: {
  setAccount: Dispatch<SetStateAction<AccountType[]>>;
}) {
  const [bank, setBank] = useState<string>("");
  const [accountName, setAccountName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  const AddAccount = (
    bank: string,
    accountName: string,
    accountNumber: string,
    budget: string,
  ): void => {
    const accountUUID = uuidv4();

    setAccount((value) => [
      ...value,
      {
        id: accountUUID,
        accountName: accountName,
        accountNumber: accountNumber,
        bank: bank,
        budget: Number(budget),
      },
    ]);

    console.log({
      id: accountUUID,
      accountName: accountName,
      accountNumber: accountNumber,
      bank: bank,
      budget: Number(budget),
    });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    AddAccount(bank, accountName, accountNumber, budget);

    console.log("계좌가 정상 처리되었습니다.");
  };

  return (
    <form className="account-add-form" onSubmit={handleSubmit}>
      <div className="account-field-group">
        <label className="account-label">은행명</label>
        <input
          className="account-input"
          type="text"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
          required
          placeholder="은행명을 입력하세요"
        />
      </div>

      <div className="account-field-group">
        <label className="account-label">계좌 이름 <span>(선택)</span></label>
        <input
          className="account-input"
          type="text"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          placeholder="계좌 이름을 입력하세요"
        />
      </div>

      <div className="account-field-group">
        <label className="account-label">계좌번호</label>
        <input
          className="account-input"
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
          pattern="[0-9]+(-[0-9]+)*"
          placeholder="계좌 번호를 입력하세요"
        />
      </div>

      <div className="account-field-group">
        <label className="account-label">초기금액</label>

        <div className="account-money-box">
          <input
            className="account-input account-money-input"
            type="text"
            value={budget}
            required
            pattern="^\+?[0-9]+$"
            onChange={(e) => setBudget(e.target.value)}
            placeholder="0"
          />
          <span className="account-money-unit">원</span>
        </div>
      </div>

      <button className="account-add-button" type="submit">
        +
      </button>
    </form>
  );
}
