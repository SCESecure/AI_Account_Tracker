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
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <strong>은행 명</strong>
          <input
            type="text"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            required
            placeholder="은행명을 입력하세요."
          />
        </div>
        <div>
          <strong>계좌 이름 (선택)</strong>
          <input
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="계좌 이름을 입력하세요."
          />
        </div>
        <div>
          <strong>계좌 번호</strong>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
            pattern="[0-9]+(-[0-9]+)*"
            placeholder="계좌 번호를 입력하세요."
          />
        </div>
        <div>
          <strong>초기 금액(예산)</strong>
          <input
            type="text"
            value={budget}
            required
            pattern="^\+?[0-9]+$"
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <button type="submit">+</button>
      </form>
    </>
  );
}
