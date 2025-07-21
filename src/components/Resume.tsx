import { Box } from "@mui/joy";

function Resume () {
    return (
        <Box sx={{ 
            width: '100vw', 
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <iframe
                src={"/pdfs/codequest-poster.pdf"}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title={`Resume`}
            />
        </Box>
    );
}

export default Resume;