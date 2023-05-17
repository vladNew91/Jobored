import { FC } from "react";
import { Job } from "../../types";
import { Box, Pagination } from "@mui/material";

const jobsOnPage = 4;

type PaginationComponentProps = {
    page: number;
    jobs: Job[];
    handleChangePage: (e: React.ChangeEvent<unknown>, page: number) => void
}

export const PaginationComponent: FC<PaginationComponentProps> = ({
    page,
    jobs,
    handleChangePage,
}: PaginationComponentProps): JSX.Element | null => {
    if (jobs.length < jobsOnPage) return null;

    return (
        <Box
            mt="40px"
            display="flex"
            justifyContent="center"
        >
            <Pagination
                page={page}
                color="primary"
                shape="rounded"
                siblingCount={1}
                variant="outlined"
                count={jobs.length / jobsOnPage}
                onChange={handleChangePage}
            />
        </Box>
    );
};
