import { FC } from "react";
import { Job } from "../../types";
import { useQuery } from "react-query";
import { getSalary } from "../../helpers";
import { getJobsRequest } from "../../api";
import { useNavigate } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export const HomePage: FC = (): JSX.Element => {
    const { data, isLoading } = useQuery("jobs", getJobsRequest, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    const navigate = useNavigate();

    return (
        <div>
            {data ? (
                <List>
                    {data.objects.map((el: Job) => (
                        <Box key={el.id}>
                            <ListItem disablePadding dense>
                                <ListItemButton onClick={() => navigate(`/${el.id}`)}>
                                    <ListItemText
                                        primary={
                                            <Typography sx={{
                                                fontWeight: 600,
                                                fontSize: "20px",
                                                lineHeight: "24px",
                                                color: blue[500],
                                            }}>
                                                {el.profession}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography sx={{
                                                fontWeight: 600,
                                                lineHeight: "20px",
                                            }}>
                                                Salary {getSalary({ from: el.payment_from, to: el.payment_to })} {el.currency}
                                            </Typography>}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Box>
                    ))}
                </List>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};
