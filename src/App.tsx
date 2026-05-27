import { useState } from "react";

import Body from "./components/Body/Body";
import Menu from "./components/Menu/Menu";

export interface ScreenStatus {
  isHome: boolean;
  isList: boolean;
  isInput: boolean;
  isStat: boolean;
  isAI: boolean;
}

export default function App() {
  const defaultScreen: ScreenStatus = {
    isHome: false,
    isList: false,
    isInput: false,
    isStat: false,
    isAI: false,
  };

  const [screen, setScreen] = useState<ScreenStatus>({
    ...defaultScreen,
    isHome: true,
  });

  const screenHandler = (targetScreen: string): void => {
    switch (targetScreen) {
      case "Home":
        setScreen({ ...defaultScreen, isHome: true });
        return;

      case "List":
        setScreen({ ...defaultScreen, isList: true });
        return;

      case "Input":
        setScreen({ ...defaultScreen, isInput: true });
        return;

      case "Stat":
        setScreen({ ...defaultScreen, isStat: true });
        return;

      case "AI":
        setScreen({ ...defaultScreen, isAI: true });
        return;

      default:
        setScreen({ ...defaultScreen, isHome: true });
        return;
    }
  };

  return (
    <div className="app-shell">
      <Body screen={screen} />
      <Menu screen={screen} screenHandler={screenHandler} />
    </div>
  );
}
