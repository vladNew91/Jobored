import { FC, memo, useCallback, useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { NotFoundPage } from "../../pages";
import { Job } from "../../types";
import { setListPage, setVacanciesData } from "../../modules/slices";
import { JobItemContainer } from "../../containers";
import { useDispatch, useSelector } from "react-redux";
import { listPage, vacanciesData } from "../../modules/selectors";
import { ErrorAlertComponent, JobsSkeletonComponent, PaginationComponent } from "../../components";
import { useGetVacanciesQuery } from "../../modules";

const jobsOnPage = 4;

export const JobsContainer: FC = memo((): JSX.Element => {
    const page: number = useSelector(listPage);
    const vacancies: Job[] | undefined = useSelector(vacanciesData);

    const lastElement: number = jobsOnPage * page;
    const firstElement: number = jobsOnPage * page - jobsOnPage;

    const { data, error } = useGetVacanciesQuery();

    const [state, setState] = useState(data);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!data) return;

        if (JSON.stringify(data) !== JSON.stringify(state)) {
            dispatch(setVacanciesData(data.objects));
            setState(data);
        }
    }, [data, state, dispatch]);

    const handleChangePage = useCallback((
        e: React.ChangeEvent<unknown>,
        page: number,
    ) => {
        dispatch(setListPage(page));
    }, [dispatch]);

    return (
        <>
            <>
                {!vacancies ? (
                    <JobsSkeletonComponent />
                ) : (
                    !vacancies.length ? <NotFoundPage /> : (
                        vacancies.slice(firstElement, lastElement).map(
                            (job: Job, i: number) => <div key={i}><JobItemContainer job={job} /></div>
                        ))
                )}

                {!vacancies ? (
                    <Skeleton variant="text" sx={{ fontSize: 50, margin: "auto" }} width={150} />
                ) : (
                    <PaginationComponent
                        page={page}
                        jobs={vacancies}
                        handleChangePage={handleChangePage}
                    />
                )}
            </>

            {error && <ErrorAlertComponent />}
        </>
    );
});
