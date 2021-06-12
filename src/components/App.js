import React, { useState } from "react";

import SignIn from "./SignIn";
// setNameにpropsでsetName関数を渡してる
export default () => {
  const [name, setName] = useState("");
  console.log({ name });
  return <SignIn setName={setName}/>;
};
