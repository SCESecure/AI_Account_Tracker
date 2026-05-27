import type { ScreenStatus } from "../App";

export default function Header({ screen }: { screen: ScreenStatus }) {
  const title = screen.isHome
    ? "AI 가계부"
    : screen.isList
      ? "자산 리스트"
      : screen.isInput
        ? "입력"
        : screen.isStat
          ? "통계"
          : "AI 분석";

  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}
