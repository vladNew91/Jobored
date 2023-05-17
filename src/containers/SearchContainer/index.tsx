import { FC, memo, useCallback, useState } from "react";
import { setKeyWord } from "../../modules/slices";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { styled, InputBase, Button } from '@mui/material';
import { searchedKeyWord } from "../../modules/selectors";

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

export const SearchContainer: FC = memo((): JSX.Element => {
    const keyWord = useSelector(searchedKeyWord);
    const [value, setValue] = useState(keyWord);

    const dispatch = useDispatch();

    const handleChangeValue = useCallback((
        e: React.ChangeEvent<HTMLInputElement>
    ) => setValue(e.target.value), []);    

    const handleSearchVacancy = useCallback(() => {
        dispatch(setKeyWord(value))
    }, [dispatch, value]);

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>

            <div
                data-elem="search-input"
                style={{ width: "calc(100% - 43px)" }}
            >
                <StyledInputBase
                    fullWidth
                    placeholder="Enter job title"
                    inputProps={{ 'aria-label': 'search' }}
                    value={value}
                    onChange={handleChangeValue}
                />
            </div>

            <div data-elem="search-button">
                <SearchButton
                    variant="contained"
                    onClick={handleSearchVacancy}
                >
                    Search
                </SearchButton>
            </div>
        </Search>
    );
});
