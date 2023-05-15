import { FC } from "react";
import { Box } from "@mui/material";
import { getAccessToken } from "../../api";
import { JobsContainer } from "../../containers";
import { FilterComponent } from "../../components";

export const HomePage: FC = (): JSX.Element => {
    const isAuthorized: boolean = !!localStorage.getItem("isAuth");

    if (!isAuthorized) getAccessToken();

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
        >
            <FilterComponent />
            <JobsContainer />
        </Box>
    );
};
