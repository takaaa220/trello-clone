import React, { useState, createElement } from "react";

import Button from "./../Button";
import Input from "./../Input";

const Add = ({ isCard = false, onSubmit }) => {
  const [isOpen, toggle] = useState(false);
  const [text, setText] = useState("");

  const handleSubmit = _e => {
    onSubmit(text);
    toggle(false);
  };

  return (
    <div className={`Add ${isCard ? "-card" : "-lane"}`}>
      {isOpen ? (
        <>
          <Input
            onChange={e => setText(e.target.value)}
            value={text}
            isTextArea={isCard}
          />
          <div className="Add__Buttons">
            <Button onClick={handleSubmit}>
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
