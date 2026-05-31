import type { ScreenStatus } from "../App";

export default function Header({ screen }: { screen: ScreenStatus }) {
  return (
    <>
      <h1>
        {screen.isHome
          ? "AI 가계부"
          : screen.isList
            ? "자산 리스트"
            : screen.isInput
              ? "입력"
              : screen.isStat
                ? "통계"
                : "AI 분석"}
      </h1>
    </>
  );
}
