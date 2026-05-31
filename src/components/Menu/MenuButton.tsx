<<<<<<< HEAD
import type { ScreenStatus } from "../../App";

import homeIcon from "../../assets/icons/home.svg";
import listIcon from "../../assets/icons/list.svg";
import inputIcon from "../../assets/icons/input.svg";
import chartIcon from "../../assets/icons/chart.svg";
import settingsIcon from "../../assets/icons/settings.svg";

export default function MenuButton({
  screen,
  screenHandler,
}: {
  screen: ScreenStatus;
=======
export default function MenuButton({
  screenHandler,
}: {
>>>>>>> 416c18c328f931915f3a7924781587a1bae2c165
  screenHandler: (targetScreen: string) => void;
}) {
  return (
    <>
<<<<<<< HEAD
      <button
        type="button"
        className={`menu-button ${screen.isHome ? "active" : ""}`}
        onClick={() => screenHandler("Home")}
      >
        <img src={homeIcon} alt="홈" />
        <span>홈</span>
      </button>

      <button
        type="button"
        className={`menu-button ${screen.isList ? "active" : ""}`}
        onClick={() => screenHandler("List")}
      >
        <img src={listIcon} alt="리스트" />
        <span>리스트</span>
      </button>

      <button
        type="button"
        className={`menu-button ${screen.isInput ? "active" : ""}`}
        onClick={() => screenHandler("Input")}
      >
        <img src={inputIcon} alt="입력" />
        <span>입력</span>
      </button>

      <button
        type="button"
        className={`menu-button ${screen.isStat ? "active" : ""}`}
        onClick={() => screenHandler("Stat")}
      >
        <img src={chartIcon} alt="통계" />
        <span>통계</span>
      </button>

      <button
        type="button"
        className={`menu-button ${screen.isAI ? "active" : ""}`}
        onClick={() => screenHandler("AI")}
      >
        <img src={settingsIcon} alt="AI 분석" />
        <span>AI 분석</span>
      </button>
=======
      <button onClick={() => screenHandler("Home")}>홈</button>
      <button onClick={() => screenHandler("List")}>리스트</button>
      <button onClick={() => screenHandler("Input")}>입력</button>
      <button onClick={() => screenHandler("Stat")}>통계</button>
      <button onClick={() => screenHandler("AI")}>AI 분석</button>
>>>>>>> 416c18c328f931915f3a7924781587a1bae2c165
    </>
  );
}
