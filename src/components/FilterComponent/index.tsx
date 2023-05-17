import { FC } from "react";
import { grey } from "@mui/material/colors";
import { Filters, Industry } from "../../types";
import CloseIcon from '@mui/icons-material/Close';
import { ErrorAlertComponent } from "../../components";
import { SelectIndustryComponent } from "../../containers";
import { Box, Button, Paper, SelectChangeEvent, TextField, Typography, styled } from "@mui/material";

const Article = styled("span")(({
    fontWeight: 700,
}));

type FilterComponentProps = {
    data: Industry[],
    error: unknown,
    indystry: string;
    allFilters: Filters;
    handleChangeTo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeFrom: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleApplyFilters: () => void;
    handleChangeIndustry: (event: SelectChangeEvent) => void;
    handleResetAllFilters: () => void;
    handleChangeCatalogues: (key: number) => void;
}

export const FilterComponent: FC<FilterComponentProps> = ({
    data,
    error,
    indystry,
    allFilters,
    handleChangeTo,
    handleChangeFrom,
    handleApplyFilters,
    handleChangeIndustry,
    handleResetAllFilters,
    handleChangeCatalogues,
}: FilterComponentProps): JSX.Element => {
    return (
        <>
            <Box width={{ xs: "100%", sm: "315px" }} mb={2}>
                <Paper
                    sx={{
                        p: "20px",
                        boxSizing: "border-box",
                    }}
                >
                    <Box
                        mb={4}
                        display="flex"
                        justifyContent="space-between"
                    >
                        <Article style={{ fontSize: "20px" }}>Filters</Article>

                        <Typography
                            sx={{
                                display: "flex",
                                fontWeight: 500,
                                fontSize: "14px",
                                color: grey[500],
                                alignItems: "center",
                            }}
                        >
                            <span>Reset all</span>

                            <CloseIcon
                                sx={{ width: "16px", cursor: "pointer" }}
                                onClick={handleResetAllFilters}
                            />
                        </Typography>
                    </Box>

                    <Box mb="20px">
                        <Article style={{ fontSize: "16px" }}>Industry</Article>

                        <SelectIndustryComponent
                            data={data}
                            indystry={indystry}
                            handleChangeIndustry={handleChangeIndustry}
                            handleChangeCatalogues={handleChangeCatalogues}
                        />
                    </Box>

                    <Box mb="20px">
                        <Article style={{ fontSize: "16px" }}>Salary</Article>

                        <div data-elem="salary-from-input">
                            <Box mt={1}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="From"
                                    type="number"
                                    value={allFilters.payment_from}
                                    onChange={handleChangeFrom}
                                />
                            </Box>
                        </div>

                        <div data-elem="salary-to-input">
                            <Box mt={1}>
                                <TextField
                                    fullWidth
                                    label="To"
                                    size="small"
                                    type="number"
                                    value={allFilters.payment_to}
                                    onChange={handleChangeTo}
                                />
                            </Box>
                        </div>
                    </Box>

                    <div data-elem="search-button">
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleApplyFilters}
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                background: "#5E96FC",
                            }}
                        >
                            Apply
                        </Button>
                    </div>
                </Paper>
            </Box>

            {error && <ErrorAlertComponent />}
        </>
    );
};
