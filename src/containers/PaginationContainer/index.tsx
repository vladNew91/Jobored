import { FC } from "react";
import { useQuery } from "react-query";
import { JobsData } from "../../types";
import { getDataRequest } from "../../api";
import { Pagination, Skeleton } from "@mui/material";

export const PaginationContainer: FC = (): JSX.Element => {
    const { data } = useQuery(
        "vacancies",
        () => getDataRequest("vacancies"),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    if (!data) return (
        <Skeleton variant="text" sx={{ fontSize: 50 }} width={150} />
    );

    const count: number = (data as JobsData).objects.length;

    return (
        <Pagination
            count={count}
            color="primary"
            shape="rounded"
            siblingCount={1}
            variant="outlined"
        />
    );
};
