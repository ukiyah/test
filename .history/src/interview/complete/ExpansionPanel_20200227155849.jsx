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
            <br></br>
            <div style={{ display: "flex" }}>
              <TextField label="日時" value="2020年　2月　26日" />
              <TextField label="場所" value="新宿" />
            </div>
            <br></br>
            <div style={{ display: "flex" }}>
              <div>
                <h5 style={{ fontWeight: "normal" }}>
                  スキル内容
            </h5>
                <TextField label="スキル1" value="ディレクター案件" />
                <TextField label="スキル2" value="JavaScript" />
                <TextField label="スキル3" value="PHP" />
              </div>
              <div>
                <h5 style={{ fontWeight: "normal" }}>
                  金額
            </h5>
                <TextField label="提案" value="65万円" />
                <TextField label="仕入" value="55万円" />
                <TextField label="粗利" value="10万円" />
              </div>
            </div>

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
