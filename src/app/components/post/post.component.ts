import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from "@angular/core";
import { Category, Post } from "../../models/blog";

import { Subscription } from "rxjs";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { DataService } from "../../services/data.service";
@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    imports: [CommonModule],
    standalone: true
})
export class PostComponent implements OnInit, OnDestroy {
    posts: Post[] = [];
    categories: Category[] = [];
    subs = new Subscription();
    offline = true;

    constructor(private dataService: DataService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        if (isPlatformBrowser(platformId)) {
            this.offline = !navigator.onLine;
            window.addEventListener("online", () => {
                this.offline = false;
                this.loadData();
            })
            window.addEventListener("offline", () => {
                this.offline = true;
            })
        }
    }

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.subs.add(this.dataService.getPosts().subscribe((posts) => {
            this.posts = posts;
        }));
        this.subs.add(this.dataService.getCategories().subscribe((categories) => {
            this.categories = categories;
        }));
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
