export interface IHeadphones {
    id: number;
    title: string;
    price: number;
    rating: number;
    oldPrice?: number;
    image: string;
    onBuy: () => void;
}