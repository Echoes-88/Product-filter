import React from "react";
import logo from './logo-greenVillage.jpg';

const Header: React.FC = () => {
    return(
        <img className="logo" src={logo} alt="logo"/>
    )
}

export default Header;