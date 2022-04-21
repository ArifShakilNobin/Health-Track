import { NgModule } from '@angular/core';
import { NgMaterialModule } from 'src/app/NgMaterial.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AuthenticationRoutes } from './authentication.routing';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    SharedModule,
    NgMaterialModule,
    AuthenticationRoutes,
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
