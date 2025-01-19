import { useRef } from "react";
import "./styles.css";
import User from "./User";

export default function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = "1000";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };

  return (
    <div className="App">
      <User ref={inputRef} />
      <button onClick={handleClick}>Set To 1000</button>
    </div>
  );
}
