import type { List } from "../Body";
import Expense from "./Expense";
import FiveList from "./FiveList";
import Income from "./Income";
import Total from "./Total";

export default function Home({ descList }: { descList: List[] }) {

  return (
    <>
      <h2>Hello, Home Component!</h2>

      <Total />
      <Income descList={descList}/>
      <Expense descList={descList} />
      <FiveList top5list={descList} />
    </>
  );
}
