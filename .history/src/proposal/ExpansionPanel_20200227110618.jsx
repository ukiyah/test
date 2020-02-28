import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SelectBox from "../SelectBox.jsx";
import TextField from "../TextField";
import Button from "@material-ui/core/Button";
import Switch from "../Switch";
import MultiLineTextField from "../MultiLineTextField";
import RadioButton from "../RadioButton";
import ContainedButtons from "../Button";
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
          <Typography className={classes.heading}><h3 style={{ fontWeight: "normal", borderBottom: "solid 3px #4FC3F7" }}></h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography >
            <h4 style={{fontWeight:"normal",borderBottom: "solid 1px #4FC3F7"}}>企業情報の入力</h4>

            <div style={{ display: "flex" }}>
              <SelectBox value="上位企業" item1="12" item2="13" item3="14" />
              <p>~</p>
              <SelectBox value="分" item1="00" item2="15" item3="30" />
              <SelectBox value="区分" item1="定例会" item2="訪問" item3="面談" />
              <TextField label="詳細" />
            </div>
            <br></br>
            <Button variant="contained" >追加</Button>
            <br></br>
            <br></br>
            <Switch label="SIS入力" />
            <MultiLineTextField />
            <h4 style={{fontWeight:"normal",borderBottom: "solid 1px #4FC3F7"}}>所感・次営業日の行動目標</h4>
            <RadioButton />
            <MultiLineTextField label="所感・行動目標"/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      

    </div>
  );
}
