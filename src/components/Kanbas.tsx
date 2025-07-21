import { Dispatch, SetStateAction, useState } from "react";
import CardHeaders from "./CardHeaders";
import { Box, Button, Card, Stack, Typography } from "@mui/joy";
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";

function Kanbas({rowToggle} : {rowToggle: Dispatch<SetStateAction<boolean>>}) {

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
                title={"Kanbas"}
                dates={"September - December 2024"}
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
                    : React • Full Stack
                </Typography>
                <Button 
                    variant="soft"
                    onClick={() =>
                        window.open("https://github.com/joneslizzie/kanbas-react-web-app")}>
                    <GitHubIcon />
                </Button>
            </Stack>
        </Card>
    );
}

export default Kanbas;