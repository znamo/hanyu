import React, {KeyboardEvent, MouseEvent, useState} from 'react';
import {MemoryRouter as Router} from 'react-router'
import {Switch, Route} from "react-router-dom";
import routes from 'routs'
import Menu from "components/menu";
import {Container, AppBar, Toolbar, IconButton} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import Typography from '@material-ui/core/Typography';

import './App.scss';


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
