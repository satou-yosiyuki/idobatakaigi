import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// target='_brank'でタブを新規で作る
// rel="noopener" セキュリティ上安全になる
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}

      <Link
        color="inherit"
        href="https://twitter.com/stuysyk111027"
        target="_brank"
        rel="noopener"
      >
        よしゆき
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
// stringに変更があった時変更するという意味
export default function SignIn({ setName }) {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState("");
  console.log({ disabled, string });
  useEffect(() => {
    // stringが空文字だったらtrueが設定されるtrueはボタンを押せない
    const disable = string == "";
    setDisabled(disable);
  }, [string]);
  // autocomplete 自動補完 autofocus指定した欄にフォーカスされる
  // type="button"汎用ボタンを作成する リロードを防ぐ目的
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネーム"
            name="name"
            autoFocus
            onChange={(e) => setString(e.target.value)}
            onKeyDown={(e) => {
              console.log({ key: e.key });
              if (e.key === "Enter") {
                setName(e.target.value);
                e.preventDefault();
              }
            }}
          />

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disabled}
            onClick={() => {
              setName(string);
            }}
          >
            はじめる
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
