export type Equipment = {
    id: string;
    name: string;
    sku: string;
    category: string;
    stock: number;
    status: 'verfügbar' | 'ausgeliehen' | 'in Reparatur';
};
