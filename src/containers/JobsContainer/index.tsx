import { FC } from "react";
import { Job } from "../../types";
import { Box  } from "@mui/material";
import { useQuery } from "react-query";
import { getDataRequest } from "../../api";
import { useNavigate } from "react-router-dom";
import { SearchContainer } from "../../containers";
import { JobItemComponent } from "../../components";

export const JobsContainer: FC = (): JSX.Element => {
    const navigate = useNavigate();

    const { data } = useQuery("vacancies", () => getDataRequest("vacancies"), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    return (
        <Box m={{ xs: "0", sm: "0 28px" }} maxWidth="773px">
            <SearchContainer />

            {data ? (
                data.objects.map((job: Job) => (
                    <JobItemComponent key={job.id} job={job} />
                ))
            ) : (
                <div>Loading...</div>
            )}
        </Box>
    );
};
