import { FC, useEffect } from "react";
import { Card } from "../../components";
import { useSelector } from "react-redux";
import { useGoToPage } from "../../helpers";
import { Box, Typography } from "@mui/material";
import { JobItemContainer } from "../../containers";
import { selectedJob } from "../../modules/selectors";

export const JobPage: FC = (): JSX.Element | null => {
    const job = useSelector(selectedJob);

    const { goToPage } = useGoToPage();

    useEffect(() => {
        if (!job) goToPage("/");
    }, [job, goToPage]);

    if (!job) return null;

    return (
        <Box maxWidth={773} m="auto">
            <JobItemContainer jobPage job={job} />

            <Card>
                <Typography dangerouslySetInnerHTML={{ __html: job.vacancyRichText }} />
            </Card>
        </Box>
    );
};
