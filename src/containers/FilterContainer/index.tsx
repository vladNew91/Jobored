import React, { FC, memo, useCallback, useState } from "react";
import { useQuery } from "react-query";
import { getCatalogues } from "../../api";
import { Filters, Industry } from "../../types";
import { SelectChangeEvent } from "@mui/material";
import { setFilters } from "../../modules/slices";
import { FilterComponent } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../modules/selectors";

const defFilters = {
    published: 1,
    keyword: "",
    payment_from: "",
    payment_to: "",
    catalogues: "",
};

export const FilterContainer: FC = memo((): JSX.Element => {
    const filters = useSelector(selectFilters);

    const [allFilters, setAllFilters] = useState<Filters>(filters);
    const [indystry, setIndystry] = useState<string>("");

    const { data, error } = useQuery(
        "catalogues",
        getCatalogues,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );
    

    const dispatch = useDispatch();

    const handleChangeIndustry = useCallback((event: SelectChangeEvent) => {
        setIndystry(event.target.value);
    }, []);

    const handleChangeCatalogues = useCallback((key: number) => {
        setAllFilters({ ...allFilters, catalogues: `${key}` });
    }, [allFilters]);

    const handleChangeFrom = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAllFilters({ ...allFilters, payment_from: `${e.target.value}` });
    }, [allFilters]);

    const handleChangeTo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAllFilters({ ...allFilters, payment_to: `${e.target.value}` });
    }, [allFilters]);

    const handleResetAllFilters = useCallback(() => {
        setIndystry("");
        setAllFilters(defFilters);
    }, []);

    const handleApplyFilters = useCallback(() => {
        dispatch(setFilters(allFilters));
    }, [dispatch, allFilters]);

    return (
        <FilterComponent
            data={data as Industry[]}
            error={error}
            indystry={indystry}
            allFilters={allFilters}
            handleChangeTo={handleChangeTo}
            handleChangeFrom={handleChangeFrom}
            handleApplyFilters={handleApplyFilters}
            handleChangeIndustry={handleChangeIndustry}
            handleResetAllFilters={handleResetAllFilters}
            handleChangeCatalogues={handleChangeCatalogues}
        />
    );
});
