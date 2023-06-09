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
                    <div>
                        <img src={locationImage1} alt="Location" className="location-image1" id="imge1" onMouseOver={() => { document.getElementById('info').style.display = 'block'; }} onMouseOut={() => { document.getElementById('info').style.display = 'none'; }} />
                        <p id="info" style={{ display: 'none' }}>Text to popup</p>
                    </div>
                    <div>
                        <img src={locationImage2} alt="Location" className="location-image2" />
                    </div>
                    <div>
                        <img src={locationImage3} alt="Location" className="location-image3" />
                    </div>
                </div>
            </div>
        </div>
    );
}
