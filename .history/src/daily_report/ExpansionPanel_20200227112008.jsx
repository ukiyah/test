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
          <Typography className={classes.heading}><h3 style={{ fontWeight: "normal", borderBottom: "solid 3px #4FC3F7" }}>日報内容追加</h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography >
            <h4 style={{fontWeight:"normal",borderBottom: "solid 1px #4FC3F7"}}>本日のスケジュール</h4>
            <ul>
              <li>10：00 　~　 11 : 00　　週次定例会：</li>
              <li>15：00 　~　 16 : 00　　訪問 ： 株式会社テクノテック</li>
              <li>16：00 　~　 17 : 00　　面談 ： Ales x トラストグロース</li>
            </ul>
            <div style={{ display: "flex" }}>
              <SelectBox value="時" item1="12" item2="13" item3="14" />
              <p>~</p>
              <SelectBox value="分" item1="00" item2="15" item3="30" />
              
            </div>
            <SelectBox value="区分" item1="定例会" item2="訪問" item3="面談" />
              <TextField label="詳細" />
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
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h3 style={{ fontWeight: "normal", borderBottom: "solid 3px #4FC3F7" }}>出力日報内容</h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <h4 style={{fontWeight:"normal" ,borderBottom: "solid 1px #4FC3F7"}}>実績</h4>
          <p>　　週間</p>
          <ul>
            <li>提案　　　　=　　29件　/　29件</li>
            <li>面談調整　　=　　1件</li>
            <li>面談設定　　=　　3件　/　　3件</li>
            <li>面談実施　　=　　2件　/　　3件</li>
          </ul>
          <p>月間</p>
          <ul>
            <li>成約　　　　=　　実績　2件　　/　目標　29件</li>
            <li>目標粗利　　=　　実績　10万円　/　目標　20万円</li>
          </ul>
          <h4 style={{fontWeight:"normal" ,borderBottom: "solid 1px #4FC3F7"}}>テレマ</h4>
          <ul>
            <li>アポ取得件数　　=　　0件</li>
            <li>訪問数　　　　　=　　2件</li>
          </ul>
          <ul>
            <li>zero networks株式会社　　（2/22　新宿駅　アベ様　14 : 00 ）</li>
            <li>株式会社グッドサン　　（2/22　新宿駅　アベ様　14 : 00 ）</li>
          </ul>
          <h4 style={{fontWeight:"normal" ,borderBottom: "solid 1px #4FC3F7"}}>成約</h4>
          <ul>
            <li>成約.1
              <ul>
                <li>c.paradiso　　x　　ACWEB(湯浅さん）　　12/3入場</li>
                <li>＜提案54万円：仕入れ50万円：粗利　4万円＞</li>
              </ul>
            </li>
            <li>成約.2
              <ul>
                <li>c.paradiso　　x　　ACWEB(湯浅さん）　　12/3入場</li>
                <li>＜提案54万円：仕入れ50万円：粗利　4万円＞</li>
              </ul>
            </li>
              
          </ul>
          <h4 style={{fontWeight:"normal" ,borderBottom: "solid 1px #4FC3F7"}}>面談実施</h4>
          <ul>
            <li>
              <ContainedButtons name="結果入力"></ContainedButtons>
              　　c.paradiso　　x　　ACWEB(湯浅さん）　　12/3 (1/2)　六本木
            </li>
            <li>　　　　　　　　＜提案54万円：仕入れ50万円：粗利　4万円＞　　⇒　　辞退</li>
          </ul>
          <h4 style={{fontWeight:"normal" ,borderBottom: "solid 1px #4FC3F7"}}>面談設定</h4>
          <ul>
            <li className={classes.list}>
              <ContainedButtons name="結果入力"></ContainedButtons>
              　　c.paradiso　　x　　ACWEB(湯浅さん）　　12/3
            </li>
            <li>
              <ContainedButtons name="結果入力"></ContainedButtons>
              　　c.paradiso　　x　　ACWEB(湯浅さん）　　12/5
            </li>
          </ul>
          <h4 style={{fontWeight:"normal" ,borderBottom: "solid 1px #4FC3F7"}}>面談調整</h4>
          <ul>
            <li className={classes.list}>
              <ContainedButtons name="結果入力"></ContainedButtons>
              　　c.paradiso　　x　　ACWEB(湯浅さん）
            </li>
            <li>
              <ContainedButtons name="結果入力"></ContainedButtons>
              　　c.paradiso　　x　　ACWEB(湯浅さん）
            </li>
          </ul>

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}
