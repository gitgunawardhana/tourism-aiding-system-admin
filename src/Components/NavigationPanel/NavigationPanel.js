import React from "react";
import {Link} from "react-router-dom";
import {NavigationPanelData} from "./NaigationPanelData";
import './NavigationPanel.css';

function NavigationPanel() {
    return (
        <>
            <div className="lower-nav-bar">
                {NavigationPanelData.map((item, index) => {
                    return (
                        <div key={index} className="nav-bar-item">
                            <Link to={item.path}>
                                {item.icon}
                                <br/>
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="upper-nav-bar">
                <h1>ROADSIGN ADMIN PANEL</h1>
            </div>
        </>
    )
}

export default NavigationPanel