import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Industry } from '../../types';
import { getDataRequest } from '../../api';
import { ErrorAlertComponent } from '../../components';
import { Box, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';

export const SelectIndustryContainer: FC = (): JSX.Element => {
  const [industry, setIndustry] = useState<string>("");

  const { data, error, isLoading } = useQuery(
    "catalogues",
    () => getDataRequest("catalogues"),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const handleChangeIndustry = (event: SelectChangeEvent) => {
    setIndustry(event.target.value as string);
  };

  return (
    <>
      <Box width="100%" mt={1}>
        <FormControl fullWidth>
          <InputLabel size="small" id="select-label">Select industry</InputLabel>

          <Select
            size="small"
            value={industry}
            labelId="select-label"
            label="Select industry"
            onChange={handleChangeIndustry}
            disabled={isLoading}
          >
            {data && (data as Industry[]).map((el: Industry) => (
              <MenuItem
                key={el.key}
                value={el.title_rus}
              >
                {el.title_rus}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {error && <ErrorAlertComponent />}
    </>
  );
};
