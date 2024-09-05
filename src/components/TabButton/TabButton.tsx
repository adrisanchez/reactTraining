import "./TabButton.css";

function TabButton(props: Readonly<{ children: React.ReactNode }>) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}

export default TabButton;
