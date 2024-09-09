import { MouseEventHandler } from "react";
import "./TabButton.css";

function TabButton(props: Readonly<{ children: React.ReactNode, onSelect: MouseEventHandler<HTMLButtonElement> | undefined, isSelected: boolean }>) {

  return (
    <li>
      <button className={props.isSelected ? "active" : undefined} onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}

export default TabButton;
