import type { List } from "./List";
import ListItem from "./ListItem";

export default function AllList({ list }: { list: List[] }) {
  return (
    <>
      <h3>Hello, AllList Component!</h3>

      <div className="list_wrapper">
        {list.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
