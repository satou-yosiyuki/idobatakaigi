import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// 度の線にぶら下がるのか
const useStyles=makeStyles({
  root: {
    gridRow: 2,
  },
});

const MessageInputField = () => {
  const classes=useStyles();
  return <div className={classes.root}> MessageInputField</div>;
};

export default MessageInputField;
