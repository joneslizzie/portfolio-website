import React from "react";
import { Dispatch, SetStateAction, useState } from "react";
import PDFModal from "./PDFModal";
import CardHeaders from "./CardHeaders";
import { Box, Button, Card, Stack, Typography } from "@mui/joy";
import GitHubIcon from '@mui/icons-material/GitHub';

function CookingGame({rowToggle} : {rowToggle: Dispatch<SetStateAction<boolean>>}) {

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
                title={"Cooking Game"}
                dates={"November 2023"}
                setCardSize={setCardSize}/>
            <Box sx={{ height: boxSize, overflow: 'auto' }}>
                <Typography level="body-lg">
                This project involved applying computer vision techniques to drive animation in an 
                interactive game. The objective was to extract motion data from a video of a monkey 
                and use it to animate a game character who mimics the monkey's movements. I drew 
                inspiration from one of my favorite arcade games growing up, the apple-catching 
                game. My version features a chef who mirrors the monkey’s motion and drops cookies 
                from his hands. The player, represented by a cookie jar, can move using the arrow 
                keys to collect the cookies for points. The game includes two timed levels where the
                 user must catch a minimum number of cookies to advance. If the player collides with
                  the chef, they’re bumped to the bottom-left corner, introducing an obstacle 
                avoidance element. Using OpenCV, I processed each frame of the video to isolate the 
                monkey using color-based masking and morphological operations, erosion, and 
                dilation. I then extracted five key centroid points (head, hands, and feet) from 
                each frame. After finding the center of my marionette, I use priority queues to sort
                 the other centroids based on how close they are to my approximated center. I mapped 
                 the chef character’s body parts to the corresponding tracked points.
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
                    : Computer Vision • Morphological Processing • Python
                </Typography>
                <Stack direction={"row"} spacing={2}>
                    <Button 
                        variant="soft"
                        onClick={() =>
                            window.open("https://github.com/joneslizzie/Cooking-Game")}>
                        <GitHubIcon />
                    </Button>
                    <PDFModal 
                        pdfUrl="/pdfs/cookinggame-presentation.pdf" 
                        projectTitle="Cooking Game"
                        slides={true}
                    />
                    <PDFModal 
                        pdfUrl="/pdfs/cookinggame-writeup.pdf" 
                        projectTitle="Cooking Game"
                        slides={false}
                    />
                </Stack>
            </Stack>
        </Card>
    );
}

export default CookingGame;