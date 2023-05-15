import { RootState } from ".";
import { Job } from "../types";

export const selectedJob = (state: RootState): Job | undefined =>
  state.jobsList.selectedjob;

export const listPage = (state: RootState): number =>
  state.jobsList.listPage;
