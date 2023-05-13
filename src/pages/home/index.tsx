import { FC } from "react";
import { Box } from "@mui/material";
import { FilterComponent } from "../../components";
import { JobsContainer } from "../../containers";

export const HomePage: FC = (): JSX.Element => {
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
