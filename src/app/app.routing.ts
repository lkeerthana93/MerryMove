import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const appRoutes: Routes = [
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
