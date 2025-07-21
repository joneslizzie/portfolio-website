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
                dates={"October - December 2024"}
                setCardSize={setCardSize}/>
            <Box sx={{ height: boxSize, overflow: 'auto' }}>
                <Typography level="body-lg">
                    Here is my description of what this project is
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
                    : Typescript • React • Mongodb
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