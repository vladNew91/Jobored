import {
    FC,
    useCallback,
} from "react";
import { Job } from "../../types";
import { useDispatch } from "react-redux";
import { useGoToPage } from "../../helpers";
import { JobItemComponent } from "../../components";
import { setSelectedJob } from "../../modules/slices";

type JobItemContainerProps = {
    job: Job;
    jobPage?: boolean;
}

export const JobItemContainer: FC<JobItemContainerProps> = ({
    job,
    jobPage,
}: JobItemContainerProps): JSX.Element | null => {
    const dispatch = useDispatch();
    const { goToPage } = useGoToPage();

    const handleFavorite = useCallback(() => { }, []);

    const handleSelectJob = useCallback((job: Job) => {
        if (jobPage) return;

        dispatch(setSelectedJob(job));
        goToPage(`/${job.id}`);
    }, [dispatch, goToPage, jobPage]);

    if (!job) return null;

    return (
        <JobItemComponent
            job={job}
            key={job.id}
            jobPage={jobPage}
            handleFavorite={handleFavorite}
            handleSelectJob={() => handleSelectJob(job)}
        />
    );
};
