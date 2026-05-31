import type { ScreenStatus } from "../../App";

import AI from "./AI/AI";
import Home from "./Home/Home";
import Input from "./Input/Input";
import List from "./List/List";
import Stat from "./Stat/Stat";

// 여기 바뀌었음 계획하지 않은 패키지 추가됨
import { v4 as uuidv4 } from "uuid";

export interface List {
  id: string;
  year: number;
  month: number;
  day: number;
  category: string;
  isExpense: boolean; // income일 경우 false, 아닐 경우 true
  price: number;
}

// 이거 나중에 input 컴포넌트 만들때 반드시 업뎃해야 함!!!!
// 즉, 임시 값임!
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export default function Body({ screen }: { screen: ScreenStatus }) {
  // 기본 리스트
  const defaultList: List[] = [
    {
      id: uuidv4(),
      year: 2026,
      month: 5,
      day: 31,
      category: "급여",
      isExpense: false,
      price: 2000000,
    },
    {
      id: uuidv4(),
      year: 2026,
      month: 4,
      day: 5,
      category: "용돈",
      isExpense: false,
      price: 30000,
    },
    {
      id: uuidv4(),
      year: 2026,
      month: 5,
      day: 28,
      category: "식비",
      isExpense: true,
      price: -15000,
    },
    {
      id: uuidv4(),
      year: 2026,
      month: 4,
      day: 8,
      category: "교통비",
      isExpense: true,
      price: -3000,
    },
    {
      id: uuidv4(),
      year: 2026,
      month: 4,
      day: 7,
      category: "문화생활",
      isExpense: true,
      price: -20000,
    },
  ];

  // 이건 가격 기준 내림차순 버전의 리스트
  const descList: List[] = defaultList.sort((a, b) => b.price - a.price);

  return (
    <>
      {screen.isHome && <Home descList={descList} />}
      {screen.isList && <List defaultList={defaultList} />}
      {screen.isInput && <Input />}
      {screen.isStat && <Stat />}
      {screen.isAI && <AI />}
    </>
  );
}
