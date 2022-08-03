import React from "react";
import {Link} from "react-router-dom";
import {NavigationPanelData} from "./NaigationPanelData";
import './NavigationPanel.css';

function NavigationPanel() {
    return (
        <>
            <div className="upper-nav-bar">
                <h1>ROADSIGN ADMIN PANEL</h1>
            </div>
            <div className="side-bar">
                <div className="logo-name">ROADSIGN</div>
                {NavigationPanelData.map((item, index) => {
                    return (
                        <div key={index} className="nav-bar-item">
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default NavigationPanel