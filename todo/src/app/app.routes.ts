import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { canActivateFn } from './service/route-guard.service';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'welcome/:name',component:WelcomeComponent,canActivate:[canActivateFn]}, //specify the paths
    {path:'todos',component:ListTodosComponent,canActivate:[canActivateFn]},
    {path:'logout',component:LogoutComponent,canActivate:[canActivateFn]},
    {path:'**',component:ErrorComponent}
];
