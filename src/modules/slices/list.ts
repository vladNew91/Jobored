import { createSlice } from "@reduxjs/toolkit";
import { Job } from "../../types";

export interface ListState {
    job?: Job;
    listPage: number;
}

const initialState: ListState = {
    job: undefined,
    listPage: 1,
};

export const jobsList = createSlice({
    name: "jobsList",
    initialState,
    reducers: {
        setListitem(state: ListState, action) {
            return {
                ...state,
                listitem: action.payload,
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

export const { setListitem, setListPage } = jobsList.actions;
