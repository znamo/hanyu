import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const ControlOptions: React.FC<{units: string[]}> = ({units}) => {
    const [lesson, setLesson] = React.useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLesson(event.target.value as string[]);
    };

    const handleChangeMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
        const {options} = event.target as HTMLSelectElement;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setLesson(value);
    };

    const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (
       <FormControl style={{minWidth: '90%'}}>
        <InputLabel id="demo-mutiple-checkbox-label">Units</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={lesson}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(', ')}
          MenuProps={MenuProps}
        >
          {units.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={lesson.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )};

export default ControlOptions;