import { Button, Input, Stack, Typography } from "@mui/joy";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function ContactMe() {
    return (
        <div className="main-content">
            <Stack direction={"column"} spacing={1} 
                sx={{justifyContent: "center", alignItems: "center"}}
            >
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <EmailIcon fontSize="large" />
                    <Typography level="h2">Contact Me</Typography>
                </Stack>
                <Typography level='body-lg'>jonesmlizzie@gmail.com</Typography>
                <Typography>
                    Feel free to contact me with any inquires or questions!
                </Typography>
            </Stack>
            <Stack direction={"column"} spacing={1}>
                <Typography level="title-lg">
                    Name
                </Typography>
                <Input placeholder="" />
                <Typography level="title-lg">
                    Email Address
                </Typography>
                <Input placeholder="" />
                <Typography level="title-lg">
                    Message
                </Typography>
                <Input placeholder="" />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button>Submit</Button>
                </div>
                <Stack direction={"row"} sx={{justifyContent: "center", alignItems: "center"}}>
                    <Button 
                        variant="plain" size="sm"
                        onClick={() =>
                            window.open("https://www.linkedin.com/in/elizabeth-jones-2o26/")}>
                            <LinkedInIcon />
                    </Button>
                    <Button
                        variant="plain" size="sm"
                        onClick={() =>
                            window.open("https://github.com/joneslizzie")}>
                            <GitHubIcon />
                    </Button>
                </Stack>
            </Stack>
        </div>
    )
}

export default ContactMe;