import { useState } from "react";
import type { ScreenStatus } from "../../App";

export default function MenuButton({
  screenHandler,
}: {
  screenHandler: (targetScreen: string) => void;
}) {
  return (
    <>
      <button onClick={() => screenHandler("Home")}>홈</button>
      <button onClick={() => screenHandler("List")}>리스트</button>
      <button onClick={() => screenHandler("Input")}>입력</button>
      <button onClick={() => screenHandler("Stat")}>통계</button>
      <button onClick={() => screenHandler("AI")}>AI 분석</button>
    </>
  );
}
