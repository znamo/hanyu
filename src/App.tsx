import React from 'react';
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

function App() {

    // const unitsToShow = units.filter(unit => unit.include).map(unit => unit.characters)

    const unitsCopy = units.map(obj=> ({ ...obj, include: true }))

    const unitsToShow = unitsCopy.reduce<CardProps[]>((acc, cur: UnitProps) => cur.include ? [...acc, ...cur.characters] : acc, []);

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
          <div className="continer-class">
              <ControlOptions units={unitsCopy}/>
              <div className="App">
                <CardCarousel cardList={unitsToShow}/>
              </div>
          </div>
      </>
  );
}


export default App;
