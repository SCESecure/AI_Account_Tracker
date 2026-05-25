import AI from "./AI/AI";
import Home from "./Home/Home";
import Input from "./Input/Input";
import List from "./List/List";
import Stat from "./Stat/Stat";

export default function Body() {
  return (
    <>
      <h1>Hello, Body Component!</h1>

      <Home />
      <List />
      <Input />
      <Stat />
      <AI />
    </>
  );
}
