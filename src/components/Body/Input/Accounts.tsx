import { useState } from "react";
import AccountItem from "./AccountItem";
import AddAccount from "./AddAccount";

import { v4 as uuidv4 } from "uuid";

export interface AccountType {
  id: string;
  accountName: string;
  accountNumber: string;
  bank: string;
  budget: number;
}

const defaultAccount: AccountType[] = [
  {
    id: uuidv4(),
    accountName: "메인 계좌",
    accountNumber: "1234567890",
    bank: "기업은행",
    budget: 3140000,
  },
];

export default function Accounts() {
  const [account, setAccount] = useState<AccountType[]>(defaultAccount);
  return (
    <>
      <h3>Hello, Accounts Component!</h3>

      <AddAccount setAccount={setAccount} />
      <AccountItem />
    </>
  );
}
