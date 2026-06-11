import { type Dispatch, type SetStateAction } from "react";
import AccountItem from "./AccountItem";
import AddAccount from "./AddAccount";

import type { AccountType } from "../Body";

export default function Accounts({
  account,
  setAccount,
}: {
  account: AccountType[];
  setAccount: Dispatch<SetStateAction<AccountType[]>>;
}) {
  const deleteAccount = (id: string): void => {
    if (account.length <= 1) {
      alert("더 이상 계좌를 제거할 수 없습니다.");
      return;
    }
    setAccount((account) => account.filter((account) => account.id !== id));
    return;
  };

  const modifyAccount = (
    id: string,
    accountName: string,
    accountNumber: string,
    bank: string,
    budget: number,
  ): void => {
    setAccount((account) =>
      account.map((account) =>
        account.id === id
          ? { ...account, accountName, accountNumber, bank, budget }
          : account,
      ),
    );
  };

  return (
    <>
      <AddAccount setAccount={setAccount} />
      <AccountItem
        account={account}
        deleteAccount={deleteAccount}
        modifyAccount={modifyAccount}
      />
    </>
  );
}
