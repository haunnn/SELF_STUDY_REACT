import React, { useState, memo } from "react";

function Btn({ text, changeValue, fontSize = 14}) {
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize,
      }}
    >
      {text}
    </button>
  );
}

const MemorizedBtn = memo(Btn)

function App() {
  const [value, setValue] = useState("Save Changes");
  const changeValue = () => {
    setValue("Revert Changes");
  };

  return (
    <div>
      <MemorizedBtn text={value} changeValue={changeValue} fontSize={18}/>
      <MemorizedBtn text="Continue" />
    </div>
  );
}

export default App;
