import AccountItemElement from "./AccountItemElement";
import type { AccountType } from "./Accounts";

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
    <>
      <h4>Hello, AccountItem Component!</h4>
      {account.map((account) => (
        <AccountItemElement
          key={account.id}
          account={account}
          deleteAccount={deleteAccount}
          modifyAccount={modifyAccount}
        />
      ))}
    </>
  );
}
