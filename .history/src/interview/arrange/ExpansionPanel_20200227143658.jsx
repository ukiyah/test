import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SelectBox from "../../SelectBox.jsx";
import TextField from "../../TextField";
import Button from "@material-ui/core/Button";
import Switch from "../../Switch";
import MultiLineTextField from "../../MultiLineTextField";
import RadioButton from "../RadioButton_Collabo";
import ContainedButtons from "../../Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  list: {
    marginBottom: 5,
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><h3 style={{ fontWeight: "normal", borderBottom: "solid 3px #4FC3F7" }}>
            基本情報
            </h3>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography >
            <h4 style={{fontWeight:"normal",borderBottom: "solid 1px #4FC3F7"}}>
              企業情報の入力<Button disabled style={{color:"red"}}>必須</Button>
            </h4>
            {/* <div style={{ display: "flex" }}> */}
              <TextField label="上位企業" />
              <TextField label="下位企業" />
            {/* </div> */}
            <br></br>
            <h4 style={{fontWeight:"normal",borderBottom: "solid 1px #4FC3F7"}}>
              コラボ情報の入力<Button disabled style={{color:"red"}}>必須</Button>
            </h4>
            <br></br>
            <Switch label="コラボ有無" />
            <RadioButton />
            {/* <SelectBox value="上位・下位" item1="上位" item2="下位" /> */}
            <TextField label="コラボ担当" />
            <h4 style={{fontWeight:"normal",borderBottom: "solid 1px #4FC3F7"}}>
              備考
            </h4>
            <MultiLineTextField />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <h3 style={{ fontWeight: "normal", borderBottom: "solid 3px #4FC3F7" }}>
              詳細情報
            </h3>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography >
            <h4 style={{fontWeight:"normal",borderBottom: "solid 1px #4FC3F7"}}>
              面談情報の入力
            </h4>
            <p>日時</p>
            <div style={{ display: "flex" }}>
              <SelectBox value="年" item1="2020" />
              <SelectBox value="月" item1="3" item2="4" item3="5" />
              <SelectBox value="日" item1="1" item2="2" item3="3" />
            </div>
            <br></br>
            <p>場所</p>
            <TextField />
            <h4 style={{fontWeight:"normal",borderBottom: "solid 1px #4FC3F7"}}>
              コラボ情報の入力<Button disabled style={{color:"red"}}>必須</Button>
            </h4>
            <br></br>
            <Switch label="コラボ有無" />
            <br></br>
            <SelectBox value="上位・下位" item1="上位" item2="下位" />
            <TextField label="コラボ担当" />
            <h4 style={{fontWeight:"normal",borderBottom: "solid 1px #4FC3F7"}}>
              備考
            </h4>
            <MultiLineTextField />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      

    </div>
  );
}
