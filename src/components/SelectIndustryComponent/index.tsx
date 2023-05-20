import { FC } from 'react';
import { Industry } from '../../types';
import { Box, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';

type SelectIndustryComponentProps = {
  data?: Industry[];
  indystry: string;
  handleChangeIndustry: (event: SelectChangeEvent) => void;
  handleChangeCatalogues: (key: number) => void;
}

export const SelectIndustryComponent: FC<SelectIndustryComponentProps> = ({
  data,
  indystry,
  handleChangeIndustry,
  handleChangeCatalogues,
}: SelectIndustryComponentProps): JSX.Element => {
  return (
    <Box width="100%" mt={1}>
      <FormControl fullWidth>
        <InputLabel size="small" id="select-label">
          Select industry
        </InputLabel>

        <div data-elem="industry-select">
          <Select
            fullWidth
            size="small"
            value={indystry}
            labelId="select-label"
            label="Select industry"
            onChange={handleChangeIndustry}
            disabled={!data}
          >
            {data ? data.map((el: Industry) => (
              <MenuItem
                key={el.key}
                value={el.title_rus}
                onClick={() => handleChangeCatalogues(el.key)}
              >
                {el.title_rus}
              </MenuItem>
            )): false}
          </Select>
        </div>
      </FormControl>
    </Box>
  );
};
