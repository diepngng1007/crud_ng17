export interface Product {
    id?: string;
    name: string;
    price: number;
    desc: string;
};
export interface DeleteProduct {
    id: string | undefined;
    name: string;
    price: number;
    desc: string;
}
