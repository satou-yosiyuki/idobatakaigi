import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { messagesRef } from "../firebase";
import { List} from "@material-ui/core";
import MessageItem from './MessageItem';
// overflow: 'auto' 下に固定
const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: '100%',
    overflow: 'auto'
  },
});
// orderByKey時系列に取得
// Object.entries　オブジェクトを展開する
// ...展開するという意味
const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(15)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;

          return { key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);
  const length=messages.length;
// MessageItemに最後のコメントか教えてあげたい
  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text },index) => {     
       const isLastItem= length===index+1; 
        return <MessageItem key={key} name={name} text={text} isLastItem={isLastItem}/>;
      })}
    </List>
  );
};

export default MessageList;
