import { useState, type Dispatch, type SetStateAction } from "react";
import type { List } from "../Body";
import Accounts from "./Accounts";
import InputList from "./InputList";

export default function Input({
  setListItem,
}: {
  setListItem: Dispatch<SetStateAction<List[]>>;
}) {
  const [isAccountActive, setIsAccountActive] = useState<boolean>(false);

  const handleAccountActive = (): void => {
    if (!isAccountActive) {
      setIsAccountActive(true);
      return;
    }

    setIsAccountActive(false);
    return;
  };
  return (
    <>
      <h2>Hello, Input Component!</h2>

      <button onClick={handleAccountActive}>계좌 입력</button>
      {isAccountActive && <Accounts />}
      {!isAccountActive && <InputList setListItem={setListItem} />}
    </>
  );
}
