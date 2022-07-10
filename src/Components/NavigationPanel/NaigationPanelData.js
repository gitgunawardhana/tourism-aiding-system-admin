import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavigationPanelData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome className="nav-menu-item-icon"/>,
        cName: 'nav-text'
    },
    {
        title: 'Vendors',
        path: '/vendors',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Configurations',
        path: '/configurations',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
]