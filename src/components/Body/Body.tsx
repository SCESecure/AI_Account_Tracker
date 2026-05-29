import type { ScreenStatus } from "../../App";

import AI from "./AI/AI";
import Home from "./Home/Home";
import Input from "./Input/Input";
import List from "./List/List";
import Stat from "./Stat/Stat";

export default function Body({ screen }: { screen: ScreenStatus }) {
  return (
    <>
      <h1>Hello, Body Component!</h1>

      {screen.isHome && <Home />}
      {screen.isList && <List />}
      {screen.isInput && <Input />}
      {screen.isStat && <Stat />}
      {screen.isAI && <AI />}
    </>
  );
}
