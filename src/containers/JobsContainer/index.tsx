import { FC } from "react";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getDataRequest } from "../../api";
import { Job, JobsData } from "../../types";
import { listPage } from "../../modules/selectors";
import { JobsSkeletonComponent } from "../../components";
import { JobItemContainer, PaginationContainer, SearchContainer } from "../../containers";

const jobsOnPage = 4;

export const JobsContainer: FC = (): JSX.Element => {
    const { data } = useQuery(
        "vacancies",
        () => getDataRequest("vacancies"),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    const page: number = useSelector(listPage);

    const firstElement: number = jobsOnPage * page - jobsOnPage;
    const lastElement: number = jobsOnPage * page;

    const slicesJobs: Job[] = (data as JobsData)?.objects.slice(firstElement, lastElement);

    return (
        <Box m={{ xs: "0", sm: "0 28px" }} width="773px">
            <SearchContainer />

            {!data ? (
                <JobsSkeletonComponent />
            ) : (
                slicesJobs.map((job: Job) => <JobItemContainer job={job} key={job.id} />)
            )}

            <Box
                mt="40px"
                display="flex"
                justifyContent="center"
            >
                <PaginationContainer />
            </Box>
        </Box>
    );
};
