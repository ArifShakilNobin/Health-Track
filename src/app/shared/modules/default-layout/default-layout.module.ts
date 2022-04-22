import { NgModule } from '@angular/core';
import { DefaultLayoutRoutes } from './default-layout.routing';
import { DefaultLayoutComponent } from './default-layout.component';
import { NgMaterialModule } from 'src/app/NgMaterial.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DefaultLayoutRoutes,
    NgMaterialModule,
  ],
  declarations: [DefaultLayoutComponent],
})
export class DefaultLayoutModule {}
