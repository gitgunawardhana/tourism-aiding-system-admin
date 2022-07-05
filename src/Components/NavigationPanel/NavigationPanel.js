import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import {NavigationPanelData} from "./NaigationPanelData";
import './NavigationPanel.css';
import {IconContext} from "react-icons";

function NavigationPanel() {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='nav-panel'>
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>

                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className="nav-panel-toggle">
                            {/*<Link to="#" className='menu-bars'>*/}
                            {/*<FaIcons.FaBars onClick={showSidebar}/>*/}
                            {/*</Link>*/}
                            <span className="company-name">ROADSIGN ADMIN PANEL</span>
                        </li>
                        {NavigationPanelData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavigationPanel