import {
    FC,
    memo,
    useCallback,
} from "react";
import { Job } from "../../types";
import { useDispatch } from "react-redux";
import { useGoToPage } from "../../helpers";
import { JobItemComponent } from "../../components";
import { setSelectedJob, toggleFavorite } from "../../modules/slices";

type JobItemContainerProps = {
    job: Job;
    jobPage?: boolean;
}

export const JobItemContainer: FC<JobItemContainerProps> = memo(({
    job,
    jobPage,
}: JobItemContainerProps): JSX.Element | null => {
    const dispatch = useDispatch();
    const { goToPage } = useGoToPage();

    const handleFavorite = useCallback((job: Job) => {
        dispatch(toggleFavorite(job));
    }, [dispatch]);

    const handleSelectJob = useCallback((job: Job) => {
        if (jobPage) return;

        dispatch(setSelectedJob(job));
        goToPage(`/${job.id}`);
    }, [dispatch, goToPage, jobPage]);

    if (!job) return null;

    return (
        <div data-elem={`vacancy-${job.id}`}>
            <JobItemComponent
                job={job}
                key={job.id}
                jobPage={jobPage}
                handleFavorite={() => handleFavorite(job)}
                handleSelectJob={() => handleSelectJob(job)}
            />
        </div>
    );
});
