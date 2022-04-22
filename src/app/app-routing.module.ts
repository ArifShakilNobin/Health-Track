import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/components/login/login.component';

const routes: Routes = [
  // {path:'login', component: LoginComponent},
  {
    path: 'login',
    loadChildren: () =>import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'doctor',
    loadChildren: () =>import('./modules/doctor/doctor.module').then((m) => m.DoctorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
