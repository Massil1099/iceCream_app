export interface Flavor {
    name: string;
    stock: number; //quantite en stock
    img: string;
    isEmpty: boolean;    // true si stock <= 0
    scoops: number;
}
