const URL = "https://startup-summer-2023-proxy.onrender.com/2.0/";
// const LOGIN = "sergei.stralenia@gmail.com";
// const PASSWORD = "paralect123";
const SEKRET_KEY = "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948";
// const AUTH_URL = `${URL}oauth2/password/?login=${LOGIN}&password=${PASSWORD}&client_id=2356&client_secret=${SEKRET_KEY}`;
const VACANCIES_URL = `${URL}vacancies`;

export const getJobsRequest = async () => {
    // const auth = await fetch(AUTH_URL, {
    //     method: 'GET',
    //     headers: {
    //         "x-secret-key": "GEU4nvd3rej*jeh.eqp",
    //     }
    // });

    const vacancies = await fetch(VACANCIES_URL, {
        method: 'GET',
        headers: {
            "x-secret-key": "GEU4nvd3rej*jeh.eqp",
            "X-Api-App-Id": SEKRET_KEY,
        }
    })

    return vacancies.json();
};
