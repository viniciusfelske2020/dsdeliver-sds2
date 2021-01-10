export type Product = {
        id: number;
        name: string;
        price: number;
        description: string;
        imageUrl: string;
}

export type OrderLocationData = {
    address: string,
    latitude: number,
    longitude: number,
}