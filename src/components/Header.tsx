import type { ScreenStatus } from "../App";

export default function Header({ screen }: { screen: ScreenStatus }) {
  const title = (screen: ScreenStatus): string => {
    if (screen.isHome) return "AI 가계부";
    if (screen.isList) return "리스트";
  };

  return (
    <>
      <h1>asdf</h1>
    </>
  );
}
