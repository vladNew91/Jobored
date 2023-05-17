import { createSlice } from "@reduxjs/toolkit";
import { Filters, Job } from "../../types";

export interface JobsDataState {
    filters: Filters;
    selectedjob?: Job;
    listPage: number;
    keyWord: string;
}

const initialState: JobsDataState = {
    filters: {
        published: 1,
        payment_from: "",
        payment_to: "",
        catalogues: "",
    },
    listPage: 1,
    keyWord: "",
};

export const jobsData = createSlice({
    name: "jobsData",
    initialState,
    reducers: {
        setSelectedJob(state: JobsDataState, action) {
            return {
                ...state,
                selectedjob: action.payload as Job,
            };
        },
        setListPage(state: JobsDataState, action) {
            return {
                ...state,
                listPage: action.payload as number,
            };
        },
        setFilters(state: JobsDataState, action) {
            return {
                ...state,
                filters: action.payload,
            };
        },
        setKeyWord(state: JobsDataState, action) {
            return {
                ...state,
                keyWord: action.payload,
            }
        }
        // toggleFavorite(state, action) {
        //     if (!state.jobsData) return { ...state };

        //     const jobId: number = action.payload;

        //     return {
        //         ...state,
        //         jobsData: state.jobsData.map(
        //             job => job.id === jobId ? { ...job, favorite: !job.favorite } : job
        //         )
        //     };
        // },
    },
});

export const {
    setSelectedJob,
    setListPage,
    setFilters,
    setKeyWord,
} = jobsData.actions;
