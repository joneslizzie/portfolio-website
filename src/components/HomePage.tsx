import { Avatar, Box, Typography } from "@mui/joy";
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
                <Typography>Hi I'm Lizzie Jones.</Typography>
            </Box>
            Hi, I'm Lizzie Jones.
        </div>
    );
}

export default HomePage;