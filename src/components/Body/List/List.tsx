import { useState } from "react";

import type { List } from "../Body";

import Align from "./Align";
import AllList from "./AllList";

export default function List({ defaultList }: { defaultList: List[] }) {
  const tdate = new Date();

  const [list, setList] = useState<List[]>(defaultList);
  const [order, setOrder] = useState<string>("recentOrder");
  const [isAscend, setIsAscend] = useState<boolean>(false);
  const [tyear, setTyear] = useState<number>(tdate.getFullYear());
  const [tmonth, setTmonth] = useState<number>(tdate.getMonth() + 1);

  // 접두사 t가 붙은 날짜들은 사용자가 날짜를 버튼으로 직접 변경하는 부분임!
  // 아무것도 없는 날짜들은 사용자가 등록한 날짜들임!

  // -- 핸들러 영역 --

  // 정렬 종류는 "최신순" 또는 "지출순"임
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
        setList(list.sort((a, b) => a.day - b.day));
        setIsAscend(false);
        return;
      }
      setList(list.sort((a, b) => b.day - a.day));
      setIsAscend(true);
      return;
    }

    // 지출순일 때
    if (isAscend) {
      setList(list.sort((a, b) => a.price - b.price));
      setIsAscend(false);
      return;
    }
    setList(list.sort((a, b) => b.price - a.price));
    setIsAscend(true);
    return;
  };

  // 날짜 증가/감소 버튼 핸들러
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
    if (tmonth >= 12) {
      setTmonth(1);
      setTyear(tyear + 1);
      return;
    }
    setTmonth(tmonth + 1);
    return;
  };

  // 날짜에 따라 리스트 필터링
  const dateSearched = list.filter(
    (list) => list.month === tmonth && list.year === tyear,
  );

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
      <AllList dateSearched={dateSearched} />
    </>
  );
}
