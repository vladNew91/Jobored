import { FC } from "react";
import notFound from "../../assets/notFound.png";
import { Box, Typography, styled } from "@mui/material";
import { useGoToPage } from "../../helpers";

const NotFoundBox = styled(Box)(({
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
}));

const SearchBtn = styled("button")(({
    padding: "10px 24px",
    background: "#DEECFF",
    borderRadius: "8px",
    border: "none",
    fontFamily: "Open Sans",
    fontWeight: 600,
    fontSize: "14px",
    color: "#3B7CD3",
    cursor: "pointer",
    transition: "background ease 0.5s",
    "&:hover": {
        background: "#ffffff",
    }
}));

type NotFoundPageProps = {
    favoritesPage?: boolean;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({
    favoritesPage,
}: NotFoundPageProps): JSX.Element => {
    const { goToPage } = useGoToPage();

    return (
        <Box height="100%" position="relative">
            <NotFoundBox>
                <img width={240} src={notFound} alt="empty" loading="lazy" />

                <Typography fontWeight={700} m="32px 0" fontSize={24}>
                    Oops, nothing here yet!
                </Typography>

                {favoritesPage && (
                    <SearchBtn onClick={() => goToPage("/")}>
                        Search Vacancies
                    </SearchBtn>
                )}
            </NotFoundBox>
        </Box>
    );
};
