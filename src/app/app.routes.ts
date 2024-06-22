import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'blog',
                component: BlogComponent
            },
            {
                path: 'contact-us',
                component: ContactUsComponent
            }
        ]
    },
    {
        path: 'blog-post/:params',
        component: BlogPostComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
