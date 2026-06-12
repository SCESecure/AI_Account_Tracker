import type { AccountType } from "../Body";
import AccountItemElement from "./AccountItemElement";

export default function AccountItem({
  account,
  deleteAccount,
  modifyAccount,
}: {
  account: AccountType[];
  deleteAccount: (id: string) => void;
  modifyAccount: (
    id: string,
    accountName: string,
    accountNumber: string,
    bank: string,
    budget: number,
  ) => void;
}) {
  return (
    <div className="account-list">
      {account.map((account) => (
        <AccountItemElement
          key={account.id}
          account={account}
          deleteAccount={deleteAccount}
          modifyAccount={modifyAccount}
        />
      ))}
    </div>
  );
}
