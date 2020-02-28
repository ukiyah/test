import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SelectBox from "../SelectBox";
import Table from "./table_for_performance";
import TableForSES from "./table_for_ses";
import Button from "@material-ui/core/Button";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="グループ全体" {...a11yProps(0)} />
          <Tab label="個人別" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <SelectBox value="表示年" item1="2020年" item2="2019年" item3="2018年" />
              <br></br>
              <Table title="粗利" />
              <br></br>
              <Table title="売上" />
              <br></br>
              <TableForSES title="成約数(SES+ソリューション他)" />
              <div style={{ marginTop: 10, textAlign: "center" }}>
                <Button variant="contained" >PDF出力</Button>
              </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <h2 style={{fontWeight:"normal"}}>個人別表示</h2>
      <SelectBox value="表示年" item1="2020年" item2="2019年" item3="2018年" />
              <br></br>
              <Table title="粗利" />
              <br></br>
              <Table title="売上" />
              <br></br>
              <TableForSES title="成約数(SES+ソリューション他)" />
              <div style={{ marginTop: 10, textAlign: "center" }}>
                <Button variant="contained" >PDF出力</Button>
              </div>
      </TabPanel>
    </div>
  );
}
