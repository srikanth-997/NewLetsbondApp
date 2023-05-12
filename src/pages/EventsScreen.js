import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@material-ui/core";
import './EventsScreen.css';
import event1 from "../pages/eventsScreen-bg.png";
import locationImage1 from "../pages/Group -1.svg";
import locationImage2 from "../pages/Group -2.svg";
import locationImage3 from "../pages/Group-3.svg";

export default function EventsScreen() {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState("");

    const handleLocationClick = (content) => {
        setDialogContent(content);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 col-md-4 col-sm-4 align-self-center d-flex" id="eventMap" style={{ backgroundImage: `url(${event1})`, borderRadius: '20px', position: 'relative' }}>
                    <div className="location-wrapper">
                        <img src={locationImage1} alt="Location" className="location-image1" onClick={() => handleLocationClick("Content for Location 1")} />
                    </div>
                    <div className="location-wrapper">
                        <img src={locationImage2} alt="Location" className="location-image2" onClick={() => handleLocationClick("Content for Location 2")} />
                    </div>
                    <div className="location-wrapper">
                        <img src={locationImage3} alt="Location" className="location-image3" onClick={() => handleLocationClick("Content for Location 3")} />
                    </div>
                </div>
            </div>

          
        </div>
    );
}