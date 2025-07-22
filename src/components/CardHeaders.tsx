import { Dispatch, SetStateAction, useState } from "react";
import { Button, Stack, Typography } from "@mui/joy";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

function CardHeaders({title, dates, setCardSize} : {
    title: string, 
    dates: string, 
    setCardSize: Dispatch<SetStateAction<string>>,
}) {
    const [full, setFull] = useState<boolean>(false);
    const toggleCardSize = () => {
        setFull(!full)
        if(full)
            setCardSize('93vw')
        else
            setCardSize('48vw')
    }

    return (
        <div>
            <Stack direction={"row"}   
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
            <Typography level="title-lg">
                {title}
            </Typography>
            { full ? 
            <Button variant="plain" color="neutral" onClick={(toggleCardSize)}>
                <OpenInFullIcon />
            </Button> : 
            <Button variant="plain" color="neutral" onClick={(toggleCardSize)}>
                <CloseFullscreenIcon />
            </Button>}
            </Stack>
            <Typography level="body-sm">{dates}</Typography>
        </div>
    );
}

export default CardHeaders; 
