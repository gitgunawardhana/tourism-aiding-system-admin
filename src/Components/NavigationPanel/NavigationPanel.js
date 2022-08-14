import React from "react";
import {Link} from "react-router-dom";
import {NavigationPanelData} from "./NaigationPanelData";
import './NavigationPanel.css';
import Grid from "@mui/material/Grid";
import {styled} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function NavigationPanel() {

    const configurations = ["Driver Fare", "Vehicle Types", "Accommodation Types",
        "Room Facilities", "Bathroom Facilities", "Provinces", "Location activities"];

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({theme}) => ({
        border: `none`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            {...props}
        />
    ))(({theme}) => ({
        backgroundColor: '#00565B',
        color: 'white',
        '& .MuiAccordionSummary-expandIconWrapper': {
            color: 'white'
        },
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(180deg)',
        },
        '& .MuiAccordionSummary-content': {
            // marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
        padding: '0 20px',
        borderTop: '1px solid rgba(0, 0, 0, 0)',
        backgroundColor: '#00565B',
        color: 'white',
    }));
    return (
        <>
            <div className="upper-nav-bar">
                <h1>ROADSIGN ADMIN PANEL</h1>
            </div>
            <div className="side-bar">
                <div className="logo-name">ROADSIGN</div>

                <div className="navigation-item-list">

                    {NavigationPanelData.map((item) => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={item.subItems.length === 0 ? null : <ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Grid container spacing={0} className="navigation-item">
                                    <Grid item xs={2}>
                                        {item.icon}
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Link to={item.path} className="navigation-item-link">
                                            <span>{item.title}</span>
                                        </Link>
                                    </Grid>

                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                {item.subItems.map((subItem) => (
                                    <Grid container spacing={0} className="navigation-item navigation-sub-item">
                                        <Grid item xs={2}/>
                                        <Grid item xs={9}>
                                            <Link to={subItem.path} className="navigation-item-link">
                                                <span>{subItem.title}</span>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    ))}

                </div>
            </div>
        </>
    )
}

export default NavigationPanel