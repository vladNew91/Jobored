import {
    useState,
    useEffect,
    useCallback,
} from 'react';
import {
    Box,
    Alert,
    Collapse,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const alertTime = 10000;

type ErrorAlertComponentProps = {
    error?: string;
}

export const ErrorAlertComponent: React.FC<ErrorAlertComponentProps> = ({
    error,
}: ErrorAlertComponentProps): JSX.Element => {
    const [open, setOpen] = useState<boolean>(true);

    const closeAlert = useCallback(() => setOpen(false), [setOpen]);

    useEffect(() => {
        setTimeout(closeAlert, alertTime);
    }, [closeAlert]);

    return (
        <Box sx={{ position: 'fixed', right: 0, bottom: 0, p: 1 }}>
            <Collapse in={open}>
                <Alert
                    variant="filled"
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={closeAlert}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {error ? error : `Connection error!`}
                </Alert>
            </Collapse>
        </Box>
    );
};
