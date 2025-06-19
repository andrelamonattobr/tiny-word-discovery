import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProtectGuard } from './core/guards/protect.guard';

export const routes: Routes = [
    {
        path: "main",
        component: MainPageComponent,
        canActivate: [ProtectGuard]
    },
    {
        path: "",
        component: LoginPageComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
