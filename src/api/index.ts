import { Industry, JobsData } from "../types";
import { QueryFunctionContext } from 'react-query';
import { setAuthCookies, setAuthToStorage } from '../helpers';

const URL = "https://startup-summer-2023-proxy.onrender.com/2.0/";
const LOGIN = "sergei.stralenia@gmail.com";
const PASSWORD = "paralect123";
const CLIENT_ID = "2356"
const SEKRET_KEY = (
    "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948"
);

export const getAccessToken = async () => {
    const response = await fetch(
        `${URL}oauth2/password/?login=${LOGIN}&password=${PASSWORD}` +
        `&client_id=${CLIENT_ID}&client_secret=${SEKRET_KEY}&hr=0`,
        {
            method: 'GET',
            headers: {
                "x-secret-key": "GEU4nvd3rej*jeh.eqp",
                "X-Api-App-Id": SEKRET_KEY,
            }
        }
    );

    const res = await response.json();

    setAuthCookies(res);
    setAuthToStorage();
};

export const getCatalogues = async (): Promise<Industry[]> => {
    const response = await fetch(`${URL}catalogues/`, {
        method: 'GET',
        headers: {
            "x-secret-key": "GEU4nvd3rej*jeh.eqp",
            "X-Api-App-Id": SEKRET_KEY,
        },
    });

    const res: Industry[] = await response.json();

    return res;
};

export const searchVacancies = async ({
    queryKey,
}: QueryFunctionContext<[
    string,
    {
        keyWord: string,
        from: string,
        to: string,
        catalogues: string,
    }
]>): Promise<JobsData> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, { keyWord, from, to, catalogues }] = queryKey;

    const url = `${URL}vacancies/?${keyWord ?
        `keyword=${keyWord}` : ""
        }${from ?
            `&payment_from=${from}` : ""
        }${to ?
            `&payment_to=${to}` : ""
        }${catalogues ?
            `&catalogues=${catalogues}` : ""
        }`;

    const response = await fetch(url,
        {
            method: 'GET',
            headers: {
                "x-secret-key": "GEU4nvd3rej*jeh.eqp",
                "X-Api-App-Id": SEKRET_KEY,
            },
        }
    );

    const res: JobsData = await response.json();

    return res;
};
