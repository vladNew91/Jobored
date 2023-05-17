import {
    Menu,
    MenuItem,
    IconButton,
} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import StarIcon from '@mui/icons-material/Star';
import { memo } from 'react';

interface MobileMenuComponentProps {
    moreEl: HTMLElement | null;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
    handleSelectMenuItem: (path: string) => void;
}

export const MobileMenuComponent: React.FC<MobileMenuComponentProps> = memo(({
    moreEl,
    isMenuOpen,
    handleMenuClose,
    handleSelectMenuItem,
}: MobileMenuComponentProps): JSX.Element => {
    return (
        <Menu
            anchorEl={moreEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => handleSelectMenuItem("/")}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <ListIcon />
                </IconButton>

                <p>Vacancies</p>
            </MenuItem>

            <MenuItem onClick={() => handleSelectMenuItem("/favorites")}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <StarIcon />
                </IconButton>

                <p>Favorites</p>
            </MenuItem>
        </Menu>
    );
});
