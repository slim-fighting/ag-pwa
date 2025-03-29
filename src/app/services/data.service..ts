import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Category, Post } from "../models/blog";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private http = inject(HttpClient);
    private baseUrl = 'http://localhost:8080/api';

    getPosts() {
        return this.http.get<Post[]>(`${this.baseUrl}/posts`);
    }

    getCategories() {
        return this.http.get<Category[]>(`${this.baseUrl}/categories`);
    }
}

