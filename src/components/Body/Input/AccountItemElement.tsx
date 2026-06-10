import { useState } from "react";
import type { AccountType } from "./Accounts";

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
    <>
      <h5>Hello, AccountItemElement Component!</h5>
      <div>
        <strong>은행명</strong>
        {isModify && (
          <input
            value={modifyBank}
            onChange={(e) => setModifyBank(e.target.value)}
            type="text"
          ></input>
        )}
        {!isModify && <p>{account.bank}</p>}
      </div>
      {account.accountName.length > 0 && (
        <div>
          <strong>계좌명</strong>
          {isModify && (
            <input
              value={modifyAccountName}
              onChange={(e) => setModifyAccountName(e.target.value)}
              type="text"
            ></input>
          )}
          {!isModify && <p>{account.accountName}</p>}
        </div>
      )}
      <div>
        <strong>계좌번호</strong>
        {isModify && (
          <input
            value={modifyAccountNumber}
            onChange={(e) => setModifyAccountNumber(e.target.value)}
            type="text"
          ></input>
        )}
        {!isModify && <p>{account.accountNumber}</p>}
      </div>
      <div>
        <strong>초기 금액(예산)</strong>
        {isModify && (
          <input
            value={modifyBudget}
            onChange={(e) => setModifyBudget(Number(e.target.value))}
            type="text"
          ></input>
        )}
        {!isModify && <p>{account.budget}원</p>}
      </div>
      <div>
        <button onClick={handleModifyAccount}>(수정)</button>
        <button onClick={() => deleteAccount(account.id)}>(삭제)</button>
      </div>
    </>
  );
}
