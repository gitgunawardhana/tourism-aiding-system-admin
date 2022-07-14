import React from "react";
import {Link} from "react-router-dom";
import {NavigationPanelData} from "./NaigationPanelData";
import './NavigationPanel.css';

function NavigationPanel() {
    // const navButtonClick = (title) => {
    //     switch (title) {
    //         case "Home":
    //             setHome(true);
    //             setVendor(false);
    //             setUser(false);
    //             setConfiguration(false);
    //             break;
    //         case "Vendors":
    //             setHome(false);
    //             setVendor(true);
    //             setUser(false);
    //             setConfiguration(false);
    //             break;
    //         default:
    //             setCommon(true);
    //     }
    // }
    // const [home, setHome] = useState(false);
    // const [vendor, setVendor] = useState(false);
    // const [user, setUser] = useState(false);
    // const [configuration, setConfiguration] = useState(false);
    // const [common, setCommon] = useState(false);

    return (
        <>
            <div className="lower-nav-bar">
                {NavigationPanelData.map((item, index) => {
                    // switch (item.title) {
                    //     case "Home":
                    //         setCommon(home);
                    //         break;
                    //     case "Users":
                    //         setCommon(user);
                    //         break;
                    //     case "Vendors":
                    //         setCommon(vendor);
                    //         break;
                    //     case "Configurations":
                    //         setCommon(configuration);
                    //         break;
                    //     default:
                    //         setCommon(true);
                    // }
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
                <h1>ROADSIGN</h1>
            </div>
        </>
    )
}

export default NavigationPanel