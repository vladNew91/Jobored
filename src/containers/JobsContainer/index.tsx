import { FC } from "react";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { getDataRequest } from "../../api";
import { Job, JobsData } from "../../types";
import { PaginationContainer, SearchContainer } from "../../containers";
import { JobItemComponent, JobsSkeletonComponent } from "../../components";

export const JobsContainer: FC = (): JSX.Element => {
    const { data } = useQuery(
        "vacancies",
        () => getDataRequest("vacancies"),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    return (
        <Box m={{ xs: "0", sm: "0 28px" }} width="773px">
            <SearchContainer />

            {data ? (
                (data as JobsData).objects.map((job: Job) => (
                    <JobItemComponent key={job.id} job={job} />
                ))
            ) : (
                <JobsSkeletonComponent />
            )}

            <Box mt="40px" display="flex" justifyContent="center">
                <PaginationContainer />
            </Box>
        </Box>
    );
};
