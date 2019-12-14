import React, { useState, createElement } from "react";

import Button from "./../Button";

const Add = ({ isCard = false, onSubmit }) => {
  const [isOpen, toggle] = useState(false);
  const [text, setText] = useState("");

  const Input = isCard ? "textarea" : "input";

  return (
    <div className={`Add ${isCard ? "-card" : "-lane"}`}>
      {isOpen ? (
        <>
          {createElement(Input, {
            className: "Add__Input",
            value: text,
            onChange: e => setText(e.target.value)
          })}
          <div className="Add__Buttons">
            <Button onClick={onSubmit}>
              {isCard ? "カード" : "リスト"}を追加
            </Button>
            <Button onClick={() => toggle(false)} variant="close" />
          </div>
        </>
      ) : (
        <button className="Add__OpenButton" onClick={() => toggle(true)}>
          ＋ {isCard ? "カード" : "リスト"}を追加する
        </button>
      )}
    </div>
  );
};

export default Add;
