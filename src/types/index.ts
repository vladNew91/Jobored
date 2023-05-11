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