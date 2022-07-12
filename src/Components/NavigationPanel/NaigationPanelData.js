import React from "react";
import Home from "../../Assets/NavigationPanel/home.png";
import Vendors from "../../Assets/NavigationPanel/vendors.png";
import Users from "../../Assets/NavigationPanel/users.png";
import Configurations from "../../Assets/NavigationPanel/configurations.png";

export const NavigationPanelData = [
    {
        title: 'Home',
        path: '/',
        icon: <img src={Home} alt="Home Icon" className="nav-bar-icon"/>
    },
    {
        title: 'Vendors',
        path: '/vendors',
        icon: <img src={Vendors} alt="Vendors Icon" className="nav-bar-icon"/>
    },
    {
        title: 'Users',
        path: '/users',
        icon: <img src={Users} alt="Users Icon" className="nav-bar-icon"/>
    },
    {
        title: 'Configurations',
        path: '/configurations',
        icon: <img src={Configurations} alt="Configuration Icon" className="nav-bar-icon"/>
    },
]