import { createSlice } from "@reduxjs/toolkit";
import { Filters, Job } from "../../types";

export interface JobsDataState {
    filters: Filters;
    selectedjob?: Job;
    listPage: number;
    keyWord: string;
    favorites: Job[] | [];
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
    favorites: [],
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
                filters: action.payload as Filters,
            };
        },
        setKeyWord(state: JobsDataState, action) {
            return {
                ...state,
                keyWord: action.payload as string,
            };
        },
        toggleFavorite(state, action) {
            const newFavorite = action.payload as Job;

            const isNewfavoriteExist: boolean = state.favorites.some(el => el.id === newFavorite.id);

            return {
                ...state,
                favorites: isNewfavoriteExist ? (
                    //  delete favorite
                    state.favorites.filter(el => el.id !== newFavorite.id)
                ) : (
                    //  add favorite
                    [...state.favorites, newFavorite]
                ),
            };
        },
    },
});

export const {
    setSelectedJob,
    setListPage,
    setFilters,
    setKeyWord,
    toggleFavorite,
} = jobsData.actions;
