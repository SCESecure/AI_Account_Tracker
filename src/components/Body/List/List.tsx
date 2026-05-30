import { useState } from "react";
import Align from "./Align";
import AllList from "./AllList";

// 여기 바뀌었음 계획하지 않은 패키지 추가됨
import { v4 as uuidv4 } from "uuid";

export interface List {
  id: string;
  month: number;
  day: number;
  compareDay: number; // 이거는 정렬을 할 때 쓰는거
  category: string;
  isExpense: boolean; // income일 경우 false, 아닐 경우 true
  price: number;
}

// 이거 나중에 input 컴포넌트 만들때 반드시 업뎃해야 함!!!!
// 즉, 임시 값임!
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();

const defaultList: List[] = [
  {
    id: uuidv4(),
    month: month,
    day: day,
    compareDay: month * 30 + day,
    category: "급여",
    isExpense: false,
    price: 2000000,
  },
  {
    id: uuidv4(),
    month: month,
    day: day,
    compareDay: month * 30 + day,
    category: "용돈",
    isExpense: false,
    price: 30000,
  },
  {
    id: uuidv4(),
    month: month,
    day: day,
    compareDay: month * 30 + day,
    category: "식비",
    isExpense: true,
    price: 15000,
  },
  {
    id: uuidv4(),
    month: month,
    day: day,
    compareDay: month * 30 + day,
    category: "교통비",
    isExpense: true,
    price: 3000,
  },
  {
    id: uuidv4(),
    month: month,
    day: day,
    compareDay: month * 30 + day,
    category: "문화생활",
    isExpense: true,
    price: 20000,
  },
];

export default function List() {
  const tdate = new Date();

  const [list, setList] = useState<List[]>(defaultList);
  const [order, setOrder] = useState<string>("recentOrder");
  const [isAscend, setIsAscend] = useState<boolean>(false);
  const [tyear, setTyear] = useState<number>(tdate.getFullYear());
  const [tmonth, setTmonth] = useState<number>(tdate.getMonth() + 1);

  // -- 핸들러 영역 --

  // 정렬 종류는 "최신순" 또는 "가격순"임
  const orderHandler = (): void => {
    if (order === "recentOrder") {
      setOrder("priceOrder");
      return;
    }
    setOrder("recentOrder");
  };

  // 정렬 방식은 두 종류에 따른 오름차순/내림차순
  const isAscendHandler = (): void => {
    // 최신순일 때
    if (order === "recentOrder") {
      if (isAscend) {
        setList(list.sort((a, b) => a.compareDay - b.compareDay));
        setIsAscend(false);
        return;
      }
      setList(list.sort((a, b) => b.compareDay - a.compareDay));
      setIsAscend(true);
      return;
    }

    // 금액순일 때
    if (isAscend) {
      setList(list.sort((a, b) => a.price - b.price));
      setIsAscend(false);
      return;
    }
    setList(list.sort((a, b) => b.price - a.price));
    setIsAscend(true);
    return;
  };

  const dateMinusHandler = (): void => {
    if (tmonth <= 1) {
      setTmonth(12);
      setTyear(tyear - 1);
      return;
    }
    setTmonth(tmonth - 1);
    return;
  };
  const datePlusHandler = (): void => {
    if (month >= 12) {
      setTmonth(1);
      setTyear(tyear + 1);
      return;
    }
    setTmonth(tmonth + 1);
    return;
  };

  return (
    <>
      <Align
        tyear={tyear}
        tmonth={tmonth}
        tdate={tdate}
        order={order}
        isAscend={isAscend}
        orderHandler={orderHandler}
        isAscendHandler={isAscendHandler}
        dateMinusHandler={dateMinusHandler}
        datePlusHandler={datePlusHandler}
      />
      <AllList list={list} />
    </>
  );
}
