import React from "react";
import { pushMessages } from "../firebase";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const MessageSubmitButton = ({name,setText,text}) => {
  return (
    <IconButton disabled={text===''} onClick={()=>{
      pushMessages({name:'はむさん',text});
      setText('');
    }}>
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
