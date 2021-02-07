import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import units from './state';
import CardCarousel from "./components/card_carousel/cardCarousel";

// function App() {
//   return (
//     <div className="App">
//         <CardCarousel cardList={unit5}/>
//     </div>
//   );
// }
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ControlOptions from "./components/control_options/control_options";
import {CardProps, UnitProps} from "./types";
import {CarouselProps} from "react-material-ui-carousel";
import {Grid} from "@material-ui/core";

function App() {
    const unitsWithIncludeFlag = units.map(obj => ({...obj, include: true}))
    const [includedUnits, setIncludedUnits] = React.useState(unitsWithIncludeFlag);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newState = includedUnits.map(el => {
            if (el.name === event.target.name) {
                el.include = event.target.checked
            }
            return el
        });
        setIncludedUnits(newState)
    };

    const cardList = includedUnits.reduce<CardProps[]>((acc, cur: UnitProps) => cur.include ? [...acc, ...cur.characters] : acc, []);
    const randomCardList = cardList.sort(() => Math.random() - 0.5);
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {/*<IconButton edge="start" color="inherit" aria-label="menu">*/}
                    {/*  <MenuIcon/>*/}
                    {/*</IcnButton>*/}
                    <Typography variant="h6">
                        中文
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <ControlOptions units={includedUnits} handleChange={handleChange}/>
                </Grid>
                <Grid item xs={4}>
                    <div className="App">
                        <CardCarousel cardList={randomCardList}/>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}


export default App;
