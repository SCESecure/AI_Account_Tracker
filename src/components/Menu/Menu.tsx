import MenuButton from "./MenuButton";

export default function Menu({
  screenHandler,
}: {
  screenHandler: (targetScreen: string) => void;
}) {
  return (
    <>
      <MenuButton screenHandler={screenHandler} />
    </>
  );
}
