export interface Post {
    id: number;
    title: string;
    content: string;
    categoryId: number;
    createdAt: string;
}

export interface Category {
    id: number;
    name: string;
}
