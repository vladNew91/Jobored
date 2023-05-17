import { FC, memo, useCallback } from "react";
import { useQuery } from "react-query";
import { NotFoundPage } from "../../pages";
import { Filters, Job } from "../../types";
import { searchVacancies } from "../../api";
import { Box, Skeleton } from "@mui/material";
import { setListPage } from "../../modules/slices";
import { useDispatch, useSelector } from "react-redux";
import { JobItemContainer, SearchContainer } from "../../containers";
import { listPage, searchedKeyWord, selectFilters } from "../../modules/selectors";
import { ErrorAlertComponent, JobsSkeletonComponent, PaginationComponent } from "../../components";

const jobsOnPage = 4;

export const JobsContainer: FC = memo((): JSX.Element => {
    const page: number = useSelector(listPage);
    const keyWord: string = useSelector(searchedKeyWord);
    const filters: Filters = useSelector(selectFilters);

    const { data: jobs, error } = useQuery(
        [
            "jobs",
            {
                keyWord: keyWord,
                from: filters.payment_from,
                to: filters.payment_to,
                catalogues: filters.catalogues,
            }
        ],
        searchVacancies,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    const lastElement: number = jobsOnPage * page;
    const firstElement: number = jobsOnPage * page - jobsOnPage;

    const dispatch = useDispatch();

    const handleChangePage = useCallback((
        e: React.ChangeEvent<unknown>,
        page: number,
    ) => {
        dispatch(setListPage(page));
    }, [dispatch]);

    return (
        <>
            <Box m={{ xs: "0", sm: "0 28px" }} width="773px">
                <SearchContainer />

                {!jobs ? (
                    <JobsSkeletonComponent />
                ) : (
                    !jobs.objects.length ? <NotFoundPage /> : (
                        jobs.objects.slice(firstElement, lastElement).map(
                            (job: Job) => <div key={job.id}><JobItemContainer job={job} /></div>
                        ))
                )}

                {!jobs ? (
                    <Skeleton variant="text" sx={{ fontSize: 50, margin: "auto" }} width={150} />
                ) : (
                    <PaginationComponent
                        page={page}
                        jobs={jobs.objects}
                        handleChangePage={handleChangePage}
                    />
                )}
            </Box>

            {error && <ErrorAlertComponent />}
        </>
    );
});
