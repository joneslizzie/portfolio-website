import { Dispatch, SetStateAction, useState } from "react";
import PDFModal from "./PDFModal";
import CardHeaders from "./CardHeaders";
import { Box, Button, Card, Stack, Typography } from "@mui/joy";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import React from "react";

function CodeQuest({rowToggle} : {rowToggle: Dispatch<SetStateAction<boolean>>}) {

    const [cardSize, setCardSize]  = useState<string>('48vw');
    const [boxSize, setBoxSize] = useState<number>(300);
    React.useEffect(() => {
        if(cardSize === '48vw') {
            rowToggle(false);
            setBoxSize(300);
        } else {
            rowToggle(true);
            setBoxSize(200);
        }
    }, [cardSize, rowToggle]);

    return (
        <Card sx={{ width: cardSize }}>
            <CardHeaders 
                title={"CodeQuest"}
                dates={"October 2024 - December 2024"}
                setCardSize={setCardSize}/>
            <Box sx={{ height: boxSize, overflow: 'auto' }}>
                <Typography level="body-lg">
                    CodeQuest is a full-stack Q&A platform for software learners to ask questions, 
                    join communities based on interests, and connect with peers. My team and I built 
                    this as part of a semester-long software engineering course at Northeastern. The 
                    app allows users to register, select interest tags, and join suggested 
                    communities, creating a personalized, interactive experience. I focused on both 
                    the real-time chat system and user interface components. I implemented live chat 
                    functionality that supports direct messaging between users and within communities, 
                    with message history saved in Firebase for persistence. I also styled the chat UI 
                    to match our platforms look and feel. In addition, I developed the user profile 
                    sidebar, which displays user status (ex. moderator or member), and added 
                    functionality for moderators to remove questions from their community. I also 
                    wrote and ran tests to verify these features were working correctly across different 
                    user types. This project gave me hands-on experience in building collaborative 
                    real-time applications, working with tools like Firebase and React, while practicing
                    team-based development and feature ownership.
                </Typography>
            </Box>
            <Stack direction="row" 
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <Typography level="body-sm" color="primary" variant="soft" 
                   sx={{ 
                    display: 'flex', 
                    padding: '5px',
                    alignItems: 'center'
                  }}>
                    <span style={{fontWeight: "bold"}}>Skills</span>
                    : React • Typescript • Mongodb • Firebase
                </Typography>
                <Stack direction={"row"} spacing={2}>
                <Button 
                    variant="soft"
                    onClick={() =>
                        window.open("https://cs4530-f24-206.onrender.com")}>
                    <OpenInBrowserIcon /> Visit Site
                </Button>
                <Button 
                    variant="soft"
                    onClick={() =>
                        window.open("https://github.com/neu-cs4530/fall24-team-project-group-206")}>
                    <GitHubIcon />
                </Button>
                <PDFModal 
                    pdfUrl="/pdfs/codequest-slides.pdf" 
                    projectTitle="CodeQuest"
                    slides={true}
                />
                <PDFModal 
                    pdfUrl="/pdfs/codequest-poster.pdf" 
                    projectTitle="CodeQuest"
                    slides={false}
                />
                </Stack>
            </Stack>
        </Card>
    );
}

export default CodeQuest;