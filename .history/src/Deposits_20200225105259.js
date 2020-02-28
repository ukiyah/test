import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Divider } from '@material-ui/core';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 11,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>お知らせ</Title>
      <Divider />
      <Typography component="p" variant="p">
        ・パスワード有効期限のおしらせ
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      パスワードの有効期限が残り27日で終了します<br></br>パスワードの変更を行ってください。
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          変更はこちら
        </Link>
      </div>
    </React.Fragment>
  );
}
