import {Fragment} from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.Header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div>
            <img src={mealsImage} alt="A table full of food"/>
        </div>
    </Fragment>
};

export default Header;