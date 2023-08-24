import logo from '../../../assets/investment-calculator-logo.png';
import React, {useState} from "react";

const HeaderComp = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default HeaderComp;