import { Avatar, Box, Stack, Typography } from "@mui/joy";
import myImg from '../imgs/lizzie-jones.jpeg';
import { useState } from "react";

function HomePage() {
    const [isSpinning, setIsSpinning] = useState<boolean>(false);

    const handleClick = () => {
        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 2000);
    };

    return (
        <div className="main-content">
            <Stack direction="column" gap={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar 
                    alt="Lizzie Jones" 
                    src={myImg} 
                    onClick={handleClick}
                    sx={{
                        width: 300, 
                        height: 'auto', 
                        cursor: 'pointer',
                        transform: isSpinning ? 'rotateY(360deg)' : 'rotateY(0deg)',
                        transition: 'transform 1s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)'
                        } }} />
                    
                </Box>
                <Typography level="h2" sx={{display: 'flex', justifyContent: 'center'}}>
                    Hi, I'm Lizzie Jones. Welcome to my portfolio!
                </Typography>
                <Typography level="body-lg">
                    I'm a computer science student at Northeastern University, and will be 
                    graduating in December 2025, with a concentration in Software and minor in 
                    Mathematics.
                    I am passionate about programming, creative problem solving, and building things 
                    that people enjoy using. I especially love projects that combine logic, design, and
                    a bit of math. I'm a curious, hardworking and driven individual who's always excited
                    to learn something new.
                </Typography>
                <Typography level="body-lg">
                    I am currently seeking full-time software engineering or full stack roles 
                    starting in 2026. Feel free to explore my projects and past experience. 
                    Thanks for visiting!
                </Typography>
                <Typography level="title-lg">
                    Personal Hobbies and Interests
                </Typography>
                <Typography level="body-lg">
                    Outside of coding, I love to travel! I first traveled outside of the US for 
                    my semester abroad at University of Sydney, and have now been to 7 other 
                    countries. Travel has broadened my perspective and made me curious about how 
                    people live their lives and learn in different cultures. In my day-to-day life, 
                    I enjoy reading, running, and practicing yoga. I'm also passionate about 
                    tutoring and community service. I've volunteered with several organizations, 
                    helping students grow academically and gain confidence in their abilities. 
                    Tutoring has taught me the value of patience, creativity, and has been very
                    rewarding for me.
                </Typography>
                <Typography level="title-lg">What got me into CS?</Typography>
                <Typography level="body-lg">
                    I first got interested in computer science during my freshman year of high 
                    school. My friend's dad wanted her to take a CS class, and I wanted to in the
                    same class as her, so I signed up! Although we ended up in different sections, I
                    quickly found a passion for coding and have been hooked since. I completed all 
                    the computer science courses available at my high school, including two AP 
                    classes. Since then, I’ve participated in Harvard’s CS50x puzzle days, joined 
                    hackathons, and taught coding to kids as a coding coach at Code Wiz!
                </Typography>
            </Stack>
        </div>
    );
}

export default HomePage;