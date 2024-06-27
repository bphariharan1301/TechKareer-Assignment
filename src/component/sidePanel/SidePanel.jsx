import React from "react";
import { Stack, Button, Typography, Divider } from "@mui/material";
import deleteIcon from "../../images/delete-icon.svg";
import editIcon from "../../images/edit-icon.svg";
import "../sidePanel/SideBar.css";
import candidtatesIcon from "../../images/canditates-icon.svg";
import userMatchIcon from "../../images/user-match.svg";
import messageIcon from "../../images/message-icon.svg";
import eyeIcon from "../../images/eye-icon.svg";

export default function SidePanel() {
    return (
        <div className="job-details-right-pane-div">
            <div className="button_box" style={{ gap: "2rem !immportant" }}>
                <Button
                    variant="outlined"
                    className="btn btn-outline"
                    sx={{
                        width: "200px !important",
                        height: "46px !important",
                        padding: "12px 24px !important",
                        gap: "10px !important",
                        borderRadius: "0.5rem !important",
                        border: "1px solid !important", // Assuming you want a solid border
                        backgroundColor: "#FEF4F2 !important",
                        borderColor: "#DC4A2D !important",
                        color: "#DC4A2D !important",
                    }}
                    startIcon={<img src={deleteIcon} alt="Delete Icon" />}
                >
                    Delete job
                </Button>
                <Button
                    variant="contained"
                    className="btn btn-contained"
                    sx={{
                        width: "200px !important",
                        height: "46px !important",
                        padding: "12px 24px !important",
                        gap: "10px !important",
                        borderRadius: "0.5rem !important",
                        border: "1px solid !important", // Assuming you want a solid border

                        backgroundColor: "#DC4A2D !important",
                        color: "#FFFFFF !important",
                    }}
                    startIcon={<img src={editIcon} alt="Edit Icon" />}
                >
                    Edit Job
                </Button>
            </div>
            <Stack spacing={2} className="job-stats">
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    <div className="stats-div">
                        <img src={candidtatesIcon} alt="Applicants Icon" />
                        <Typography variant="body1" className="stats-text">
                            Applicants
                        </Typography>
                    </div>
                    <Typography
                        variant="body1"
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                        className="stats-sub-text"
                    >
                        400
                    </Typography>
                </Stack>
                <Divider />
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    <div className="stats-div">
                        <img src={userMatchIcon} alt="Matches Icon" />
                        <Typography variant="body1" className="stats-text">
                            Matches
                        </Typography>
                    </div>
                    <Typography
                        variant="body1"
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                        className="stats-sub-text"
                    >
                        100
                    </Typography>
                </Stack>
                <Divider />
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    <div className="stats-div">
                        <img src={messageIcon} alt="Messages Icon" />
                        <Typography variant="body1" className="stats-text">
                            Messages
                        </Typography>
                    </div>
                    <Typography
                        variant="body1"
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                        className="stats-sub-text"
                    >
                        147
                    </Typography>
                </Stack>
                <Divider />
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    <div className="stats-div">
                        <img src={eyeIcon} alt="Views Icon" />
                        <Typography variant="body1" className="stats-text">
                            Views
                        </Typography>
                    </div>
                    <Typography
                        variant="body1"
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                        className="stats-sub-text"
                    >
                        800
                    </Typography>
                </Stack>
            </Stack>
        </div>
    );
}
