import { useNavigate } from "react-router-dom";
import { Avatar, Button, ButtonGroup, Stack, Typography } from "@mui/joy";
import myImg from '../imgs/lizzie-jones.jpeg';


function Menu() {
    const navigate = useNavigate();

    const handleNavigation = (path: string) =>{
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
                <Typography level="h3">Lizzie Jones</Typography>
            </Stack>
            <ButtonGroup variant="plain">
                
                <Button onClick={() => handleNavigation('/')}>About Me</Button>
                <Button onClick={() => handleNavigation('/projects')}>Projects</Button>
                <Button onClick={() => handleNavigation('/experience')}>Experience</Button>
                <Button onClick={() => handleNavigation('/resume')}>Resume</Button>
                <Button>Contact</Button>
            </ButtonGroup>
        </Stack>
    );
}

export default Menu;