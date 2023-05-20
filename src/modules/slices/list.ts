import { createSlice } from "@reduxjs/toolkit";
import { Filters, Job } from "../../types";

export interface JobsDataState {
    filters: Filters;
    selectedjob?: Job;
    listPage: number;
    keyWord: string;
    favorites: Job[] | [];
    vacanciesData?: Job[];
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
        setVacanciesData(state: JobsDataState, action) {
            return {
                ...state,
                vacanciesData: action.payload as Job[],
            };
        },
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

            if (!state.vacanciesData) return;

            return {
                ...state,
                vacanciesData: state.vacanciesData.map(el => el.id === newFavorite.id ? { ...el, isFavorite: !el.isFavorite } : el)
            };
        },
    },
});

export const {
    setVacanciesData,
    setSelectedJob,
    setListPage,
    setFilters,
    setKeyWord,
    toggleFavorite,
} = jobsData.actions;
