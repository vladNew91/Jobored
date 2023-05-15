import { FC, useCallback } from "react";
import { useQuery } from "react-query";
import { JobsData } from "../../types";
import { getDataRequest } from "../../api";
import { Pagination, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { listPage } from "../../modules/selectors";
import { setListPage } from "../../modules/slices";

const jobsOnPage = 4;

export const PaginationContainer: FC = (): JSX.Element | null => {
    const { data } = useQuery(
        "vacancies",
        () => getDataRequest("vacancies"),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    const page: number = useSelector(listPage);
    const count: number = (data as JobsData)?.objects.length / jobsOnPage;

    const dispatch = useDispatch();

    const handleChangePage = useCallback((
        e: React.ChangeEvent<unknown>,
        page: number,
    ) => {
        dispatch(setListPage(page));
    }, [dispatch]);

    if (!data) return (
        <Skeleton variant="text" sx={{ fontSize: 50 }} width={150} />
    );

    if ((data as JobsData).objects.length < jobsOnPage) return null;

    return (
        <Pagination
            page={page}
            count={count}
            color="primary"
            shape="rounded"
            siblingCount={1}
            variant="outlined"
            onChange={handleChangePage}
        />
    );
};
