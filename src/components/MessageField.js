import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { pushMessages } from "../firebase";
// autoFocus 勝手に入力欄に焦点が当たる（でもこれだけでは入力したら商店がなくなる
const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      inputRef={inputEl}
      autoFocus
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;
        const text = e.target.value;
        if (text === "") return;
        if (e.key === "Enter") {
          pushMessages({ name, text });
          setText("");
          e.preventDefault();
        }
      }}
      // onCompositionStartは変換機能がスタートしたときに発火
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  );
};

export default MessageField;
