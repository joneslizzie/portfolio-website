import { useState } from 'react';
import { Button, Modal, ModalDialog, ModalClose, Box, Typography, Tooltip } from '@mui/joy';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ImageIcon from '@mui/icons-material/Image';

interface PDFModalProps {
    pdfUrl: string;
    projectTitle: string;
    slides: boolean
}

function PDFModal({ pdfUrl, projectTitle, slides }: PDFModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <Button onClick={handleOpen}
                variant="soft"
                >
                {slides ? 
                    <Tooltip variant="plain" title="slide deck"><SlideshowIcon /></Tooltip> : 
                    <Tooltip variant="plain" title="poster"><ImageIcon /></Tooltip>}
            </Button>
            
            <Modal open={isOpen} onClose={handleClose}>
                <ModalDialog
                    sx={{
                        width: '90vw',
                        height: '90vh',
                        maxWidth: '1000px',
                        padding: 2
                    }}
                >
                    <ModalClose />
                    <Typography level="h4" sx={{ mb: 2 }}>
                        {projectTitle}
                    </Typography>
                    
                    <Box sx={{ 
                        width: '100%', 
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <iframe
                            src={pdfUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            title={`${projectTitle} Poster`}
                        />
                    </Box>
                    
                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Button 
                            variant="outlined" 
                            onClick={() => window.open(pdfUrl, '_blank')}
                        >
                            Open in New Tab
                        </Button>
                    </Box>
                </ModalDialog>
            </Modal>
        </>
    );
}


export default PDFModal;