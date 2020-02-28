import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SelectBox from "./SelectBox.jsx";
import TextField from "./TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

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
          <Typography className={classes.heading}><h3 style={{fontWeight:"normal", borderBottom:"solid 3px #4FC3F7"}}>日報内容追加</h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography >
            <h4 style={{fontWeight:"normal", fontSize:"18px"}}>スケジュール・SISの入力</h4><br></br>
            <p>本日のスケジュール</p>
            <ul>
              <li>10：00 　~　 11 : 00　　週次定例会：</li>
              <li>15：00 　~　 16 : 00　　訪問 ： 株式会社テクノテック</li>
              <li>16：00 　~　 17 : 00　　面談 ： Ales x トラストグロース</li>
            </ul>
            <div style={{display:"flex"}}>
              <SelectBox value="時" item1="12" item2="13" item3="14"/>
              <p>~</p>
              <SelectBox value="分" item1="00" item2="15" item3="30"/>
              <SelectBox value="区分" item1="定例会" item2="訪問" item3="面談" />
              <TextField label="詳細"/>
            </div>
            <br></br>
            <Button variant="contained" >追加</Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h3 style={{fontWeight:"normal", borderBottom:"solid 3px #4FC3F7"}}>出力日報内容</h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  );
}
