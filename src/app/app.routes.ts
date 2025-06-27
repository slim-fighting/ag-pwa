import { Routes } from '@angular/router';

import { TestComponent } from './components/test/test.component';
import { PostComponent } from './components/post/post.component';

export const routes: Routes = [
    {
        path: '',
        component: PostComponent
    },
    {
        path: 'test',
        component: TestComponent
    }
];
