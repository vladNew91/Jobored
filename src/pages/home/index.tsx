import { FC } from "react";
import { Box } from "@mui/material";
import { getAccessToken } from "../../api";
import { FilterContainer, JobsContainer, SearchContainer } from "../../containers";

export const HomePage: FC = (): JSX.Element => {
    const isAuthorized: boolean = !!sessionStorage.getItem("isAuth");

    if (!isAuthorized) getAccessToken();

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
        >
            <FilterContainer />

            <Box m={{ xs: "0", sm: "0 28px" }} width="773px">
                <SearchContainer />
                <JobsContainer />
            </Box>
        </Box>
    );
};
