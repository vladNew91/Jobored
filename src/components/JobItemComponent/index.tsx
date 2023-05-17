import { FC } from "react";
import { Job } from "../../types";
import { getSalary } from "../../helpers";
import StarIcon from '@mui/icons-material/Star';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Paper, Typography, styled } from "@mui/material";

export const Card = styled(Paper)(({ theme }) => ({
    display: "flex",
    borderRadius: "12px",
    boxSizing: "border-box",
    flexDirection: "column",
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
}));

type JobItemComponentProps = {
    job: Job;
    jobPage?: boolean;
    handleFavorite: () => void;
    handleSelectJob: () => void;
}

export const JobItemComponent: FC<JobItemComponentProps> = ({
    job,
    jobPage,
    handleFavorite,
    handleSelectJob,
}: JobItemComponentProps): JSX.Element => {
    const favoriteIcon = <StarIcon color="primary" sx={{ cursor: "pointer" }} />;

    return (
        <Card>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Typography
                    lineHeight="unset"
                    color={jobPage ? "" : "#5E96FC"}
                    sx={{ cursor: jobPage ? "default" : "pointer" }}
                    fontSize={jobPage ? 28 : 20}
                    fontWeight={jobPage ? 700 : 600}
                    onClick={handleSelectJob}
                >
                    {job.profession}
                </Typography>

                <div
                    data-elem={`vacancy-${job.id}-shortlist-button`}
                    onClick={handleFavorite}
                >
                    {favoriteIcon}
                </div>
            </Box>

            <Box display="flex" alignItems="center" m={jobPage ? "16px 0" : "12px 0"}>
                <Typography
                    fontSize={jobPage ? 20 : 16}
                    fontWeight={jobPage ? 700 : 600}
                >
                    Salary {getSalary({ from: job.payment_from, to: job.payment_to })} {job.currency}
                </Typography>

                <Box color="#7B7C88" m="0 12px">&#x2022;</Box>

                <Typography fontSize={jobPage ? 20 : 16}>
                    {job.type_of_work.title}
                </Typography>
            </Box>

            <Box display="flex" alignItems="end">
                <FmdGoodIcon color="disabled" />

                <Typography fontSize={16}>
                    {job.town.title}
                </Typography>
            </Box>
        </Card>
    );
};
