import type { List } from "./List";
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
