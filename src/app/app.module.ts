import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData, DatePipe, TitleCasePipe } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { NgMaterialModule } from './NgMaterial.module';
import { ToastrModule } from 'ngx-toastr';
import { MyInterceptor } from './shared/services/http-interceptor/MyInterceptor';
import { AuthGuard } from './shared/services/auth-Guard/auth-guard.service';
import { CoreModule } from './core/core.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    NgMaterialModule,
    ToastrModule.forRoot(),
    
  ],
  // providers: [DatePipe, DatePipe, TitleCasePipe],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
