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
    <section className="input-page">
      <div className="input-card">
        <div className="input-card-header">
          <h2>{isAccountActive ? "계좌 및 예산 입력" : "내역 입력"}</h2>

          <button
            className="input-setting-button"
            onClick={handleAccountActive}
            type="button"
            aria-label={
              isAccountActive
                ? "내역 입력으로 이동"
                : "계좌 및 예산 입력으로 이동"
            }
          >
            ⚙
          </button>
        </div>

        {isAccountActive && (
          <Accounts account={account} setAccount={setAccount} />
        )}

        {!isAccountActive && <InputList setListItem={setListItem} />}
      </div>
    </section>
  );
}
