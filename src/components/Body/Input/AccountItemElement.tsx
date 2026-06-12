import { useState } from "react";
import type { AccountType } from "../Body";

export default function AccountItemElement({
  account,
  deleteAccount,
  modifyAccount,
}: {
  account: AccountType;
  deleteAccount: (id: string) => void;
  modifyAccount: (
    id: string,
    accountName: string,
    accountNumber: string,
    bank: string,
    budget: number,
  ) => void;
}) {
  const [isModify, setIsModify] = useState<boolean>(false);
  const [modifyAccountName, setModifyAccountName] = useState<string>("");
  const [modifyAccountNumber, setModifyAccountNumber] = useState<string>("");
  const [modifyBank, setModifyBank] = useState<string>("");
  const [modifyBudget, setModifyBudget] = useState<number>(0);

  const handleModifyAccount = (): void => {
    setIsModify((isModify) => !isModify);
    setModifyAccountName((modifyAccountName) =>
      modifyAccountName === "" ? account.accountName : modifyAccountName,
    );
    setModifyAccountNumber((modifyAccountNumber) =>
      modifyAccountNumber === "" ? account.accountNumber : modifyAccountNumber,
    );
    setModifyBank((modifyBank) =>
      modifyBank === "" ? account.bank : modifyBank,
    );
    setModifyBudget((modifyBudget) =>
      modifyBudget === 0 ? Number(account.budget) : modifyBudget,
    );

    if (modifyAccountName !== account.accountName) {
      modifyAccount(
        account.id,
        modifyAccountName,
        account.accountNumber,
        account.bank,
        account.budget,
      );
    }
    if (modifyAccountNumber !== account.accountNumber) {
      modifyAccount(
        account.id,
        account.accountName,
        modifyAccountNumber,
        account.bank,
        account.budget,
      );
    }
    if (modifyBank !== account.bank) {
      modifyAccount(
        account.id,
        account.accountName,
        account.accountNumber,
        modifyBank,
        account.budget,
      );
    }
    if (modifyBudget !== account.budget) {
      modifyAccount(
        account.id,
        account.accountName,
        account.accountNumber,
        account.bank,
        modifyBudget,
      );
    }
  };
  return (
    <article className="account-card">
      <div className="account-card-row">
        <strong className="account-card-label">은행명</strong>

        {isModify && (
          <input
            className="account-card-input"
            value={modifyBank}
            onChange={(e) => setModifyBank(e.target.value)}
            type="text"
          />
        )}

        {!isModify && <p className="account-card-value">{account.bank}</p>}
      </div>

      {account.accountName.length > 0 && (
        <div className="account-card-row">
          <strong className="account-card-label">계좌명</strong>

          {isModify && (
            <input
              className="account-card-input"
              value={modifyAccountName}
              onChange={(e) => setModifyAccountName(e.target.value)}
              type="text"
            />
          )}

          {!isModify && (
            <p className="account-card-value">{account.accountName}</p>
          )}
        </div>
      )}

      <div className="account-card-row">
        <strong className="account-card-label">계좌번호</strong>

        {isModify && (
          <input
            className="account-card-input"
            value={modifyAccountNumber}
            onChange={(e) => setModifyAccountNumber(e.target.value)}
            type="text"
          />
        )}

        {!isModify && (
          <p className="account-card-value">{account.accountNumber}</p>
        )}
      </div>

      <div className="account-card-row">
        <strong className="account-card-label">초기금액</strong>

        {isModify && (
          <input
            className="account-card-input"
            value={modifyBudget}
            onChange={(e) => setModifyBudget(Number(e.target.value))}
            type="text"
          />
        )}

        {!isModify && (
          <p className="account-card-value">
            {Number(account.budget).toLocaleString("ko-KR")}원
          </p>
        )}
      </div>

      <div className="account-card-actions">
        <button
          className="account-edit-button"
          type="button"
          onClick={handleModifyAccount}
        >
          수정
        </button>

        <button
          className="account-delete-button"
          type="button"
          onClick={() => deleteAccount(account.id)}
        >
          삭제
        </button>
      </div>
    </article>
  );
}
