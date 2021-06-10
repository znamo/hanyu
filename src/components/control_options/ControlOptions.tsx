import React from 'react';
import {ControlOptionsProps, UnitProps} from "types";
import {FormControlLabel, FormGroup, FormLabel, Checkbox, FormControl} from "@material-ui/core";


const ControlOptions: React.FC<ControlOptionsProps> = ({units, handleChange}) => {
    const reversedUnits = [...units].reverse()
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Units</FormLabel>
            <FormGroup>
                {reversedUnits.map((unit: UnitProps) => (
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