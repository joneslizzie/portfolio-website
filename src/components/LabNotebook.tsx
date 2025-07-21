import { Dispatch, SetStateAction, useState } from "react";
import PDFModal from "./PDFModal";
import CardHeaders from "./CardHeaders";
import { Box, Button, Card, Stack, Typography } from "@mui/joy";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import React from "react";

function LabNotebook({rowToggle} : {rowToggle: Dispatch<SetStateAction<boolean>>}) {

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
                title={"Knowledge Extraction from Archival Lab Notebooks"}
                dates={"July - December 2024"}
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
                    : Machine Learning • Python
                </Typography>
                <Stack direction={"row"} spacing={2}>
                    <Button 
                        variant="soft"
                        onClick={() =>
                            window.open("https://ieeexplore.ieee.org/document/10825206")}>
                        <OpenInBrowserIcon /> IEEE
                    </Button>
                    <PDFModal 
                        pdfUrl="/pdfs/reu-poster.pdf" 
                        projectTitle="AI-Ready: Knowledge Extraction from Archival Lab Notebooks"
                        slides={false}
                    />
                </Stack>
            </Stack>
        </Card>
    );
}

export default LabNotebook;