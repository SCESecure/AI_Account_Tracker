import type { List } from "../Body";
import Accounts from "./Accounts";
import InputList from "./InputList";

export default function Input({ defaultList }: { defaultList: List[] }) {
  return (
    <>
      <h2>Hello, Input Component!</h2>

      <Accounts />
      <InputList defaultList={defaultList} />
    </>
  );
}
