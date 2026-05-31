import type { ScreenStatus } from "../../App";

import MenuButton from "./MenuButton";

export default function Menu({
  screen,
  screenHandler,
}: {
  screen: ScreenStatus;
  screenHandler: (targetScreen: string) => void;
}) {
  return (
    <nav className="bottom-menu">
      <MenuButton screen={screen} screenHandler={screenHandler} />
    </nav>
  );
}
