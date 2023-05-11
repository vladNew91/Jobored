import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontSize: 16,
        fontFamily: [
            'Inter',
            'sans-serif',
        ].join(','),
        button: {
            textTransform: 'none'
        },
    },
});
