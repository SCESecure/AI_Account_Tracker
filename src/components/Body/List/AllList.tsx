import type { List } from "../Body";
import ListItem from "./ListItem";

export default function AllList({ dateSearched }: { dateSearched: List[] }) {
  return (
    <>
      <div className="list_wrapper">
        {dateSearched.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
