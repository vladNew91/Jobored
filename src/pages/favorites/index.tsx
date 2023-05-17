import { FC } from "react";
import { Job } from "../../types";
import { Box } from "@mui/material";
import { NotFoundPage } from "../../pages";
import { JobItemContainer } from "../../containers";

export const FavoritesPage: FC = (): JSX.Element => {
    const favorites = localStorage.getItem("favorites");

    return (
        <>
            {!favorites ? (
                <NotFoundPage favoritesPage />
            ) : (
                <Box m={{ xs: "0", sm: "auto" }} maxWidth="773px">
                    {(JSON.parse(favorites) as Job[]).map(
                        (job: Job) => <JobItemContainer job={job} key={job.id} />
                    )}
                </Box>
            )}

        </>
    );
};
