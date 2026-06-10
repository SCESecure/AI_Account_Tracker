import type { Dispatch, SetStateAction } from "react";
import type { List } from "../Body";
import Accounts from "./Accounts";
import InputList from "./InputList";

export default function Input({
  defaultList,
  setListItem,
}: {
  defaultList: List[];
  setListItem: Dispatch<SetStateAction<List[]>>;
}) {
  return (
    <>
      <h2>Hello, Input Component!</h2>

      <Accounts />
      <InputList defaultList={defaultList} setListItem={setListItem} />
    </>
  );
}
