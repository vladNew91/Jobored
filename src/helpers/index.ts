import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useGoToPage = () => {
    const navigate = useNavigate();

    const goToPage = useCallback((path: string) => navigate(path), [navigate])

    return { goToPage };
};

export const getSalary = ({
    from,
    to,
}: {
    from: number,
    to: number,
}) => {
    switch (true) {
        case !!(from && to):
            return `${from} - ${to}`;
        case !from:
            return `${to}`;
        case !to:
            return `from ${from}`;
        default:
            break;
    }
};

export const useCurrentPath = () => {
    const location = useLocation();
    return location.pathname;
};
