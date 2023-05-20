import { FC, useCallback } from "react";
import { Job } from "../../types";
import { Box } from "@mui/material";
import { NotFoundPage } from "../../pages";
import { setListPage } from "../../modules/slices";
import { JobItemContainer } from "../../containers";
import { useDispatch, useSelector } from "react-redux";
import { PaginationComponent } from "../../components";
import { listPage, vacanciesData } from "../../modules/selectors";

const jobsOnPage = 4;

export const FavoritesPage: FC = (): JSX.Element => {
    const vacancies = useSelector(vacanciesData);
    const page: number = useSelector(listPage);    

    const favorites = vacancies?.filter(el => el.isFavorite);

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
            {!favorites?.length ? (
                <NotFoundPage favoritesPage />
            ) : (
                <Box m={{ xs: "0", sm: "auto" }} maxWidth="773px">
                    {favorites.slice(firstElement, lastElement).map(
                        (job: Job) => <JobItemContainer job={job} key={job.id} />
                    )}
                </Box>
            )}

            {favorites?.length ? (
                <PaginationComponent
                    page={page}
                    jobs={favorites}
                    handleChangePage={handleChangePage}
                />) : null
            }
        </>
    );
};
