
import { NgModule } from '@angular/core';
import { AuthenticationModule } from '../modules/authentication/authentication.module';
import { DefaultLayoutModule } from '../shared/modules/default-layout/default-layout.module';
import { MyInterceptor } from '../shared/services/http-interceptor/MyInterceptor';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [SharedModule, AuthenticationModule, DefaultLayoutModule],
  declarations: [],
  providers: [MyInterceptor],
})
export class CoreModule {}
