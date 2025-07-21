import { useNavigate } from "react-router-dom";
import { Avatar, Button, ButtonGroup, Stack, Typography } from "@mui/joy";
import myImg from '../imgs/lizzie-jones.jpeg';
import { useState } from "react";


function Menu() {
    const [currentPage, setCurrentPage] = useState<string>('/');

    const navigate = useNavigate();

    const handleNavigation = (path: string) =>{
        setCurrentPage(path);
        navigate(path);
    }

    return (
        <Stack direction="row"
            spacing={2}
            sx={{
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Lizzie Jones" src={myImg} />
                <Typography level="h3" sx={{display: 'flex', alignItems: 'center'}}>LJ</Typography>
            </Stack>
            <ButtonGroup variant="plain">
                
                <Button 
                    onClick={() => handleNavigation('/')}
                    variant={currentPage === '/' ? "soft" : "plain"}
                >
                        About Me
                </Button>
                <Button 
                    onClick={() => handleNavigation('/projects')}
                    variant={currentPage === '/projects' ? "soft" : "plain"}
                >
                    Projects
                </Button>
                <Button 
                    onClick={() => handleNavigation('/experience')}
                    variant={currentPage === '/experience' ? "soft" : "plain"}
                >
                    Experience
                </Button>
                <Button 
                    onClick={() => handleNavigation('/resume')}
                    variant={currentPage === '/resume' ? "soft" : "plain"}
                >
                    Resume
                </Button>
                <Button
                    onClick={() => handleNavigation('/contact')}
                    variant={currentPage === '/contact' ? "soft" : "plain"}
                >
                    Contact
                </Button>
            </ButtonGroup>
        </Stack>
    );
}

export default Menu;