export type Job = {
    id: number;
    currency: string;
    profession: string;
    firm_name: string;
    town: { title: string };
    type_of_work: { title: string };
    vacancyRichText: string;
    payment_to: number;
    payment_from: number;
}

export type JobsData = {
    objects: Job[];
}

export type Industry = {
    key: number;
    title_rus: string;
}

export type Filters = {
    published: number;
    payment_from: string;
    payment_to: string;
    catalogues: string;
}
