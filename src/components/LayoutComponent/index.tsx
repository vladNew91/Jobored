import {
    FC,
    useState,
    useCallback,
} from "react";
import {
    Box,
    styled,
    AppBar,
    Button,
    Toolbar,
    Typography,
    IconButton,
} from '@mui/material';
import logo from '../../assets/logo.png';
import { blue } from "@mui/material/colors";
import MoreIcon from '@mui/icons-material/MoreVert';
import { MobileMenuComponent } from "../../components";
import { useCurrentPath, useGoToPage } from "../../helpers";

const Children = styled("div")(({
    height: "calc(100vh - 64px)",
    overflowY: "auto",
    padding: "40px 0",
    boxSizing: "border-box",
}));

type LayoutComponentProps = {
    children: React.ReactNode;
}

export const LayoutComponent: FC<LayoutComponentProps> = ({
    children,
}: LayoutComponentProps): JSX.Element => {
    const path = useCurrentPath();
    const { goToPage } = useGoToPage();

    const [moreEl, setMoreEl] = useState<null | HTMLElement>(null);

    const isMenuOpen: boolean = !!moreEl;

    const handleMenuOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setMoreEl(event.currentTarget);
    }, []);

    const handleMenuClose = useCallback(() => setMoreEl(null), []);

    const handleSelectMenuItem = useCallback((path: string) => {
        goToPage(path);
        handleMenuClose();
    }, [goToPage, handleMenuClose]);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="inherit" elevation={0}>
                    <Toolbar>
                        <IconButton onClick={() => goToPage("/")}>
                            <img src={logo} alt="logo" />
                        </IconButton>

                        <Typography
                            component="div"
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: "24px",
                                lineHeight: "36px",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Jobored
                        </Typography>

                        <Box
                            m="auto"
                            width={275}
                            display={{ xs: 'none', sm: 'flex' }}
                            justifyContent="space-between"
                        >
                            <Button
                                variant="text"
                                sx={{
                                    fontWeight: path !== "/favorites" ? 500 : 400,
                                    color: path !== "/favorites" ? blue[500] : "inherit",
                                }}
                                onClick={() => goToPage("/")}
                            >
                                Search vacancies
                            </Button>

                            <Button
                                variant="text"
                                sx={{
                                    fontWeight: path === "/favorites" ? 500 : 400,
                                    color: path === "/favorites" ? blue[500] : "inherit",
                                }}
                                onClick={() => goToPage("/favorites")}
                            >
                                Favorites
                            </Button>
                        </Box>

                        <Box flexGrow={1} display={{ xs: 'flex', sm: 'none' }}></Box>

                        <Box display={{ xs: 'flex', sm: 'none' }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-haspopup="true"
                                onClick={handleMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>

                <MobileMenuComponent
                    moreEl={moreEl}
                    isMenuOpen={isMenuOpen}
                    handleMenuClose={handleMenuClose}
                    handleSelectMenuItem={handleSelectMenuItem}
                />
            </Box >

            <Children>{children}</Children>
        </>
    );
};
