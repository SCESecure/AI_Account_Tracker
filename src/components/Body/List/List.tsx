import { useState } from "react";
import Align from "./Align";
import AllList from "./AllList";

// 여기 바뀌었음 계획하지 않은 패키지 추가됨
import { v4 as uuidv4 } from "uuid";

export interface List {
  id: string;
  date: string;
  category: string;
  isExpense: boolean; // income일 경우 false, 아닐 경우 true
  price: number;
}

const date = new Date();

const defaultList: List[] = [
  {
    id: uuidv4(),
    date: date.getMonth() + "월 " + date.getDay() + "일",
    category: "급여",
    isExpense: false,
    price: 2000000,
  },
  {
    id: uuidv4(),
    date: date.getMonth() + "월 " + date.getDay() + "일",
    category: "용돈",
    isExpense: false,
    price: 30000,
  },
  {
    id: uuidv4(),
    date: date.getMonth() + "월 " + date.getDay() + "일",
    category: "식비",
    isExpense: true,
    price: 15000,
  },
  {
    id: uuidv4(),
    date: date.getMonth() + "월 " + date.getDay() + "일",
    category: "교통비",
    isExpense: true,
    price: 3000,
  },
  {
    id: uuidv4(),
    date: date.getMonth() + "월 " + date.getDay() + "일",
    category: "문화생활",
    isExpense: true,
    price: 20000,
  },
];

export default function List() {
  const [list, setList] = useState<List[]>(defaultList);

  return (
    <>
      <Align />
      <AllList list={list} />
    </>
  );
}
