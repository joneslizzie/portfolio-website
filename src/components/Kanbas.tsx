import { Dispatch, SetStateAction, useState } from "react";
import CardHeaders from "./CardHeaders";
import { Box, Button, Card, Stack, Tooltip, Typography } from "@mui/joy";
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
                dates={"September 2024 - December 2024"}
                setCardSize={setCardSize}/>
            <Box sx={{ height: boxSize, overflow: 'auto' }}>
                <Typography level="body-lg">
                    This project involved designing and building Kanbas, a platform inspired by Canvas. 
                    Over the course of the semester, I developed Kanbas to support multiple user roles
                    such as, teachers, students and teaching assistant, each with customized interfaces 
                    tailored to their needs. Students are able to enroll and unenroll in courses, and 
                    then see a view for all their assignments and modules. The teacher view allows 
                    instructors to create and manage assignments and courses directly through the app. 
                    Later in the semester, working collaboratively in a group assignment, we expanded 
                    Kanbas by implementing a quiz section featuring automatic grading. This enabled 
                    teachers to create quizzes with customizable question types and assign point 
                    values to each question. This addition enhanced the platforms' interactivity. 
                    Built with a focus on clear role differentiation and seamless user experience, 
                    Kanbas showcases my skills in frontend and backend web development, user 
                    authentication, and dynamic data management.
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
                <Stack direction={"row"} spacing={2}>
                    <Tooltip title="backend" variant="plain">
                        <Button 
                            variant="soft"
                            onClick={() =>
                                window.open("https://github.com/joneslizzie/kanbas-node-server-app")}>
                            <GitHubIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="frontend" variant="plain">
                        <Button 
                            variant="soft"
                            onClick={() =>
                                window.open("https://github.com/joneslizzie/kanbas-react-web-app")}>
                            <GitHubIcon />
                        </Button>
                    </Tooltip>
                </Stack>
            </Stack>
        </Card>
    );
}

export default Kanbas;