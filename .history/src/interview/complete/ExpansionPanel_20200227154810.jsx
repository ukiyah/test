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
          <Typography className={classes.heading}>
            <div style={{ display: "flex" }}>
              <h3 style={{ fontWeight: "normal", borderBottom: "solid 3px #4FC3F7" }}>
                基本情報
            </h3>
              <Button style={{ color: "#42A5F5" }}>編集</Button>
            </div>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography >
            <div style={{ display: "flex" }}>
              <TextField label="上位企業" value="株式会社ABC" />
              <TextField label="下位企業" value="株式会社XYZ" />
            </div>
            <h5 style={{ fontWeight: "normal" }}>
              日時・場所
            </h5>
            <div style={{ display: "flex" }}>
            <TextField label="年" value="2020" />
            <TextField label="月" value="2" />
            <TextField label="日" value="26" />
            </div>
            <br></br>
            <TextField label="場所" />
            <h5 style={{ fontWeight: "normal" }}>
              求められるスキル
            </h5>
            <SelectBox value="スキル1" item1="Javascript" item2="React" item3="Python" />
            <SelectBox value="スキル2" item1="Javascript" item2="React" item3="Python" />
            <SelectBox value="スキル3" item1="Javascript" item2="React" item3="Python" />
            <br></br>
            <h5 style={{ fontWeight: "normal" }}>
              金額
            </h5>
            <div style={{ display: "flex" }}>
              <TextField label="提案" /><p>万</p>
            </div>
            <div style={{ display: "flex" }}>
              <TextField label="仕入" /><p>万</p>
            </div>
            <div style={{ display: "flex" }}>
              <TextField label="粗利" /><p>万</p>
            </div>
            <h5 style={{ fontWeight: "normal" }}>
              備考
            </h5>
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
            <div style={{ display: "flex" }}>
              <h3 style={{ fontWeight: "normal", borderBottom: "solid 3px #4FC3F7" }}>
                詳細情報
            </h3>
            </div>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography >

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>


    </div>
  );
}
