import type { ScreenStatus } from "../../App";

import MenuButton from "./MenuButton";

import homeIcon from "../../assets/icons/home.svg";
import listIcon from "../../assets/icons/list.svg";
import inputIcon from "../../assets/icons/input.svg";
import chartIcon from "../../assets/icons/chart.svg";
import settingsIcon from "../../assets/icons/settings.svg";

interface MenuProps {
  screen: ScreenStatus;
  screenHandler: (targetScreen: string) => void;
}

export default function Menu({ screen, screenHandler }: MenuProps) {
  return (
    <nav className="bottom-menu">
      <MenuButton
        label="홈"
        icon={homeIcon}
        target="Home"
        active={screen.isHome}
        screenHandler={screenHandler}
      />

      <MenuButton
        label="카드"
        icon={listIcon}
        target="List"
        active={screen.isList}
        screenHandler={screenHandler}
      />

      <MenuButton
        label="입력"
        icon={inputIcon}
        target="Input"
        active={screen.isInput}
        screenHandler={screenHandler}
      />

      <MenuButton
        label="분석"
        icon={chartIcon}
        target="Stat"
        active={screen.isStat}
        screenHandler={screenHandler}
      />

      <MenuButton
        label="AI 분석"
        icon={settingsIcon}
        target="AI"
        active={screen.isAI}
        screenHandler={screenHandler}
      />
    </nav>
  );
}
