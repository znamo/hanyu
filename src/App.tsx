import React, {KeyboardEvent, MouseEvent, useState} from 'react';
import './App.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import GridOnIcon from '@material-ui/icons/GridOn';
import {Grid, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider} from "@material-ui/core";
import {MemoryRouter as Router} from 'react-router'
import {Link as RouterLink, LinkProps as RouterLinkProps, useHistory} from 'react-router-dom';
import routes from 'routs'

import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Menu from "components/menu";


function App() {

    const [menuState, setMenuState] = useState(false);
    const toggleDrawer = (state: boolean) => (event: KeyboardEvent | MouseEvent): void => {
        if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
            return;
        }
        setMenuState(state);
    };

    return (
        <Router>

            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon onClick={toggleDrawer(true)}/>
                    </IconButton>
                </Toolbar>
                {/*<Typography variant="h6">*/}
                {/*    中文*/}
                {/*</Typography>*/}
            </AppBar>

            <Menu open={menuState} setState={toggleDrawer}/>

            <Container>
                <Switch>
                    {routes.map((route, i) => <Route path={route.path} component={route.component} key={i}/>)}
                </Switch>
            </Container>

        </Router>
    );
}


export default App;
