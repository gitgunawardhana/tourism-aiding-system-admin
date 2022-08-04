import React from "react";
import {Link} from "react-router-dom";
import {NavigationPanelData} from "./NaigationPanelData";
import './NavigationPanel.css';
import Grid from "@mui/material/Grid";
import DropDownIcon from "../../Assets/NavigationPanel/down-arrow.png";

function NavigationPanel() {

    const configurations = ["Driver Fare", "Vehicle Types", "Accommodation Types",
        "Room Facilities", "Bathroom Facilities", "Provinces", "Location activities"];
    return (
        <>
            <div className="upper-nav-bar">
                <h1>ROADSIGN ADMIN PANEL</h1>
            </div>
            <div className="side-bar">
                <div className="logo-name">ROADSIGN</div>

                <div className="navigation-item-list">

                    {NavigationPanelData.map((item) => (
                        <>
                            <Grid container spacing={0} className="navigation-item">
                                <Grid item xs={2}>
                                    {item.icon}
                                </Grid>
                                <Grid item xs={6}>
                                    <Link to={item.path} className="navigation-item-link">
                                        <span>{item.title}</span>
                                    </Link>
                                </Grid>
                                <Grid item xs={3}>
                                    <div
                                        className={item.subItems.length !== 0 ? "navigation-sub-item-dropdown" : "navigation-sub-item-dropdown-hidden"}>
                                        <img src={DropDownIcon} alt="Dropdown"/>
                                    </div>
                                </Grid>
                            </Grid>
                            {item.subItems.map((subItem) => (
                                <Grid container spacing={0} className="navigation-item">
                                    <Grid item xs={2}/>
                                    <Grid item xs={9}>
                                        <Link to={subItem.path} className="navigation-item-link">
                                            <span>{subItem.title}</span>
                                        </Link>
                                    </Grid>
                                </Grid>
                            ))}
                        </>
                    ))}

                    {/*Configuration Sub List*/}
                    {/*{configurations.map((item) => (*/}
                    {/*    <Grid container spacing={0} className="navigation-item">*/}
                    {/*        <Grid item xs={2}/>*/}
                    {/*        <Grid item xs={9}>*/}
                    {/*            <Link to="/configurations" className="navigation-item-link">*/}
                    {/*                <span>{item}</span>*/}
                    {/*            </Link>*/}
                    {/*        </Grid>*/}
                    {/*    </Grid>*/}
                    {/*))}*/}
                </div>

                {/*<div className="nav-bar-item">*/}
                {/*    <Link to="/configurations">*/}
                {/*        <span>Configurations</span>*/}
                {/*    </Link>*/}
                {/*    <div className="nav-bar-sub-item-list">*/}
                {/*        <div className="nav-bar-sub-item">*/}
                {/*            <Link to="/configurations">*/}
                {/*                <span>Driver fare</span>*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*        <div className="nav-bar-sub-item">*/}
                {/*            <Link to="/configurations">*/}
                {/*                <span>Vehicle Types</span>*/}
                {/*            </Link>*/}
                {/*        </div>*/}

                {/*        <div className="nav-bar-sub-item">*/}
                {/*            <Link to="/configurations">*/}
                {/*                <span>Accommodation Types</span>*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*        <div className="nav-bar-sub-item">*/}
                {/*            <Link to="/configurations">*/}
                {/*                <span>Room Facilities</span>*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*        <div className="nav-bar-sub-item">*/}
                {/*            <Link to="/configurations">*/}
                {/*                <span>Bathroom Facilities</span>*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*        <div className="nav-bar-sub-item">*/}
                {/*            <Link to="/configurations">*/}
                {/*                <span>Accommodation Types</span>*/}
                {/*            </Link>*/}
                {/*        </div>*/}

                {/*        <div className="nav-bar-sub-item">*/}
                {/*            <Link to="/configurations">*/}
                {/*                <span>Provinces</span>*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*        <div className="nav-bar-sub-item">*/}
                {/*            <Link to="/configurations">*/}
                {/*                <span>Location Activities</span>*/}
                {/*            </Link>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </>
    )
}

export default NavigationPanel