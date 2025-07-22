import { Box, Button, Input, Stack, Typography } from "@mui/joy";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ChangeEvent, FormEvent, useState } from "react";

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const formDataToSend = new FormData(form);

        const params = new URLSearchParams();
        formDataToSend.forEach((value, key) => {
            params.append(key, value.toString());
        });
        
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
        })
        .then(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            alert('Error sending message. Please try again.');
        });
    };
    
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
            <Box component="form" name="contact" method="POST" data-netlify="true" 
                onSubmit={handleSubmit}
            >
                <Typography level="title-lg">
                    Name
                </Typography>
                <Input 
                    placeholder={formData.name}
                    onChange={handleChange}
                    required
                /> <br />
                <Typography level="title-lg">
                    Email Address
                </Typography>
                <Input 
                    placeholder={formData.email}
                    onChange={handleChange}
                    required
                /> <br />
                <Typography level="title-lg">
                    Message
                </Typography>
                <Input 
                    placeholder={formData.message}
                    onChange={handleChange}
                    required
                /> <br />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="submit">Submit</Button>
                </div>
            </Box>
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
        </div>
    )
}

export default ContactMe;