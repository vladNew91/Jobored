import { FC } from "react";
import { Card } from "../../components";
import { Box, Skeleton } from "@mui/material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export const JobsSkeletonComponent: FC = (): JSX.Element => {
    return (
        <Box>
            {[1, 2, 3, 4].map((i: number) => {
                return (
                    <Card key={i}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <Skeleton variant="text" width="60%" sx={{ fontSize: "20px" }} />
                            <Skeleton variant="circular" width={24} height={24} />
                        </Box>

                        <Box display="flex" alignItems="center">
                            <Skeleton variant="text" width="10%" />
                            <Box color="#7B7C88" m="0 12px">&#x2022;</Box>
                            <Skeleton variant="text" width="20%" />
                        </Box>

                        <Box display="flex" alignItems="center">
                            <FmdGoodIcon color="disabled" />
                            <Skeleton variant="text" width="20%" />
                        </Box>
                    </Card>
                )
            })}
        </Box>
    );
};
