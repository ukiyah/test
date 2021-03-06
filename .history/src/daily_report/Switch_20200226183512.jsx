import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MultilLineTextField from "./MultilLineTextField";
export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  if(this.state.checkedB) {
      return <MultilLineTextField />
  }
  return (
    <FormGroup row>
      
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        }
        label={props.label}
      />
    </FormGroup>
  );
}
