import Header from "./components/Header";
import Body from "./components/Body/Body";
import Menu from "./components/Menu/Menu";

import { useState } from "react";

// 현재 어떤 화면을 렌더링할지를 나타내주는 interface
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

  // 여기를 클로드 사용 : 내용은 spread 연산자를 가지고 특정 변수는 true, 나머지는 false로
  const screenHandler = (targetScreen: string): void => {
    switch (targetScreen) {
      case "Home":
        console.log("MenuButton : Home 화면 활성");
        setScreen({ ...defaultScreen, isHome: true });
        return;

      case "List":
        console.log("MenuButton : List 화면 활성");
        setScreen({ ...defaultScreen, isList: true });
        return;

      case "Input":
        console.log("MenuButton : Input 화면 활성");
        setScreen({ ...defaultScreen, isInput: true });
        return;

      case "Stat":
        console.log("MenuButton : Stat 화면 활성");
        setScreen({ ...defaultScreen, isStat: true });
        return;

      case "AI":
        console.log("MenuButton : AI 화면 활성");
        setScreen({ ...defaultScreen, isAI: true });
        return;

      default:
        console.log("MenuButton : 예외 발생! 임시로 Home 화면 활성");
        setScreen({ ...defaultScreen, isHome: true });
        return;
    }
  };

  return (
    <>
      <Header screen={screen} />
      <Body screen={screen} />
      <Menu screenHandler={screenHandler} />
    </>
  );
}
