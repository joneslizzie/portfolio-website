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
                dates={"July 2024 - December 2024"}
                setCardSize={setCardSize}/>
            <Box sx={{ height: boxSize, overflow: 'auto' }}>
                <Typography level="body-lg">
                    I worked on a research project focused on using AI to make decades of handwritten
                    chemistry lab notebooks computationally ready and determine if there exists any 
                    patterns in the data that separate successful and unsuccessful experiments. These 
                    notebooks contain data on metal-organic framework synthesis (MOFs), which are 
                    compounds of interest for their possible application to gas purification/separation, 
                    water remediation, and as conducting solids and super capacitors. Our team, supported
                    by Drexel University and funded by ID4, worked on developing a system that converts 
                    digital scans of these analog notebooks into structured, AI-ready datasets. Using 
                    Detectron2, I trained and fine-tuned computer vision models to segment notebooks 
                    into meaningful regions, like text, tables, and reaction diagrams. From there I 
                    took note of results from each page and calculated the True Positive, False Positive,
                    False Negative, Recall, Precision, and F1 values per notebook and object type. I 
                    then researched information extraction techniques to identify and refine experimental 
                    entries for future computational analysis. Our work was published through IEEE 
                    Big Data, representing an early step towards building frameworks that can preserve 
                    and analyze scientific history. This project introduced me to machine learning, 
                    and real-world applications of AI.
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
                    : Machine Learning • Python • Detectron2 • IEEE Big Data Publication
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