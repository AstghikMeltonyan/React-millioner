import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="Մուտքագրեք ձեր անունը"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Սկսել
      </button>
    </div>
  );
}
