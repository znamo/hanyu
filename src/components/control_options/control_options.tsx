import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import {FormControlLabel, FormGroup, FormLabel} from "@material-ui/core";
import {UnitsProps, UnitProps} from "../../types";

const ControlOptions: React.FC<UnitsProps> = ({units}) => {
    const [state, setState] = React.useState(units);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Units</FormLabel>
            <FormGroup>
                {units.map((unit: UnitProps) => (
                    <FormControlLabel key={unit.name}
                        control={<Checkbox checked={unit.include} onChange={handleChange} name={unit.name}/>}
                        label={unit.name}
                    />))}
            </FormGroup>
            {/*<FormHelperText>Be careful</FormHelperText>*/}
        </FormControl>
    );
}

export default ControlOptions;