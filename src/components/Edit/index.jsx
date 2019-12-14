import React, { useState } from "react";

import Input from "../Input";
import Button from "../Button";

const Edit = ({ onSubmit, value, size = "medium" }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);

  const handleSubmit = _e => {
    setEditing(false);
    onSubmit(text);
  };

  return (
    <div
      className={`Edit -${size}`}
      onClick={!editing ? () => setEditing(true) : null}
    >
      {editing ? (
        <>
          <Input value={text} onChange={e => setText(e.target.value)} />
          <Button onClick={handleSubmit}>変更</Button>
        </>
      ) : (
        value
      )}
    </div>
  );
};

export default Edit;
