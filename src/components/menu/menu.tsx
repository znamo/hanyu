import React, {KeyboardEvent, MouseEvent, useState, FC} from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import GridOnIcon from "@material-ui/icons/GridOn";
import {useHistory} from "react-router-dom";

interface MenuProps {
    open: boolean,
    setState: (state: boolean) => (event: KeyboardEvent | MouseEvent) => void
}

export const Menu: FC<MenuProps> = ({open, setState}) => {
    let history = useHistory();
    const handleMenuClick = (path: '/recognize' | '/grid') => (event: MouseEvent | TouchEvent): void => {
        history.push(path)
    }

    return (
        <Drawer anchor="left" open={open} onClose={setState(false)}>
            <div
                role="presentation"
                onClick={setState(false)}
                onKeyDown={setState(false)}
            >
                <List>
                    <ListItem button onClick={handleMenuClick('/recognize')}>
                        <ListItemIcon><FingerprintIcon/></ListItemIcon>
                        <ListItemText primary={"Recognize"}/>
                    </ListItem>

                    <ListItem button onClick={handleMenuClick('/grid')}>
                        <ListItemIcon><GridOnIcon/></ListItemIcon>
                        <ListItemText primary={"Grid"}/>
                    </ListItem>
                </List>
                <Divider/>
            </div>
        </Drawer>
    );
};

export default Menu