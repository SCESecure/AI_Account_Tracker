import type { ScreenStatus } from "../../App";

import MenuButton from "./MenuButton";

export default function Menu({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3960fb0ef582aa56f9b4411619f94abcdb690131
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
<<<<<<< HEAD
=======
  screenHandler,
}: {
  screenHandler: (targetScreen: string) => void;
}) {
  return (
    <>
      <MenuButton screenHandler={screenHandler} />
    </>
>>>>>>> 416c18c328f931915f3a7924781587a1bae2c165
=======
>>>>>>> 3960fb0ef582aa56f9b4411619f94abcdb690131
  );
}
