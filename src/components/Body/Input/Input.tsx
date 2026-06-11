import { useState, type Dispatch, type SetStateAction } from "react";
import type { AccountType, List } from "../Body";
import Accounts from "./Accounts";
import InputList from "./InputList";

export default function Input({
  account,
  setAccount,
  setListItem,
}: {
  account: AccountType[];
  setAccount: Dispatch<SetStateAction<AccountType[]>>;
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

      <button onClick={handleAccountActive}>
        {isAccountActive ? "수입 및 지출 입력" : "계좌 및 예산 입력"}
      </button>
      {isAccountActive && (
        <Accounts account={account} setAccount={setAccount} />
      )}
      {!isAccountActive && <InputList setListItem={setListItem} />}
    </>
  );
}
