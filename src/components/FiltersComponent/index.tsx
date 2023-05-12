import { FC } from "react";
import { styled } from "styled-components";
import { grey } from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';
import { SelectIndustryContainer } from "../../containers";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const Article = styled("span")(({
    fontWeight: 700,
}));

export const FilterComponent: FC = (): JSX.Element => {
    return (
        <Box width={{ xs: "100%", sm: "315px" }}>
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
                        <CloseIcon sx={{ width: "16px", cursor: "pointer" }} />
                    </Typography>
                </Box>

                <Box mb="20px">
                    <Article style={{ fontSize: "16px" }}>Industry</Article>
                    <SelectIndustryContainer />
                </Box>

                <Box mb="20px">
                    <Article style={{ fontSize: "16px" }}>Salary</Article>

                    <Box mt={1}>
                        <TextField
                            fullWidth
                            size="small"
                            label="From"
                            type="number"
                        />
                    </Box>

                    <Box mt={1}>
                        <TextField
                            fullWidth
                            label="To"
                            size="small"
                            type="number"
                        />
                    </Box>
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                    }}
                >
                    Apply
                </Button>
            </Paper>
        </Box>
    );
};
