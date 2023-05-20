import { useCallback } from "react";
import { Auth } from "../types";
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

export const setAuthCookies = (response: Auth) => {
    document.cookie = (
        `access_token=${response.access_token};` +
        `refresh_token=${response.refresh_token};` +
        `expires=${response.expires_in};` +
        `path=/;` +
        ` HttpOnly`
    )
};

export const setAuthToStorage = () => {
    sessionStorage.setItem("isAuth", "true");
};
