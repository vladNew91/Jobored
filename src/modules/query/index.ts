import { QueryClient, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Filters } from "../../types";
import { searchedKeyWord, selectFilters } from "../selectors";
import { searchVacancies } from "../../api";

export const queryClient = new QueryClient();

export const useGetVacanciesQuery = () => {
    const keyWord: string = useSelector(searchedKeyWord);
    const filters: Filters = useSelector(selectFilters);

    const { data, error } = useQuery(
        [
            "jobs",
            {
                keyWord: keyWord,
                from: filters.payment_from,
                to: filters.payment_to,
                catalogues: filters.catalogues,
            }
        ],
        searchVacancies,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    return { data, error };
};
