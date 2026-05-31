import MenuButton from "./MenuButton";

export default function Menu({
<<<<<<< HEAD
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
  );
}
