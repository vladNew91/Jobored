import { RootState } from ".";
import { Filters, Job } from "../types";

export const selectedJob = (state: RootState): Job | undefined =>
  state.jobs.selectedjob;

export const listPage = (state: RootState): number =>
  state.jobs.listPage;

export const searchedKeyWord = (state: RootState): string =>
  state.jobs.keyWord;

export const selectFilters = (state: RootState): Filters =>
  state.jobs.filters;

export const selectFavorites = (state: RootState): Job[] | undefined =>
  state.jobs.favorites;
