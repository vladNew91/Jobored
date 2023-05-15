import { Industry, JobsData } from "../types";

const URL = "https://startup-summer-2023-proxy.onrender.com/2.0/";
const LOGIN = "sergei.stralenia@gmail.com";
const PASSWORD = "paralect123";
const CLIENT_ID = "2356"
const SEKRET_KEY = "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948";

export const getDataRequest = async (data: string): Promise<JobsData | Industry[]> => {
    const response = await fetch(`${URL}${data}/`, {
        method: 'GET',
        headers: {
            "x-secret-key": "GEU4nvd3rej*jeh.eqp",
            "X-Api-App-Id": SEKRET_KEY,
        }
    });

    const res = await response.json();

    return res;
};

export const getAccessToken = async () => {
    const response = await fetch(
        `${URL}oath2/password/?login=${LOGIN}&password=${PASSWORD}`
        + `&client_id=${CLIENT_ID}&client_secret=${SEKRET_KEY}`,
        {
            method: 'GET',
            headers: {
                "x-secret-key": "GEU4nvd3rej*jeh.eqp",
                "X-Api-App-Id": SEKRET_KEY,
            }
        }
    );

    const res = await response.json();

    document.cookie = `access_token=${res.access_token}; path=/; HttpOnly`;
    document.cookie = `refresh_token=${res.refresh_token}; expires=${res.expires_in}; path=/; HttpOnly`;

    localStorage.setItem("isAuth", "true");
};
