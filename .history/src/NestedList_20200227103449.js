import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          BudgetPerformanceManager
        </ListSubheader>
      }
      className={classes.root}
    >
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <ListItem button onClick={handleClick1}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Ukiya Horibe" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
              <ListItemText primary="設定" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="ログアウト" />
            </ListItem>
          </List>
        </Collapse>
      </div>
      <Divider light />
      <div style={{ marginTop: 10 }}>
        <ListItem button onClick={handleClick2}>
          <Link href="form_daily_report" >
            <ListItemText primary="日報入力" />
          </Link>
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <Link href="form_proposal" >
                <ListItemText primary="提案" />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link href="form_appointment" >
                <ListItemText primary="アポイント報告" />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="訪問報告" />
            </ListItem>
          </List>
        </Collapse>
      </div>
      <div style={{ marginTop: 10 }}>
        <ListItem button onClick={handleClick3}>
          <Link href="list_interview" >
            <ListItemText primary="面談一覧" />
          </Link>

          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="調整中" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="設定済" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="実施済" />
            </ListItem>
          </List>
        </Collapse>
      </div>
      <div style={{ marginTop: 10 }}>
        <ListItem button>
          <Link href="/list_daily_report" >
            <ListItemText primary="日報一覧" />
          </Link>
        </ListItem>
      </div>
      <div style={{ marginTop: 10 }}>
        <ListItem button onClick={handleClick4}>
          <ListItemText primary="その他の一覧" />

          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <Link href="/list_proposal" >
                <ListItemText primary="提案" />
              </Link>

            </ListItem>
            <ListItem button className={classes.nested}>
              <Link href="/list_closing" >
                <ListItemText primary="成約" />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link href="/list_appointment" >
                <ListItemText primary="架電報告" />
              </Link>
            </ListItem>
          </List>
        </Collapse>
      </div>
    </List>
  );
}
