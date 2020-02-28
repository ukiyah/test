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
import RadioButton from "../../RadioButton";
import ContainedButtons from "../../Button";
import DatePicker from "../../DatePicker";
import TimePicker_dialog from "../../TimePicker_dialog";
import TimePicker_simple from "../../TimePicker_simple";


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
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <h3 style={{ fontWeight: "normal", borderBottom: "solid 3px #4FC3F7" }}>
              訪問情報入力
              </h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography >
            {/* <h4 style={{fontWeight:"normal",borderBottom: "solid 1px #4FC3F7"}}>
              企業情報の入力<Button disabled style={{color:"red"}}>必須</Button>
            </h4> */}
            {/* <div style={{ display: "flex" }}> */}
            <TextField label="訪問先企業" />
            <TextField label="最寄り駅" />
            <TextField label="訪問先担当者" />
            <br></br>
            <DatePicker label="訪問日時" />
            {/* </div> */}
            <div style={{ display: "flex" }} >
              <Button style={{ margin: 10 }} disableElevation variant="contained" color="secondary">1日後</Button>
              <Button style={{ margin: 10 }} disableElevation variant="contained" color="secondary">2日後</Button>
              <Button style={{ margin: 10 }} disableElevation variant="contained" color="secondary">3日後</Button>
              <Button style={{ margin: 10 }} disableElevation variant="contained" color="secondary">4日後</Button>
              <Button style={{ margin: 10 }} disableElevation variant="contained" color="secondary">5日後</Button>
            </div>
            <br></br>
            <div style={{ display: "flex" }}>
              <TimePicker_dialog label="時間" />
              <TimePicker_simple label="時間" />

            </div>
            <div style={{display:"flex"}}>
              <SelectBox value="時" item1="12時" item2="13時" item3="14時" />
              <SelectBox value="分" item1="00分" item2="15分" item3="30分" />

            </div>
            <p style={{fontSize=12}}>訪問者</p>
            <SelectBox value="上位・下位" item1="上位" item2="下位" />
            <TextField label="コラボ担当" />
            <h4 style={{ fontWeight: "normal", borderBottom: "solid 1px #4FC3F7" }}>
              備考
            </h4>
            <MultiLineTextField />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>


    </div>
  );
}
