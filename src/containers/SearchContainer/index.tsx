import { FC } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { styled, InputBase, Button } from '@mui/material';

const Search = styled('div')(({
    display: "flex",
    alignItems: "center",
    position: 'relative',
    width: "100%",
    height: 48,
    borderRadius: 8,
    padding: "8px 12px",
    boxSizing: "border-box",
    backgroundColor: "#FFFFFF",
}));

const SearchIconWrapper = styled('div')(({
    height: '100%',
    display: 'flex',
    color: "#ACADB9",
    alignItems: 'center',
    position: 'absolute',
    pointerEvents: 'none',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "calc(100% - 83px)",
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        width: '100%',
    },
}));

const SearchButton = styled(Button)(({
    width: 83,
    height: 32,
    float: "right",
    fontSize: "14px",
    background: "#5E96FC",
}));

export const SearchContainer: FC = (): JSX.Element => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
                placeholder="Enter job title"
                inputProps={{ 'aria-label': 'search' }}
            />

            <SearchButton variant="contained">Search</SearchButton>
        </Search>
    );
};
