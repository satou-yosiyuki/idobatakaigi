import React, { useState } from "react";
import Main from "./Main";
import config from "../config.json";
import SignIn from "./SignIn";

// setNameにpropsでsetName関数を渡してる
export default () => {
  const [name, setName] = useState("");
  console.log({ name });
  // 空文字列の時にSignInの画面,文字が入ったら、Mainの画面
  if (config.signInEnabled && name === "") {
    return <SignIn setName={setName} />;
  }
  return <Main name={name} />;
};
