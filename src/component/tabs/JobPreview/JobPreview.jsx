import React from "react";
import {
    Stack,
    Typography,
    Divider,
    Box,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

import "./JobPreview.css";
import openChip from "../../../images/open-chip.svg";
import dotIcon from "../../../images/dot-icon.svg";
import coinStack from "../../../images/coin-stack.svg";
import markerIcon from "../../../images/marker-icon.svg";
import tag from "../../../images/Tag.svg";
import tag2 from "../../../images/tag2.svg";
import Tag3 from "../../../images/Tag3.svg";
import atlassianIcon from "../../../images/atlassian-icon.svg";

function JobPreview() {
    return (
        <section id="job-preview-section">
            <div className="job-preview-div">
                <div className="job-details-div">
                    <div className="role-name">
                        <Typography variant="h5">
                            Senior Product Designer
                        </Typography>
                        <img src={dotIcon} alt="Dot Icons" />
                        <Typography variant="body1">
                            posted 2 days ago
                        </Typography>
                        <img src={openChip} alt="open chip" />
                    </div>
                    <Stack
                        direction={"row"}
                        spacing={2}
                        className="location-compensation"
                    >
                        <Stack
                            direction={"row"}
                            spacing={1}
                            className="location-compensation"
                        >
                            <img src={markerIcon} alt="Dot Icons" />
                            <Typography variant="body1">
                                Delaware, USA
                            </Typography>
                        </Stack>
                        <img src={dotIcon} alt="Dot Icons" />
                        <Stack
                            direction={"row"}
                            spacing={1}
                            className="location-compensation"
                        >
                            <img src={coinStack} alt="Dot Icons" />
                            <Typography variant="body1">
                                $300k - $400k
                            </Typography>
                        </Stack>
                    </Stack>
                </div>
                <Divider orientation="horizontal" />
            </div>
            <div className="job-preview-div">
                <div className="job-details-div">
                    <div className="skill_required">
                        <Stack>
                            <Typography className="text_heading">
                                Skills Required
                            </Typography>
                            <div className="icon">
                                <img src={tag} />
                                <img src={tag2} />
                                <img src={Tag3} />
                            </div>
                        </Stack>
                        <Stack>
                            <Typography className="text_heading">
                                Preferred Language
                            </Typography>
                            <Typography className="text_heading2">
                                English
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography className="text_heading">
                                Type
                            </Typography>
                            <Typography className="text_heading2">
                                Full Time
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography className="text_heading">
                                Years of Experience
                            </Typography>
                            <Typography className="text_heading2">
                                3+ Years of Experience
                            </Typography>
                        </Stack>
                    </div>

                    <Divider orientation="horizontal" />
                </div>
            </div>
            <div className="job-preview-div">
                <div className="job-details-div">
                    <div className="job-detail-discription">
                        <Typography className="about_job_titel">
                            About the job
                        </Typography>
                        <div className="text_content">
                            <Typography>
                                1. Handle the UI/UX research design
                            </Typography>
                            <Typography>
                                2. Work on researching on latest web
                                applications designs & trends
                            </Typography>
                            <Typography>
                                3. Work on conceptualizing and visualizing
                            </Typography>
                            <Typography>
                                4. Work on creating graphics content and other
                                graphic related works
                            </Typography>

                            <Typography sx={{ marginTop: 2 }}>
                                Benefits:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary=". Health insurance" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary=". Provident Fund" />
                                </ListItem>
                            </List>

                            <Typography sx={{ marginTop: 2 }}>
                                Schedule:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary=". Day shift" />
                                </ListItem>
                            </List>

                            <Typography sx={{ marginTop: 2 }}>
                                Supplemental pay types:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary=". Performance bonus" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary=". Yearly bonus" />
                                </ListItem>
                            </List>

                            <Typography sx={{ marginTop: 2 }}>
                                Work Location: In person
                            </Typography>
                        </div>
                    </div>

                    <Divider orientation="horizontal" />
                </div>
            </div>
            <div className="company-section">
                <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                        margin: "4rem 0 2rem 6rem",
                    }}
                >
                    <img src={atlassianIcon} alt="Dot Icons" />
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#4F4F4F",
                        }}
                    >
                        Atlassian
                    </Typography>
                </Stack>
                <Stack spacing={4} className="company-section">
                    <Stack
                        direction={"row"}
                        spacing={10}
                        sx={{
                            marginLeft: "6rem !important",
                        }}
                    >
                        <Stack className="company-details-div" spacing={2}>
                            <div>
                                <Typography
                                    variant="body1"
                                    className="company-heading-text"
                                >
                                    Company Size
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="company-description-text"
                                >
                                    1k - 2k Employees
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="body1"
                                    className="company-heading-text"
                                >
                                    Sector
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="company-description-text"
                                >
                                    Information Technology, Infrastructure
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="body1"
                                    className="company-heading-text"
                                >
                                    Founded In
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="company-description-text"
                                >
                                    2019
                                </Typography>
                            </div>
                        </Stack>
                        <Stack className="company-details-div" spacing={2}>
                            <div>
                                <Typography
                                    variant="body1"
                                    className="company-heading-text"
                                >
                                    Type
                                </Typography>
                                <Typography variant="body1">Private</Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="body1"
                                    className="company-heading-text"
                                >
                                    Funding
                                </Typography>
                                <Typography variant="body1">
                                    Bootstrapped
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="body1"
                                    className="company-heading-text"
                                >
                                    Founded By
                                </Typography>
                                <Typography variant="body1">
                                    Scott Farquhar, Mike Cannon-Brookes
                                </Typography>
                            </div>
                        </Stack>
                    </Stack>
                </Stack>
            </div>
        </section>
    );
}

export default JobPreview;
