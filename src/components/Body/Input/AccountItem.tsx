import AccountItemElement from "./AccountItemElement";
import type { AccountType } from "./Accounts";

export default function AccountItem({ account }: { account: AccountType[] }) {
  return (
    <>
      <h4>Hello, AccountItem Component!</h4>
      {account.map((account) => (
        <AccountItemElement key={account.id} account={account} />
      ))}
    </>
  );
}
