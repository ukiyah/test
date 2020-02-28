import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);


  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">{props.value}</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option value="" />
          <option value={10}>{props.item1}</option>
          <option value={20}>{props.item2}</option>
          <option value={30}>{props.item3}</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">分</InputLabel>
        <Select
          native
          value={state.min}
          onChange={handleChange('min')}
          inputProps={{
            name: 'min',
            id: 'age-native-simple',
          }}
        >
          <option value="" />
          <option value={10}>00</option>
          <option value={20}>15</option>
          <option value={30}>30</option>
        </Select>
      </FormControl>
      
      

    </div>
  );
}
