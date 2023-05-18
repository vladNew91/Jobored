import { FC, memo, useCallback } from "react";
import { useQuery } from "react-query";
import { Skeleton } from "@mui/material";
import { NotFoundPage } from "../../pages";
import { Filters, Job } from "../../types";
import { searchVacancies } from "../../api";
import { setListPage } from "../../modules/slices";
import { JobItemContainer } from "../../containers";
import { useDispatch, useSelector } from "react-redux";
import { listPage, searchedKeyWord, selectFilters } from "../../modules/selectors";
import { ErrorAlertComponent, JobsSkeletonComponent, PaginationComponent } from "../../components";

const jobsOnPage = 4;

export const JobsContainer: FC = memo((): JSX.Element => {
    const page: number = useSelector(listPage);
    const keyWord: string = useSelector(searchedKeyWord);
    const filters: Filters = useSelector(selectFilters);

    const lastElement: number = jobsOnPage * page;
    const firstElement: number = jobsOnPage * page - jobsOnPage;

    const { data: jobsData, error } = useQuery(
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

    const dispatch = useDispatch();

    const handleChangePage = useCallback((
        e: React.ChangeEvent<unknown>,
        page: number,
    ) => {
        dispatch(setListPage(page));
    }, [dispatch]);

    return (
        <>
            <>
                {!jobsData ? (
                    <JobsSkeletonComponent />
                ) : (
                    !jobsData.objects.length ? <NotFoundPage /> : (
                        jobsData.objects.slice(firstElement, lastElement).map(
                            (job: Job, i: number) => <div key={i}><JobItemContainer job={job} /></div>
                        ))
                )}

                {!jobsData ? (
                    <Skeleton variant="text" sx={{ fontSize: 50, margin: "auto" }} width={150} />
                ) : (
                    <PaginationComponent
                        page={page}
                        jobs={jobsData.objects}
                        handleChangePage={handleChangePage}
                    />
                )}
            </>

            {error && <ErrorAlertComponent />}
        </>
    );
});
