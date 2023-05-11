import { RootState } from ".";
import { Job } from "../types";

export const selectedJob = (state: RootState): Job | undefined =>
  state.jobsList.job;

// export const listPage = (state: RootState): number =>
//   state.list.listPage;
