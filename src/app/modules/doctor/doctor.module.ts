import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from 'src/app/NgMaterial.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorRoutes } from './doctor.routing';

@NgModule({
  imports: [
    SharedModule,
    NgMaterialModule,
    DoctorRoutes
  ],
  declarations: [DoctorComponent]
})
export class DoctorModule { }
