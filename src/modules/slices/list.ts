import { createSlice } from "@reduxjs/toolkit";
import { Job } from "../../types";

export interface ListState {
    selectedjob?: Job;
    listPage: number;
}

const initialState: ListState = {
    listPage: 1,
};

export const jobsList = createSlice({
    name: "jobsList",
    initialState,
    reducers: {
        setSelectedJob(state: ListState, action) {
            return {
                ...state,
                selectedjob: action.payload,
            };
        },
        setListPage(state: ListState, action) {
            return {
                ...state,
                listPage: action.payload,
            };
        },
    },
});

export const { setSelectedJob, setListPage } = jobsList.actions;
