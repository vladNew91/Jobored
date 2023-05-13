import { FC } from "react";
import { Job } from "../../types";
import { getSalary } from "../../helpers";
import StarIcon from '@mui/icons-material/Star';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Link, Paper, Tooltip, Typography, styled } from "@mui/material";

const Card = styled(Paper)(({ theme }) => ({
    minHeight: "137px",
    display: "flex",
    borderRadius: "12px",
    boxSizing: "border-box",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
}));

type JobItemComponentProps = {
    job: Job;
}

export const JobItemComponent: FC<JobItemComponentProps> = ({
    job,
}: JobItemComponentProps): JSX.Element => {
    return (
        <Card>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Link
                    fontSize={20}
                    color="#5E96FC"
                    fontWeight={600}
                    underline="none"
                    href={`/${job.id}`}
                >
                    {job.profession}
                </Link>

                <Tooltip
                    title="Add to favorites"
                    onClick={() => console.log("add")}
                    sx={{ cursor: "pointer" }}
                >
                    <StarIcon color="primary" />
                </Tooltip>
            </Box>

            <Box display="flex" alignItems="center">
                <Typography fontSize={16} fontWeight={600}>
                    Salary {getSalary({ from: job.payment_from, to: job.payment_to })} {job.currency}
                </Typography>

                <Box color="#7B7C88" m="0 12px">&#x2022;</Box>

                <Typography fontSize={16}>
                    {job.type_of_work.title}
                </Typography>
            </Box>

            <Box display="flex" alignItems="center">
                <FmdGoodIcon color="disabled" />

                <Typography fontSize={16}>
                    {job.town.title}
                </Typography>
            </Box>
        </Card>
    );
};
