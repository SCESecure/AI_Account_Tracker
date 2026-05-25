import ButtonStat from "./ButtonStat";
import CalStat from "./CalStat";
import GraphStat from "./GraphStat";
import ListStat from "./ListStat";

export default function Stat() {
  return (
    <>
      <h2>Hello, Stat Component!</h2>

      <CalStat />
      <ButtonStat />
      <GraphStat />
      <ListStat />
    </>
  );
}
