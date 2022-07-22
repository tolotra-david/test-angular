import { ListsComponent } from './components/lists/lists.component';
import { AuthGaurd } from './services/auth-guard.service';
import { FakeComponent } from './components/fake/fake.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGaurd],
        children: [
            {
                path: 'fake',
                component: FakeComponent,
            },
            {
                path: 'lists',
                component: ListsComponent,
            }, 
            {
                path: '',
                component: ListsComponent
            }
        ]
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }