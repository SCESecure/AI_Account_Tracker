import { useState } from "react";
import type { ScreenStatus } from "../../App";

import AI from "./AI/AI";
import Home from "./Home/Home";
import Input from "./Input/Input";
import List from "./List/List";

// 여기 바뀌었음 계획하지 않은 패키지 추가됨
import { v4 as uuidv4 } from "uuid";

export interface AccountType {
  id: string;
  accountName: string;
  accountNumber: string;
  bank: string;
  budget: number;
}

export interface List {
  id: string;
  year: number;
  month: number;
  day: number;
  category: string;
  isExpense: boolean; // income일 경우 false, 아닐 경우 true
  price: number;
  memo: string;
}

export default function Body({
  screen,
  screenHandler,
}: {
  screen: ScreenStatus;
  screenHandler: (targetScreen: string) => void;
}) {
  // 기본 계좌
  const defaultAccount: AccountType[] = [
    {
      id: uuidv4(),
      accountName: "메인 계좌",
      accountNumber: "1234567890",
      bank: "기업은행",
      budget: 3140000,
    },
  ];
  // 기본 리스트
  const defaultList: List[] = [
    {
      id: uuidv4(),
      year: 2026,
      month: 6,
      day: 1,
      category: "급여",
      isExpense: false,
      price: 2000000,
      memo: "6월 급여",
    },
    {
      id: uuidv4(),
      year: 2026,
      month: 5,
      day: 1,
      category: "급여",
      isExpense: false,
      price: 2000000,
      memo: "5월 급여",
    },
    {
      id: uuidv4(),
      year: 2026,
      month: 4,
      day: 1,
      category: "급여",
      isExpense: false,
      price: 1500000,
      memo: "4월 급여",
    },
    {
      id: uuidv4(),
      year: 2026,
      month: 5,
      day: 28,
      category: "식비",
      isExpense: true,
      price: -15000,
      memo: "점심",
    },
    {
      id: uuidv4(),
      year: 2026,
      month: 4,
      day: 8,
      category: "교통비",
      isExpense: true,
      price: -3000,
      memo: "4월달 교통비",
    },
    {
      id: uuidv4(),
      year: 2026,
      month: 4,
      day: 7,
      category: "문화생활",
      isExpense: true,
      price: -20000,
      memo: "",
    },
  ];

  const [listItem, setListItem] = useState<List[]>(defaultList);
  const [account, setAccount] = useState<AccountType[]>(defaultAccount);
  return (
    <main className="body">
      {screen.isHome && (
        <Home
          account={account}
          defaultList={listItem}
          screenHandler={screenHandler}
        />
      )}
      {screen.isList && <List defaultList={listItem} />}
      {screen.isInput && (
        <Input
          account={account}
          setAccount={setAccount}
          setListItem={setListItem}
        />
      )}
      {screen.isAI && <AI defaultList={listItem} />}
    </main>
  );
}
